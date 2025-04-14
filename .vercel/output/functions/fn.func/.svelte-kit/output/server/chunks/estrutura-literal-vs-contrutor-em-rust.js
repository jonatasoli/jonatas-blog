import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "postId": 4,
  "title": "Sintaxe literal vs Construtor em Rust",
  "imgUrl": "",
  "summary": "As ferramentas que estou usando no meu workflow de trabalho",
  "publishedAt": "2021-04-08T00:00:00.000Z"
};
const Estrutura_literal_vs_contrutor_em_rust = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-56u2mv">Essa é uma tradução livre <a href="https://steveklabnik.com/writing/structure-literals-vs-constructors-in-rust" rel="nofollow">deste artigo</a>.</p> <h1 data-svelte-h="svelte-1hyd89c">Estrutura literal vs construtor em Rust</h1> <p data-svelte-h="svelte-hfr6fq">Aprender o básico de uma linguagem e a sintaxe é fácil. Agora como dar sentido para todos aqueles bits pode ser um pouco mais difícil. Há uma rede de interseções de três funcionalidades do Rust que vejo pessoas usando, mas nunca vi escrito.Eu espliquei essa técnica para algumas pessoas em <em>#rust-bennigers</em> outro dia, pensei em escrever pra ajudar você também.</p> <p data-svelte-h="svelte-1a3rlx9">Um pequeno review, se você tem uma <em>struct</em> em Rust como este:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">struct Point &#123;
    x: i32,
    y: i32,
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-lpu9mc">Você pode usar a ‘sintaxe literal do <em>struct</em>’ para criar uma nova instância do struct:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">let origin = Point &#123; x: 0, y: 0 &#125;;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-10hnv3g">Normalmente, esta sintaxe somente funciona se você tem acessso a propriedade da <em>struct</em> e de seu membro pela regra de privacidade do <em>Rust</em>.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    pub struct Point &#123;
        x: i32,
        y: i32,
    &#125;

    pub fn foo(x: i32, y: i32) -&gt; Point &#123;
        Point &#123; x: x, y: y &#125; // isto é bom , já que estamos no mesmo módulo
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point &#123; x: 0, y: 0 &#125;; // isto não é bom
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1lss2gp">Nós não podemos usar a sintaxe literal <em>struct</em> na função <em>main</em> por que <em>x</em> e <em>y</em> também não são publicos.</p> <p data-svelte-h="svelte-1pk2hq4">Mas, dentro do mesmo módulo nós temos acesso, então funciona. Como podemos deixar <em>main</em> instanciar <em>Point</em>, se não podemos usar uma sintaxe literal? Bem, nossa função foo faz isto, então nós podemos expo-la. Seria mais conveniente se nós associarmos a uma função <em>new</em>.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    pub struct Point &#123;
        x: i32,
        y: i32,
    &#125;
    
    impl Point &#123;
        pub fn new(x: i32, y: i32) -&gt; Point &#123;
            Point &#123; x: x, y: y &#125; // Isto é bom, já que estamos no mesmo módulo
        &#125;
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point::new(0, 0);
&#125;
</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1xczo6v">Certo, mas se por alguma razão nós quiséssemos que <em>x</em> e <em>y</em> sejam públicos ou ainda se quiséssemos forçar as pessoas a criar uma função <em>new</em> para criar um <em>Point</em>?</p> <p data-svelte-h="svelte-1x7lvmd">Talvez nossa mudança gere um efeito colateral importante. Então se trocarmos nosso código para isto:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    pub struct Point &#123;
        pub x: i32,
        pub y: i32,
    &#125;
    
    impl Point &#123;
        pub fn new(x: i32, y: i32) -&gt; Point &#123;
            Point &#123; x: x, y: y &#125; // isto é bom, já que estamos no mesmo módulo
        &#125;
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point::new(0, 0);

    // mas, isto também:
    let origin = foo::Point &#123; x: 0, y: 0 &#125;;
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-7vkpee">Fazendo todos os elementos de <em>Point</em> publicos, nós reativariamos a sintaxe literal, que não é o que gostariamos de chegar, então o que fazer?</p> <p data-svelte-h="svelte-1ce4k8r">Pra corrigir isso precisamos de dois <em>insights</em>. O primeiro é “zero-size types”. No Rust tem alguns tipos que não requerem nenhum armazenamento. Vamos pegar o exemplo da tupla vazia ’()’, ele também só tem uma possibilidade de valor que é a própria tupla vazia. Assim nós não há necessidade de armazenar nada em memória pra representa-la.</p> <p data-svelte-h="svelte-qm4uqf">Se nós temos um valor válido, nós já saberemos o que ele é. Isso significa que quando a aplicação é compilada a tupla vazia () simplesmente desaparece, então podemos fazer isso.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    pub struct Point &#123;
        pub x: i32,
        pub y: i32,
        _secret: (),
    &#125;
    
    impl Point &#123;
        pub fn new(x: i32, y: i32) -&gt; Point &#123;
            Point &#123; x: x, y: y, _secret: () &#125;
        &#125;
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point::new(0, 0);
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-142ms6t">Agora nós temos um novo atributo privado <em>_secret()</em>. Eu dei esse nome com o <em>underscore</em> ’_’, por que não temos intenção de usa-lo pra nada. Assim o Rust não vai nos dar nenhum warning pois como <em>_secret</em> é do tipo () e será gerado em tempo de compilação e não afetará nosso <em>struct</em> <em>Point</em>.</p> <p data-svelte-h="svelte-7bphlc">Mas, tendo este atributo privado afeta a permissão que temos para contruir <em>Point</em>. <em>main</em> não pode usar a sintaxe literal de <em>struct</em> uma vez que nem todos os campos são públicos.</p> <p data-svelte-h="svelte-1qr1jv9">No entanto lembre-se que privacidade é em nível de módulo em Rust, portanto ainda podemos usar a sintaxe literal dentro do módulo <em>foo</em>:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    pub struct Point &#123;
        pub x: i32,
        pub y: i32,
        _secret: (),
    &#125;
    
    impl Point &#123;
        pub fn new(x: i32, y: i32) -&gt; Point &#123;
            Point &#123; x: x, y: y, _secret: () &#125;
        &#125;
    &#125;

    fn foo() -&gt; Point &#123;
        Point: &#123; x: 0, y: 0, _secret: () &#125; // Isto ainda é permitido!
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point::new(0, 0);
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1y88h3x">Para previnir que <em>foo</em> seja usado com sintaxe literal, nós precisamos de mais um conceito: <em>pub use</em>, veja isto:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mod foo &#123;
    mod point &#123;
        pub struct Point &#123;
            pub x: i32,
            pub y: i32,
            _secret: (),
        &#125;
    
        impl Point &#123;
            pub fn new(x: i32, y: i32) -&gt; Point &#123;
                Point &#123; x: x, y: y, _secret: () &#125;
            &#125;
        &#125;
    &#125;

    pub use foo::point::Point;

    fn foo() -&gt; Point &#123;
        Point::new(0, 0) // Precisamos usar &#96;new&#96; aqui, Já que não estamos mais dentro do mesmo módulo!
    &#125;
&#125;

fn main() &#123;
    let origin = foo::Point::new(0, 0);
&#125;
</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1loe24e">Dando pra <em>Point</em> seu próprio módulo, tudo que é privado pra ele fica privado para quem o usa-lo também. Mas, escrevendo <code>foo::point::Point</code> fica verboso, ai <code>pub use</code> vem nos salvar! Nós re-exportamos a estrutura de <em>Point</em> em <em>foo</em>, então nós podemos ainda usar  <code>foo:Point</code>, mas uma vez que um de seus membros é privado, a sintaxe literal não é permitida.</p> <p data-svelte-h="svelte-1n7i04f">Para mim, entender coisas como essa é quando eu realmente começo a sentir que estou conhecendo uma linguagem: juntando três ou quatro conceitos díspares para atingir algum objetivo. É quando uma linguagem deixa de ser um monte de partes desconexas e começa a se tornar um todo coeso.</p>`;
});
export {
  Estrutura_literal_vs_contrutor_em_rust as default,
  metadata
};
