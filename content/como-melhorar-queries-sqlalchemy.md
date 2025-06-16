---
title: "Como melhorar suas queries no SQLAlchemy com column_property"
description: "Como melhorar suas queries no SQLAlchemy usando column_property."
date: 2025-06-16
---


Bom hoje quero falar com vocês uma coisa que fiz recentemente para facilitar algumas coisas [no meu e-commerce open source](https://github.com/jonatasoli/fast-ecommerce-back/).

Para entender o cenário eu tenho as tabelas a ProductDB, InventoryDB e CategoryDB onde:

CategoryDB tem as categorias onde um produto só pode ter uma categoria

InventoryDB é onde fica registrado o estoque num formato de "extrato" onde pode ser adicionado ou removido estoque de um produto.

Um produto pode ter várias entradas em InventoryDB seja de entrada ou saída.

Então para criar uma query onde eu preciso retornar uma lista de produtos com sua categoria e a quantidade pode ser algo não muito trivial se você quiser tentar resolver tudo isso na query como abaixo:

```python
 with (db):
        category_alias = aliased(CategoryDB)
        products = (
            select(
                ProductDB.product_id,
                ProductDB.name,
                ProductDB.uri,
                ProductDB.price,
                ProductDB.active,
                ProductDB.direct_sales,
                ProductDB.description,
                ProductDB.image_path,
                ProductDB.installments_config,
                ProductDB.installments_list,
                ProductDB.discount,
                ProductDB.category_id,
                ProductDB.showcase,
                ProductDB.feature,
                ProductDB.show_discount,
                ProductDB.height,
                ProductDB.width,
                ProductDB.weight,
                ProductDB.length,
                ProductDB.diameter,
                ProductDB.sku,
                ProductDB.currency,
                func.coalesce(func.sum(InventoryDB.quantity), 0).label(
                    'quantity',
                ),
                category_alias.category_id.label('category_id_1'),
                category_alias.name.label('name_1'),
                category_alias.path,
                category_alias.menu,
                category_alias.showcase.label('showcase_1'),
                category_alias.image_path.label('image_path_1'),
            )
            .where(
                ProductDB.name.ilike(f'%{search}%'),
            )
            .outerjoin(
                InventoryDB,
                InventoryDB.product_id == ProductDB.product_id,
            )
            .join(
                category_alias,
                ProductDB.category_id == category_alias.category_id,
            )
            .group_by(ProductDB.product_id, category_alias.category_id)
        )
        products = db.execute(products)
    products_list = []

    keys = products.keys()
    for product in products:
        product_dict = dict(zip(keys, product))
        if 'category_id_1' in product_dict:
            product_dict['category'] = {
                'category_id': product_dict['category_id_1'],
                'name': product_dict['name_1'],
                'path': product_dict['path'],
                'menu': product_dict['menu'],
                'showcase': product_dict['showcase_1'],
                'image_path': product_dict['image_path_1'],
            }
            del product_dict['category_id_1']
            del product_dict['name_1']
            del product_dict['path']
            del product_dict['menu']
            del product_dict['showcase_1']
            del product_dict['image_path_1']
        products_list.append(ProductCategoryInDB.model_validate(product_dict)) 
```

Veja que uso o pydantic como modelo para retornar para minha API e nesse formato tenho alguns problemas.

Eu preciso passar minha categoria pois, nos meus testes locais aqui ele não retornava as colunas de column mesmo que ele estivesse mapeado o relacionamento na minha tabela:

```python
class ProductDB(Base):
    __tablename__ = 'product'

    product_id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    uri: Mapped[str]
    price: Mapped[Decimal]
    active: Mapped[bool] = mapped_column(default=False)
    direct_sales: Mapped[bool] = mapped_column(default=False)
    description: Mapped[Json] = mapped_column(JSON, nullable=True)
    image_path: Mapped[str | None]
    installments_config: Mapped[int]
    installments_list: Mapped[dict] = mapped_column(JSON, nullable=True)
    discount: Mapped[int | None]
    category_id: Mapped[int] = mapped_column(
        ForeignKey('category.category_id'),
    )
    category: Mapped['CategoryDB'] = relationship(
        foreign_keys=[category_id],
        backref='ProductDB',
        cascade='all,delete',
        uselist=False,
        lazy='joined',
    )
    inventory = relationship(
        'InventoryDB',
        backref=backref('ProductDB', uselist=False),
        cascade='all,delete',
        foreign_keys=[product_id],
        primaryjoin='ProductDB.product_id == InventoryDB.product_id',
    )
    showcase: Mapped[bool] = mapped_column(default=False)
    feature: Mapped[bool] = mapped_column(default=False, server_default='0')
    show_discount: Mapped[bool] = mapped_column(default=False)
    height: Mapped[Decimal | None]
    width: Mapped[Decimal | None]
    weight: Mapped[Decimal | None]
    length: Mapped[Decimal | None]
    diameter: Mapped[Decimal | None]
    sku: Mapped[str]
    currency: Mapped[str] = mapped_column(default='BRL') 
```

Então por que isso acontece?

Se eu tentar executar minha query usando algo como db.scalars.all() como o objeto não está mapeando da model ele me voltar uma tupla, com isso preciso pegar essa tupla e fazer o mapeamento na mão da tabela category e além disso eu tenho o trecho abaixo para calcular a quantidade.

```python
func.coalesce(func.sum(InventoryDB.quantity), 0).label(
                    'quantity',
                ),
```

E justamente esse campo calculado me impedia de mapear usando `db.scalars().all()` que me ajudaria a montar mais facilmente o objeto no pydantic usando um adapter.

Olhando pra isso acreditava que teria uma forma mais facil de resolver isso e ela existe que é a column_property.

_column_property_ é uma maneira de definir atributos em seus modelos que são calculados a partir de expressões SQL, em vez de serem armazenados diretamente no banco de dados. Pense neles como "colunas virtuais" que existem apenas quando você consulta seu modelo.

Falando de forma mais simplista, eu consigo criar um campo calculado direto na minha model como fosse a função de soma e como está na model eu consigo criar um objeto do ORM que facilita a conversão pro modelo do pydantic.

A model ficaria assim:

```python
class ProductDB(Base):
    __tablename__ = 'product'

    product_id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    uri: Mapped[str]
    price: Mapped[Decimal]
    active: Mapped[bool] = mapped_column(default=False)
    direct_sales: Mapped[bool] = mapped_column(default=False)
    description: Mapped[Json] = mapped_column(JSON, nullable=True)
    image_path: Mapped[str | None]
    installments_config: Mapped[int]
    installments_list: Mapped[dict] = mapped_column(JSON, nullable=True)
    discount: Mapped[int | None]
    category_id: Mapped[int] = mapped_column(
        ForeignKey('category.category_id'),
    )
    category: Mapped['CategoryDB'] = relationship(
        foreign_keys=[category_id],
        backref='products',
        cascade='all,delete',
        uselist=False,
        lazy='joined',
    )
    inventory = relationship("InventoryDB", back_populates="product")
    showcase: Mapped[bool] = mapped_column(default=False)
    feature: Mapped[bool] = mapped_column(default=False, server_default='0')
    show_discount: Mapped[bool] = mapped_column(default=False)
    height: Mapped[Decimal | None]
    width: Mapped[Decimal | None]
    weight: Mapped[Decimal | None]
    length: Mapped[Decimal | None]
    diameter: Mapped[Decimal | None]
    sku: Mapped[str]
    currency: Mapped[str] = mapped_column(default='BRL')

    quantity = column_property(
        select(func.coalesce(func.sum(InventoryDB.quantity), 0))
        .where(InventoryDB.product_id == product_id)
        .correlate_except(InventoryDB) 
        .scalar_subquery(),
    ) 
```

Ai crio um novo atributo como column property e faço uma query dentro dele com a soma.

Assim consigo simplificar a minha query para ficar assim:

```python
 async with db().begin() as transaction:
        products = (
            select(ProductDB)
            .where(ProductDB.active == True)
            .order_by(ProductDB.product_id.asc())
        )
 
        result = await transaction.session.execute(products)
        adapter = TypeAdapter(List[ProductCategoryInDB])
        products_list = result.scalars().all()
        products_list = adapter.validate_python(products_list) 
```

Ai uso um TypeAdapter já com o tipo de retorno que preciso e retiro aquele loop para montar o objeto na mão e tenho tudo já retornando automagicamente.

Assim quantity é uma coluna lazy ou seja cada vez que for chamar quantity no meu objeto products_list ele vai rodar uma subquery. Esse é o preço que vou pagar aqui, pois ao invés de já calcular esse campo diretamente na minha query principal e só acessar quantity toda vez que chamar a coluna de alguma dessas linhas ele vai rodar a query da quantidade.

Num cenário com muitas linhas isso pode criar um gargalo, porém como a versão real dessa query eu uso paginação é um ônus pequeno e que vai cair principalmente no banco de dados mas, não creio que vá deteriorar meu banco e em contra-partida eu consigo ter uma query mais simples e evito laços direamente em python e uso todo o poder do pydantic.

Bom espero que isso te ajude nos seus desafio com SQLAlchemy e Pydantic!
