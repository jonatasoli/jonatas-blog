---
postId: 4
title: "Sintaxe literal vs Construtor em Rust"
imgUrl: ""
summary: "As ferramentas que estou usando no meu workflow de trabalho"
publishedAt: 2021-04-08
---

Essa é uma tradução livre [deste artigo](https://steveklabnik.com/writing/structure-literals-vs-constructors-in-rust).

# Estrutura literal vs construtor em Rust

Aprender o básico de uma linguagem e a sintaxe é fácil. Agora como dar sentido para todos aqueles bits pode ser um pouco mais difícil. Há uma rede de interseções de três funcionalidades do Rust que vejo pessoas usando, mas nunca vi escrito.Eu espliquei essa técnica para algumas pessoas em *#rust-bennigers* outro dia, pensei em escrever pra ajudar você também.

Um pequeno review, se você tem uma *struct* em Rust como este:

```
struct Point {
    x: i32,
    y: i32,
}
```

Você pode usar a 'sintaxe literal do *struct*' para criar uma nova instância do struct:

```
let origin = Point { x: 0, y: 0 };
```

Normalmente, esta sintaxe somente funciona se você tem acessso a propriedade da *struct* e de seu membro pela regra de privacidade do *Rust*.

```
mod foo {
    pub struct Point {
        x: i32,
        y: i32,
    }

    pub fn foo(x: i32, y: i32) -> Point {
        Point { x: x, y: y } // isto é bom , já que estamos no mesmo módulo
    }
}

fn main() {
    let origin = foo::Point { x: 0, y: 0 }; // isto não é bom
}
```

Nós não podemos usar a sintaxe literal *struct* na função *main* por que *x* e *y* também não são publicos.

Mas, dentro do mesmo módulo nós temos acesso, então funciona. Como podemos deixar *main* instanciar *Point*, se não podemos usar uma sintaxe literal? Bem, nossa função foo faz isto, então nós podemos expo-la. Seria mais conveniente se nós associarmos a uma função *new*.

```
mod foo {
    pub struct Point {
        x: i32,
        y: i32,
    }
    
    impl Point {
        pub fn new(x: i32, y: i32) -> Point {
            Point { x: x, y: y } // Isto é bom, já que estamos no mesmo módulo
        }
    }
}

fn main() {
    let origin = foo::Point::new(0, 0);
}

```

Certo, mas se por alguma razão nós quiséssemos que *x* e *y* sejam públicos ou ainda se quiséssemos forçar as pessoas a criar uma função *new* para criar um *Point*?

Talvez nossa mudança gere um efeito colateral importante. Então se trocarmos nosso código para isto:

```
mod foo {
    pub struct Point {
        pub x: i32,
        pub y: i32,
    }
    
    impl Point {
        pub fn new(x: i32, y: i32) -> Point {
            Point { x: x, y: y } // isto é bom, já que estamos no mesmo módulo
        }
    }
}

fn main() {
    let origin = foo::Point::new(0, 0);

    // mas, isto também:
    let origin = foo::Point { x: 0, y: 0 };
}
```

Fazendo todos os elementos de *Point* publicos, nós reativariamos a sintaxe literal, que não é o que gostariamos de chegar, então o que fazer?

Pra corrigir isso precisamos de dois *insights*. O primeiro é "zero-size types". No Rust tem alguns tipos que não requerem nenhum armazenamento. Vamos pegar o exemplo da tupla vazia '()', ele também só tem uma possibilidade de valor que é a própria tupla vazia. Assim nós não há necessidade de armazenar nada em memória pra representa-la.

Se nós temos um valor válido, nós já saberemos o que ele é. Isso significa que quando a aplicação é compilada a tupla vazia () simplesmente desaparece, então podemos fazer isso.


```
mod foo {
    pub struct Point {
        pub x: i32,
        pub y: i32,
        _secret: (),
    }
    
    impl Point {
        pub fn new(x: i32, y: i32) -> Point {
            Point { x: x, y: y, _secret: () }
        }
    }
}

fn main() {
    let origin = foo::Point::new(0, 0);
}
```

Agora nós temos um novo atributo privado *_secret()*. Eu dei esse nome com o *underscore* '_', por que não temos intenção de usa-lo pra nada. Assim o Rust não vai nos dar nenhum warning pois como *_secret* é do tipo () e será gerado em tempo de compilação e não afetará nosso *struct* *Point*.

Mas, tendo este atributo privado afeta a permissão que temos para contruir *Point*. *main* não pode usar a sintaxe literal de *struct* uma vez que nem todos os campos são públicos.

No entanto lembre-se que privacidade é em nível de módulo em Rust, portanto ainda podemos usar a sintaxe literal dentro do módulo *foo*:


```
mod foo {
    pub struct Point {
        pub x: i32,
        pub y: i32,
        _secret: (),
    }
    
    impl Point {
        pub fn new(x: i32, y: i32) -> Point {
            Point { x: x, y: y, _secret: () }
        }
    }

    fn foo() -> Point {
        Point: { x: 0, y: 0, _secret: () } // Isto ainda é permitido!
    }
}

fn main() {
    let origin = foo::Point::new(0, 0);
}
```


Para previnir que *foo* seja usado com sintaxe literal, nós precisamos de mais um conceito: *pub use*, veja isto:

```
mod foo {
    mod point {
        pub struct Point {
            pub x: i32,
            pub y: i32,
            _secret: (),
        }
    
        impl Point {
            pub fn new(x: i32, y: i32) -> Point {
                Point { x: x, y: y, _secret: () }
            }
        }
    }

    pub use foo::point::Point;

    fn foo() -> Point {
        Point::new(0, 0) // Precisamos usar `new` aqui, Já que não estamos mais dentro do mesmo módulo!
    }
}

fn main() {
    let origin = foo::Point::new(0, 0);
}

```

Dando pra *Point* seu próprio módulo, tudo que é privado pra ele fica privado para quem o usa-lo também. Mas, escrevendo `foo::point::Point` fica verboso, ai `pub use` vem nos salvar! Nós re-exportamos a estrutura de *Point* em *foo*, então nós podemos ainda usar  `foo:Point`, mas uma vez que um de seus membros é privado, a sintaxe literal não é permitida.

Para mim, entender coisas como essa é quando eu realmente começo a sentir que estou conhecendo uma linguagem: juntando três ou quatro conceitos díspares para atingir algum objetivo. É quando uma linguagem deixa de ser um monte de partes desconexas e começa a se tornar um todo coeso.
