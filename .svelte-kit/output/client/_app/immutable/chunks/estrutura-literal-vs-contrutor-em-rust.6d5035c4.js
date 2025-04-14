import{s as at,n as qe}from"./scheduler.94dd1e8a.js";import{S as st,i as ot,g as o,s as n,H as r,h as i,y as m,c as l,j as p,G as d,f as t,k as f,a as s}from"./index.7a40327c.js";function it(Ze){let u,ge='Essa é uma tradução livre <a href="https://steveklabnik.com/writing/structure-literals-vs-constructors-in-rust" rel="nofollow">deste artigo</a>.',V,c,ye="Estrutura literal vs construtor em Rust",B,v,we="Aprender o básico de uma linguagem e a sintaxe é fácil. Agora como dar sentido para todos aqueles bits pode ser um pouco mais difícil. Há uma rede de interseções de três funcionalidades do Rust que vejo pessoas usando, mas nunca vi escrito.Eu espliquei essa técnica para algumas pessoas em <em>#rust-bennigers</em> outro dia, pensei em escrever pra ajudar você também.",D,x,He="Um pequeno review, se você tem uma <em>struct</em> em Rust como este:",F,P,G,Ke=`<code class="language-undefined">struct Point &#123;
    x: i32,
    y: i32,
&#125;</code>`,J,_,Me="Você pode usar a ‘sintaxe literal do <em>struct</em>’ para criar uma nova instância do struct:",O,b,Z,Qe='<code class="language-undefined">let origin = Point &#123; x: 0, y: 0 &#125;;</code>',K,q,Te="Normalmente, esta sintaxe somente funciona se você tem acessso a propriedade da <em>struct</em> e de seu membro pela regra de privacidade do <em>Rust</em>.",Q,g,W,We=`<code class="language-undefined">mod foo &#123;
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
&#125;</code>`,X,y,Ce="Nós não podemos usar a sintaxe literal <em>struct</em> na função <em>main</em> por que <em>x</em> e <em>y</em> também não são publicos.",Y,w,Le="Mas, dentro do mesmo módulo nós temos acesso, então funciona. Como podemos deixar <em>main</em> instanciar <em>Point</em>, se não podemos usar uma sintaxe literal? Bem, nossa função foo faz isto, então nós podemos expo-la. Seria mais conveniente se nós associarmos a uma função <em>new</em>.",$,H,ee,Xe=`<code class="language-undefined">mod foo &#123;
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
</code>`,te,M,Ee="Certo, mas se por alguma razão nós quiséssemos que <em>x</em> e <em>y</em> sejam públicos ou ainda se quiséssemos forçar as pessoas a criar uma função <em>new</em> para criar um <em>Point</em>?",ae,T,ze="Talvez nossa mudança gere um efeito colateral importante. Então se trocarmos nosso código para isto:",se,C,oe,Ye=`<code class="language-undefined">mod foo &#123;
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
&#125;</code>`,ie,L,Re="Fazendo todos os elementos de <em>Point</em> publicos, nós reativariamos a sintaxe literal, que não é o que gostariamos de chegar, então o que fazer?",ne,E,je="Pra corrigir isso precisamos de dois <em>insights</em>. O primeiro é “zero-size types”. No Rust tem alguns tipos que não requerem nenhum armazenamento. Vamos pegar o exemplo da tupla vazia ’()’, ele também só tem uma possibilidade de valor que é a própria tupla vazia. Assim nós não há necessidade de armazenar nada em memória pra representa-la.",le,z,he="Se nós temos um valor válido, nós já saberemos o que ele é. Isso significa que quando a aplicação é compilada a tupla vazia () simplesmente desaparece, então podemos fazer isso.",me,R,ue,$e=`<code class="language-undefined">mod foo &#123;
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
&#125;</code>`,re,j,ke="Agora nós temos um novo atributo privado <em>_secret()</em>. Eu dei esse nome com o <em>underscore</em> ’_’, por que não temos intenção de usa-lo pra nada. Assim o Rust não vai nos dar nenhum warning pois como <em>_secret</em> é do tipo () e será gerado em tempo de compilação e não afetará nosso <em>struct</em> <em>Point</em>.",pe,h,Ae="Mas, tendo este atributo privado afeta a permissão que temos para contruir <em>Point</em>. <em>main</em> não pode usar a sintaxe literal de <em>struct</em> uma vez que nem todos os campos são públicos.",de,k,Ne="No entanto lembre-se que privacidade é em nível de módulo em Rust, portanto ainda podemos usar a sintaxe literal dentro do módulo <em>foo</em>:",fe,A,ce,et=`<code class="language-undefined">mod foo &#123;
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
&#125;</code>`,ve,N,Se="Para previnir que <em>foo</em> seja usado com sintaxe literal, nós precisamos de mais um conceito: <em>pub use</em>, veja isto:",xe,S,Pe,tt=`<code class="language-undefined">mod foo &#123;
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
</code>`,_e,I,Ie="Dando pra <em>Point</em> seu próprio módulo, tudo que é privado pra ele fica privado para quem o usa-lo também. Mas, escrevendo <code>foo::point::Point</code> fica verboso, ai <code>pub use</code> vem nos salvar! Nós re-exportamos a estrutura de <em>Point</em> em <em>foo</em>, então nós podemos ainda usar  <code>foo:Point</code>, mas uma vez que um de seus membros é privado, a sintaxe literal não é permitida.",be,U,Ue="Para mim, entender coisas como essa é quando eu realmente começo a sentir que estou conhecendo uma linguagem: juntando três ou quatro conceitos díspares para atingir algum objetivo. É quando uma linguagem deixa de ser um monte de partes desconexas e começa a se tornar um todo coeso.";return{c(){u=o("p"),u.innerHTML=ge,V=n(),c=o("h1"),c.textContent=ye,B=n(),v=o("p"),v.innerHTML=we,D=n(),x=o("p"),x.innerHTML=He,F=n(),P=o("pre"),G=new r(!1),J=n(),_=o("p"),_.innerHTML=Me,O=n(),b=o("pre"),Z=new r(!1),K=n(),q=o("p"),q.innerHTML=Te,Q=n(),g=o("pre"),W=new r(!1),X=n(),y=o("p"),y.innerHTML=Ce,Y=n(),w=o("p"),w.innerHTML=Le,$=n(),H=o("pre"),ee=new r(!1),te=n(),M=o("p"),M.innerHTML=Ee,ae=n(),T=o("p"),T.textContent=ze,se=n(),C=o("pre"),oe=new r(!1),ie=n(),L=o("p"),L.innerHTML=Re,ne=n(),E=o("p"),E.innerHTML=je,le=n(),z=o("p"),z.textContent=he,me=n(),R=o("pre"),ue=new r(!1),re=n(),j=o("p"),j.innerHTML=ke,pe=n(),h=o("p"),h.innerHTML=Ae,de=n(),k=o("p"),k.innerHTML=Ne,fe=n(),A=o("pre"),ce=new r(!1),ve=n(),N=o("p"),N.innerHTML=Se,xe=n(),S=o("pre"),Pe=new r(!1),_e=n(),I=o("p"),I.innerHTML=Ie,be=n(),U=o("p"),U.textContent=Ue,this.h()},l(e){u=i(e,"P",{"data-svelte-h":!0}),m(u)!=="svelte-56u2mv"&&(u.innerHTML=ge),V=l(e),c=i(e,"H1",{"data-svelte-h":!0}),m(c)!=="svelte-1hyd89c"&&(c.textContent=ye),B=l(e),v=i(e,"P",{"data-svelte-h":!0}),m(v)!=="svelte-hfr6fq"&&(v.innerHTML=we),D=l(e),x=i(e,"P",{"data-svelte-h":!0}),m(x)!=="svelte-1a3rlx9"&&(x.innerHTML=He),F=l(e),P=i(e,"PRE",{class:!0});var a=p(P);G=d(a,!1),a.forEach(t),J=l(e),_=i(e,"P",{"data-svelte-h":!0}),m(_)!=="svelte-lpu9mc"&&(_.innerHTML=Me),O=l(e),b=i(e,"PRE",{class:!0});var Ve=p(b);Z=d(Ve,!1),Ve.forEach(t),K=l(e),q=i(e,"P",{"data-svelte-h":!0}),m(q)!=="svelte-10hnv3g"&&(q.innerHTML=Te),Q=l(e),g=i(e,"PRE",{class:!0});var Be=p(g);W=d(Be,!1),Be.forEach(t),X=l(e),y=i(e,"P",{"data-svelte-h":!0}),m(y)!=="svelte-1lss2gp"&&(y.innerHTML=Ce),Y=l(e),w=i(e,"P",{"data-svelte-h":!0}),m(w)!=="svelte-1pk2hq4"&&(w.innerHTML=Le),$=l(e),H=i(e,"PRE",{class:!0});var De=p(H);ee=d(De,!1),De.forEach(t),te=l(e),M=i(e,"P",{"data-svelte-h":!0}),m(M)!=="svelte-1xczo6v"&&(M.innerHTML=Ee),ae=l(e),T=i(e,"P",{"data-svelte-h":!0}),m(T)!=="svelte-1x7lvmd"&&(T.textContent=ze),se=l(e),C=i(e,"PRE",{class:!0});var Fe=p(C);oe=d(Fe,!1),Fe.forEach(t),ie=l(e),L=i(e,"P",{"data-svelte-h":!0}),m(L)!=="svelte-7vkpee"&&(L.innerHTML=Re),ne=l(e),E=i(e,"P",{"data-svelte-h":!0}),m(E)!=="svelte-1ce4k8r"&&(E.innerHTML=je),le=l(e),z=i(e,"P",{"data-svelte-h":!0}),m(z)!=="svelte-qm4uqf"&&(z.textContent=he),me=l(e),R=i(e,"PRE",{class:!0});var Ge=p(R);ue=d(Ge,!1),Ge.forEach(t),re=l(e),j=i(e,"P",{"data-svelte-h":!0}),m(j)!=="svelte-142ms6t"&&(j.innerHTML=ke),pe=l(e),h=i(e,"P",{"data-svelte-h":!0}),m(h)!=="svelte-7bphlc"&&(h.innerHTML=Ae),de=l(e),k=i(e,"P",{"data-svelte-h":!0}),m(k)!=="svelte-1qr1jv9"&&(k.innerHTML=Ne),fe=l(e),A=i(e,"PRE",{class:!0});var Je=p(A);ce=d(Je,!1),Je.forEach(t),ve=l(e),N=i(e,"P",{"data-svelte-h":!0}),m(N)!=="svelte-1y88h3x"&&(N.innerHTML=Se),xe=l(e),S=i(e,"PRE",{class:!0});var Oe=p(S);Pe=d(Oe,!1),Oe.forEach(t),_e=l(e),I=i(e,"P",{"data-svelte-h":!0}),m(I)!=="svelte-1loe24e"&&(I.innerHTML=Ie),be=l(e),U=i(e,"P",{"data-svelte-h":!0}),m(U)!=="svelte-1n7i04f"&&(U.textContent=Ue),this.h()},h(){G.a=null,f(P,"class","language-undefined"),Z.a=null,f(b,"class","language-undefined"),W.a=null,f(g,"class","language-undefined"),ee.a=null,f(H,"class","language-undefined"),oe.a=null,f(C,"class","language-undefined"),ue.a=null,f(R,"class","language-undefined"),ce.a=null,f(A,"class","language-undefined"),Pe.a=null,f(S,"class","language-undefined")},m(e,a){s(e,u,a),s(e,V,a),s(e,c,a),s(e,B,a),s(e,v,a),s(e,D,a),s(e,x,a),s(e,F,a),s(e,P,a),G.m(Ke,P),s(e,J,a),s(e,_,a),s(e,O,a),s(e,b,a),Z.m(Qe,b),s(e,K,a),s(e,q,a),s(e,Q,a),s(e,g,a),W.m(We,g),s(e,X,a),s(e,y,a),s(e,Y,a),s(e,w,a),s(e,$,a),s(e,H,a),ee.m(Xe,H),s(e,te,a),s(e,M,a),s(e,ae,a),s(e,T,a),s(e,se,a),s(e,C,a),oe.m(Ye,C),s(e,ie,a),s(e,L,a),s(e,ne,a),s(e,E,a),s(e,le,a),s(e,z,a),s(e,me,a),s(e,R,a),ue.m($e,R),s(e,re,a),s(e,j,a),s(e,pe,a),s(e,h,a),s(e,de,a),s(e,k,a),s(e,fe,a),s(e,A,a),ce.m(et,A),s(e,ve,a),s(e,N,a),s(e,xe,a),s(e,S,a),Pe.m(tt,S),s(e,_e,a),s(e,I,a),s(e,be,a),s(e,U,a)},p:qe,i:qe,o:qe,d(e){e&&(t(u),t(V),t(c),t(B),t(v),t(D),t(x),t(F),t(P),t(J),t(_),t(O),t(b),t(K),t(q),t(Q),t(g),t(X),t(y),t(Y),t(w),t($),t(H),t(te),t(M),t(ae),t(T),t(se),t(C),t(ie),t(L),t(ne),t(E),t(le),t(z),t(me),t(R),t(re),t(j),t(pe),t(h),t(de),t(k),t(fe),t(A),t(ve),t(N),t(xe),t(S),t(_e),t(I),t(be),t(U))}}}const mt={postId:4,title:"Sintaxe literal vs Construtor em Rust",imgUrl:"",summary:"As ferramentas que estou usando no meu workflow de trabalho",publishedAt:"2021-04-08T00:00:00.000Z"};class ut extends st{constructor(u){super(),ot(this,u,null,it,at,{})}}export{ut as default,mt as metadata};
