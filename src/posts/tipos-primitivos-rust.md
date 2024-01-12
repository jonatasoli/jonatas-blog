---
postId: 11
title: "Rust Descomplicado: Desvendando os mistérios dos tipos básicos"
imgUrl: "/post-images/rust-tipos-primitivos.png"
youtubeId: "dgtzHc5z80g"
summary: "Neste artigo, vamos explorar os tipos primitivos de Rust, um dos blocos fundamentais para trabalhar nesta linguagem."
publishedAt: 2024-01-12
---

# Rust Descomplicado: Desvendando os Mistérios dos Tipos Básicos

Olá tudo bem? Hoje quero falar com você sobre os tipos primitivos em rust. Tipos primitivos são em linguagens de programação como Rust, são os tipos básicos de dados que são fornecidos pela linguagem e não são construídos a partir de outros tipos.
Cada tipo tem um tamanho determinado para armazenar suas informações e a partir desses tipos básicos o rust consegue criar os outros tipos que ele usa, e claro você também pode criar seus próprios tipos.

Mas, sem enrolação vamos ao video.

## Inteiros (Integers)

O primeiro tipo que vamos falar são os tipos inteiros, e sim no plural pois temos vários tipos inteiros.
Os números inteiros são divididos em dois grupos os números inteiros com sinal também chamados de _Signed_ (representa positivos, negativos e zero) e os números inteiros sem sinal também chamados de _Unsigned_ (Representa positivos e zero).

Para os inteiros _Signed_ temos:
    
- `i8`: 8 bits que varia entre -128 a 127.
- `i16`: 16 bits que varia entre -32,768 a 32,767
- `i32`: 32 bits que varia entre -2,147,483,648 a 2,147,483,647
- `i64`: 64 bits que varia entre -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807.
- `i128`: 128 bits que varia entre -170,141,183,460,469,231,731,687,303,715,884,105,728 a 170,141,183,460,469,231,731,687,303,715,884,105,727.

```rust
fn main() {
    // i8
    let number_i8: i8 = -128;
    println!("i8: {}", number_i8);

    // i16
    let number_i16: i16 = -32768;
    println!("i16: {}", number_i16);

    // i32
    let number_i32: i32 = -2147483648;
    println!("i32: {}", number_i32);

    // i64
    let number_i64: i64 = -9223372036854775808;
    println!("i64: {}", number_i64);

    // i128
    let number_i128: i128 = -170141183460469231731687303715884105728;
    println!("i128: {}", number_i128);
}
```

Para os interior _Unsigned_ temos:

- `u8`: 8 bits que varia entre 0 a 255.
- `u16`: 16 bits que varia entre 0 a 65,535.
- `u32`: 32 bits que varia entre 0 a 4,294,967,295.
- `u64`: 64 bits que varia entre 0 a 18,446,744,073,709,551,615.
- `u128`: 128 bits que varia entre 0 a 340,282,366,920,938,463,463,374,607,431,768,211,455.

```rust
fn main() {
    // u8
    let number_u8: u8 = 255;
    println!("u8: {}", number_u8);

    // u16
    let number_u16: u16 = 65535;
    println!("u16: {}", number_u16);

    // u32
    let number_u32: u32 = 4294967295;
    println!("u32: {}", number_u32);

    // u64
    let number_u64: u64 = 18446744073709551615;
    println!("u64: {}", number_u64);

    // u128
    let number_u128: u128 = 340282366920938463463374607431768211455;
    println!("u128: {}", number_u128);
}
```

Fora isso temos o tipo `usize` e `isize` que representam palavras no formato do processador que está sendo usado ou seja 32 bits pra processadores de 32 bits e 64 bits para processadores de 64 bits.

O uso de `isize` é útil quando você está lidando com índices de coleções ou quando deseja garantir que seu código seja eficiente em diferentes arquiteturas sem ter que se preocupar com o tamanho exato do inteiro.

Suponha que você queira imprimir o tamanho de um vetor em termos de número de elementos, e para isso, você pode usar o tipo `isize` para garantir portabilidade. Aqui está um exemplo:

rust

```rust
fn main() {
    let vetor = vec![1, 2, 3, 4, 5];

    // Usando .len() para obter o tamanho do vetor, que retorna um usize.
    // Convertendo para isize para impressão e operações posteriores.
    let tamanho: isize = vetor.len() as isize;

    println!("O tamanho do vetor é: {}", tamanho);

    // Aqui, apenas para ilustrar, vamos fazer uma operação simples.
    let novo_tamanho = tamanho + 10;

    println!("Se adicionar 10, o novo tamanho é: {}", novo_tamanho);
}

```

Neste exemplo, usamos `isize` para representar o tamanho do vetor. Ao fazer isso, garantimos que o código funcione tanto em arquiteturas de 32 bits quanto de 64 bits, adaptando-se automaticamente ao tamanho da palavra do sistema.

Um parenteses:

Os termos "32 bits" e "64 bits" referem-se ao tamanho da palavra de um processador, o que, por sua vez, influencia o tamanho máximo de dados que o processador pode processar em uma única operação e a quantidade máxima de memória RAM que o sistema operacional pode endereçar.
## Ponto Flutuante (Floating-Point)

Para pontos flutuantes vamos ter:
    
- `f32`: Ponto flutuante de precisão simples (32 bits).
- `f64`: Ponto flutuante de precisão dupla (64 bits). É o padrão para números decimais em Rust.

Em computação, os termos "precisão simples" e "precisão dupla" referem-se ao número de bits usados para representar números de ponto flutuante em um computador. No contexto do Rust e da maioria das linguagens de programação, esses termos são geralmente associados aos tipos `f32` e `f64`, respectivamente.

1. **Precisão Simples (`f32`)**:
    
    - Utiliza 32 bits para representar um número de ponto flutuante.
    - Oferece uma precisão de aproximadamente 7 dígitos decimais significativos.
    - É mais eficiente em termos de uso de memória e pode ser mais rápido em algumas operações devido ao tamanho menor.

```rust
fn main() {
    // Exemplo com f32
    let numero_f32: f32 = 3.14159;  // Aproximadamente Pi
    println!("Valor usando f32: {}", numero_f32);

    // Outro exemplo com f32
    let outro_f32: f32 = 123.456789;  // Aproximadamente 123.456789
    println!("Outro valor usando f32: {}", outro_f32);
}
```

1. **Precisão Dupla (`f64`)**:
    
    - Utiliza 64 bits para representar um número de ponto flutuante.
    - Oferece uma precisão muito maior, aproximadamente 15 a 17 dígitos decimais significativos.
    - Por ser mais preciso, é geralmente preferido em aplicações que exigem alta precisão, como cálculos científicos ou financeiros que envolvem números muito grandes ou muito pequenos, ou quando se deseja evitar erros acumulados em cálculos longos.


```rust
fn main() {
    // Exemplo com f64
    let numero_f64: f64 = 3.141592653589793;  // Valor mais preciso de Pi
    println!("Valor usando f64: {}", numero_f64);

    // Outro exemplo com f64
    let outro_f64: f64 = 123456789.987654321;  // Número grande com precisão dupla
    println!("Outro valor usando f64: {}", outro_f64);
}
```
## Caractere (Character)

Para representar um caractere temos o tipo char e é usado para representar 1 caractere. Temos os tipos str e String mas, eles são usados para representar um grupo de caracteres o tipo primitivo é apenas o char.

O char armazena 4 bytes e é usado para representar um caractere Unicode.

```rust
fn main() {
    let letra = 'A';
    println!("Essa é a letra: {}", letra);
}
```

### E o que é Unicode?

Unicode é um padrão de codificação de caracteres universal que visa definir um único código numérico para cada caractere de qualquer sistema de escrita do mundo. A ideia por trás do Unicode é criar uma forma de representação padronizada para caracteres de todos os idiomas e símbolos usados globalmente.

Um exemplo armazenando o kanji _Megami_ do japones:

```rust
fn main() {
    let megane = 'u{76EE}'; 
    println!("{}", megane);
}
```

Um exemplo armazenando um emoji:

```rust
fn main() {
    let emoji_sorriso = 'u{1F603}'; 
    println!("{}", emoji_sorriso);
}

```


## Booleano (Boolean)

O tipo booleano é usado para presentar como o nome já diz um valor booleano. Sendo `true` para verdadeiro e `false`  para falso.


```rust
fn main() {
    let verdadeiro = true;
    let falso = false;

    println!("Verdadeiro -> {}, Falso -> {}", verdadeiro, falso)
}

```

Bom o post de hoje é isso nos vemos na próxima semana.
