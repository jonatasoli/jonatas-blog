---
title: "30 dias usando Helix"
banner_image: "media/post-images/helix-30-dias.png"
description: "Me desafiei a aprender a usar o editor Helix por 30 dias!"
date: 2025-06-09
---

### [Veja também no Youtube](https://www.youtube.com/watch?v=MURMkIlCHRg&t)

Olá gente, estou esse mês me desafiando a usar o [helix](https://helix-editor.com/) que é um editor baseado em rust por 30 dias.
Só pra contextualizar, eu uso vim/neovim a um bom tempo e eu estou montando um material de como configurar o neovim do zero, nesse meio tempo tenho que continuar trabalhando, e eu decidi não usar uma vm pra ir configurando em paralelo enquanto minha config estável contuasse me atendendo. Então resolvi testar um editor novo que é em algumas partes inspirado no vim/neovim pra ir usando.

## Helix
É um projeto feio em rust e tem como principais features, melhorar a parte de multicursos relacionado ao vim/neovim além de já ter uma configuração lsp pronta pra uso, quase como um mason do neovim só que ele em si não instala os server só detecta os mesmos.

## Alguns desafios
Bom primeira coisa que acaba confundindo um pouco é que eu tenho alguns atalhos próprios no neovim e além de ele ter por padrão alguns atalhos estou precisando reaprender a usar do modo dele, uma coisa que é dificil pra mim é desapegar um pouco de algumas formas de navegar do neovim e usar ai fiz no meu obsidian um mapa dos principais atalhos que compartilho com vocês abaixo:
[[Helix Shortcuts]]

```
`Ctrl`+`,` | Abre a caixa de diálogo de configurações.
`Ctrl`+`Shift`+`,` | Salva as configurações atuais.
`Ctrl`+`P` | Abre o painel de pesquisa.
`Ctrl`+`B` | Abre a barra lateral.
`Ctrl`+`F` | Abre a barra de pesquisa do editor.
`Ctrl`+`E` | Abre a barra de navegação.
`Ctrl`+`T` | Abre uma nova guia.
`Ctrl`+`W` | Fecha a guia atual.
`Ctrl`+`Shift`+`W` | Fecha todas as guias.
`Ctrl`+`J` | Desloca para baixo uma linha.
`Ctrl`+`K` | Desloca para cima uma linha.
`Ctrl`+`H` | Apaga a palavra anterior.
`Ctrl`+`D` | Apaga a letra anterior.
`Ctrl`+`C` | Copia o texto selecionado.
`Ctrl`+`V` | Cola o texto copiado.
`Ctrl`+`X` | Corta o texto selecionado.
`Ctrl`+`Z` | Desfaz a última alteração.
`Ctrl`+`Y` | Refaz a última alteração.
`Ctrl`+`A` | Seleciona todo o texto.
`Ctrl`+`E` | Move o cursor até o final do texto.
`Ctrl`+`B` | Move o cursor para o início do texto.
`Home` | Move o cursor para o início da linha atual.
`End` | Move o cursor para o fim da linha atual.
`Page Up` | Move o cursor para cima uma página.
`Page Down` | Move o cursor para baixo uma página.
`Left` | Move o cursor para a esquerda.
`Right` | Move o cursor para a direita.
`Up` | Move o cursor para cima.
`Down` | Move o cursor para baixo.
```

## Novos modos
No caso do Helix tem dois modos que estou usando que são bastante importantes, primeiro o modo _Space_ que serve pra navegar entre os arquivos e buffers e o _Go To_ mode que serve pra navegar nos arquivos em si, aqui o principal desafio é que muitas das coisas que estão ali eu já tinha uma forma personalizada de trabalhar no neovim, então estou com o trabalho de reaprender os atalhos até ver na [documentação](https://docs.helix-editor.com/) se tem alguma forma de personalizar esses comandos para os que eu já estava usando.

## Config
A configuração usa um arquivo .toml e é bem simples de trabalhar com ele vou mostrar as configurações que você configura no .config/helix/config.toml

```toml
theme = "catppuccin_mocha"

[editor]
line-number = "relative"
mouse = false

[editor.statusline]
left = ["mode", "spinner"]
center = ["file-name"]
right = ["diagnostics", "selections", "position", "file-encoding", "file-line-ending", "file-type"]
separator = "│"
mode.normal = "NORMAL"
mode.insert = "INSERT"
mode.select = "SELECT"

[editor.lsp]
enable = true
display-messages = false

[editor.file-picker]
hidden = false

[editor.soft-wrap]
enable = true
max-wrap = 25 # increase value to reduce forced mid-word wrapping
max-indent-retain = 0
wrap-indicator = ""  # set wrap-indicator to "" to hide it

```

Uma coisa legal ele já consegue pegar vários temas por default e é só passar o nome do tema.
Na sessão _editor_ eu deixo o número de linhas relativo pois é útil quando você quer pular linhas e desativo a iterção do mouse.
Em _editor.statusline_ eu crio uma linha de status bem simples pra ficar parecida com a que eu usava no neovim.
Em _editor.lsp_ eu habilito o linter e desativo as mensagens de progresso do linter na linha de status.
Em _editor.file-picker_ eu só desativo a opção de esconder arquivos ocultos.
E finalmente me _editor.soft-wrap_ eu habilito algumas opções para fazer a quebra de linha na tela.

## Configuração dos linters

No meu caso eu uso majoritariamente python, typescript e rust como linguagens então precisei configurar globalmente os linters de cada uma das linguagens e preciso chegar usando `helix --health`pra ver as configurações ou se quero uma linguagem ou framework especifico uso o comando `helix --health python`por exemplo.

A config das linguagens fica em .config/helix/languages.toml e meu arquivo no momento está assim:
```
[[language]]
name = "python"
language-servers = ["pyright", "ruff"]
[language-server.pyright]
command = "pyright-langserver"
args = ["--stdio"]
[language-server.pyright.config.python.analysis]
typeCheckingMode = "basic"
[language-server.ruff]
command = "ruff-lsp"
[language-server.ruff.config.settings]
args = ["--ignore", "E501"]
[language.formatter]
command = "blue"
args = ["--line-length", "88", "--quiet", "-"]

[[language]]
name = "rust"
[language-server.rust-analyzer.config.check]
command = "clippy"
```

Ainda não fiz as configs relativas a typescript, vue, nuxt e svelte por que nesses dias só fiz pequenos ajustes nos projetos que estão usando essa linguagem.
No mais essa config ainda estou aprendendo e ela não está 100% preciso trabalhar um pouco em cima dela ainda.

## Desafios
Bom um dos principais desafios no momento é quando preciso de algo que não está na documentação além de ser até bem abrangente ainda preciso caçar algumas coisas.
Na parte do lsp deu um trabalhinho instalar o linter globalmente e ainda preciso remover algumas coisas que não nele.
Copiar algo do editor e colar por exemplo no navegador no qual estou escrevendo esse artigo não funciona por padrão e ainda não descobri como fazer para habilitar o xclip por exemplo.
Além disso eles possuem um artigo de quem está [migrando do vim](https://github.com/helix-editor/helix/wiki/Migrating-from-Vim) que é bem útil pra quem está começando.

Por enquanto é isso e vou atualizando conforme for progredindo aqui.

## Dia 2

## Sobre alguns desafios anteriores

Bom descobri que tinha um health check pro clipboard
```bash
➜ helix --health clipboard
System clipboard provider: wl-paste+wl-copy
```

No meu caso uso o wayland ai uso o _wl-copy_ e estava funcionando, acontece que só usando o atalho `y` ele não copia pro _clipboard_ no caso precisa usar `<Space>+y`para copia-lo.
Uma coisa que acho meio perigosa no atalho que eles criaram para deletar caracteres com a letra `d` é que no vim temos um atalho `dd` que remove a linha inteira isso pode acabar confundindo, principalmente quem já tem a memória muscular pra fazer isso.
Outra coisa meio ruim é que no NeoVIm eu uso muito `C+v` + um jump para copiar e agora preciso fazer essa sequencia.
`v + jump + <Space>+y`
antes eu fazia assim
`<Shift> + v + jump +y`
O espaço no final sempre acaba me pegando, mas acredito que é questão de praticar mais também para se adaptar.
As vezes me confundo também com o `a` no caso do vim ele entra no mode de inserção no caractere posterior aqui no helix ele pula uma linha e entra no modo de inserção.

## Coisas legais que descobri
Uma coisa legal que penso em levar pro meu Neovim é ele já fechar parenteses, chaves e colchetes automaticamente. Porém quando estou editando o script do meu [curso de rust](https://www.udemy.com/course/rust-da-logica-aos-jogos/?referralCode=C82C9336A8CF938D12E7) as vezes da uma dor de cabeça já que estou usando o mkdocs pra trabalhar com ele e alguns marcações não precisam ser fechadas e ele fecha, acredito que deva haver alguma forma de resolver isso só não sei ainda.

Uma coisa lega que descobri que consigo jogar o editor pra background e depois voltar, mais tarde descobri que também conseguia fazer isso com o vim por que na verdade é um comando do shell em si.

| shortcut | description                  |
| -------- | ---------------------------- |
| Ctrl+z    | joga o editor pra background |
| fg        |   volta o editor para primeiro plano                           |

## Sobre o LSP

Precisei hoje instalar os servers de svelte e vue

```bash
npm install -g svelte-language-server
npm install -g typescript-svelte-plugin
npm install -g @vue/language-server
npm install -g prettier
```

Ai aproveitei e adicionei uma configuração extra no meu languages.toml

```toml
[[language]]
name = "vue"
auto-format = true
formatter = { command = "prettier", args = ["--parser", "vue"] }
```

Um ponto importante é que o helix é dividido em 3 partes
## [Language configuration](https://docs.helix-editor.com/guides/adding_languages.html#language-configuration)
Nessa sessão fica as configurações especificas que você precisa de uma linguagem e a extensão da mesma.

## [Grammar configuration](https://docs.helix-editor.com/guides/adding_languages.html#grammar-configuration)
Se tiver uma configuração do tree-sitter disponível ele vai usar normalmente ele vai usar um caminho padrão, no meu caso eu precisei configurar os linters para funcionarem globalmente para o helix conseguir pegar.
## [Queries](https://docs.helix-editor.com/guides/adding_languages.html#queries)
As queries na verdade também fazem parte do tree-sitter e elas provem o highlight e a edentação da linguagem. 

fora isso é importando atualizar as gramáticas periodicamente.
```bash
helix --grammar fetch
helix --grammar build
```

### Afinal o que é LSP
O Language Server Protocol (LSP) é um protocolo de comunicação usado entre um Editor de Código e um Servidor de Linguagem. Sua principal finalidade é permitir a integração eficiente de funcionalidades de análise de código e ferramentas específicas de linguagem diretamente nos editores de código.

_Como Funciona:_

- **Cliente-Server Model:** O LSP segue um modelo cliente-servidor, onde o editor (cliente) se comunica com um servidor específico para uma linguagem de programação.
- **Comunicação via JSON-RPC:** As mensagens são trocadas entre o cliente e o servidor usando o formato JSON-RPC, o que facilita a implementação em várias linguagens.

No nosso caso o helix tem um client LSP e precisamos instalar os servidores para usa-los com ele.

### Afinal o que é o Tree-sitter
O Tree-sitter é um parser de código incremental e gerador de árvores de sintaxe. Ele é projetado para ser eficiente, preciso e capaz de lidar com linguagens de programação complexas.

_Como Funciona:_

- **Análise Incremental:** O Tree-sitter realiza análises incrementais, o que significa que, ao modificar o código-fonte, apenas as partes afetadas são reanalisadas, proporcionando uma resposta mais rápida.
- **Geração de Árvore de Sintaxe:** Ele gera uma árvore de sintaxe para o código-fonte, representando a estrutura hierárquica do mesmo.

Ele é muito importante para eu conseguir navegar pelo código através das arvores que ele gera.
### Navegação

Uma coisa nova é a navegação ela tem algumas coisas parecidas com o vim e outras não e precisei fazer uma tabela de navegação para me ajudar a me orientar.

| shortcut | description                                   |
| -------- | --------------------------------------------- |
| x        | seleciona linha                               |
| v        | entra no select mode                          |
| C        | Seleciono as mesmas palavras com multi-cursor |
| s          | Se estiver com linhas selecionadas da pra buscar um padrão dentro da seleção para fazer alteração                                              |

### Buscas

| shortcut | descipriton                |
| -------- | -------------------------- |
| Space+/  | Busca nos arquivos         |
| Space+f  | Busca pelo nome do arquivo |
|          |                            |

Uma coisa não muito boa, é que ele ainda não tem uma forma de fazer uma busca dentro dos arquivos, isso é algo que acabo usando muito em projetos grandes então é um ponto ainda pra melhorar. Ele possui uma busca, mas em alguns casos acabou não dando muito certo.

### Dica extra
Você tem um tutorial bem legal se você é novato em editores como o vim que é o modo tutor dele:
```bash
helix --tutor
```
É sempre interessante pra quem quer começar olhar esse tutor, no caso do vim também tem e recomendo a todos que olhem.

### Próximos cápitulos

Bom acredito que essa semana foi uma semana pra se adaptar e pensar algumas coisas de modo diferente nesse semana tenho um pouco mais de trabalho planejado com python e svelte então vou explorar um pouco mais o trabalho com os buffers e registradores além das diversas features relacionadas a manipular a seleção de código e multi cursores e dar uma refinada na minha configuração e criar alguns atalhos, então nos vemos na próxima semana.


## Semana 2
Bom passamos a semana 2 com o hélix, essa semana com um trabalho mais afundo no editor.

### Criando atalhos no space mode
Bom sinto falta de alguns atalhos de navegação, como no neovim se usa muito a memoria muscular eu decidi criar alguns atalhos no meu config.toml

```toml
[keys.normal.space]
w = ":write" # Salvar buffer com espaço + w
q = ":bc" # Fechar buffer
z = ":bp" # Ir pro próximo buffer
x = ":bn" # Ir pro buffer anterior

```

No caso a chave `keys.normal.space` representa as teclas de ação pra usar no space mode no modo normal.
Ai criei atalhos pra navegar pra frente e para trás nos buffers, fechar um buffer e salvar um buffer, o que fez ajudar muito meu trabalho no dia-a-dia.
### Desafios
Uma coisa não muito legal que estava me acontecendo é que eu criava uma exception num arquivo em python e quando ia usa-lo o helix não estava identificando para importar.
Descobri que o meu languages.toml não estava funcionando, agora que estava trabalhando num projeto mais focado eu estava vendo que eu olhava o server e aparecia pylsp que é o default e não o pyright + ruff ou mesmo o svelte estava dando um monte de erro, ai percebi que tinha colocado language.toml ao invés de languages.toml então ele não estava usando a minha config ajustei ai começou a funcionar corretamente.

Trabalhei bastante com svelte essa semana e auto format não funcionou direito assim como o auto-complete então vou ter que nas próximas semanas se esforçar um pouco mais.

### Coisas Legais

Melhorando um pouco minha tabela com as navegações que mais uso:

| shortcut  | description                                                                                       |    
| --------- | ------------------------------------------------------------------------------------------------- | 
| x         | seleciona linha                                                                                   |  
| v         | entra no select mode                                                                              |    
| C         | Seleciono as mesmas palavras com multi-cursor                                                     |    
| s         | Se estiver com linhas selecionadas da pra buscar um padrão dentro da seleção para fazer alteração |     
| [f  ou ]f | pula funções                                                                                      |   
| [t  ou]t          |  pula classes      |                                                                                           |     |


Também os atalhos mais usados no go to mode

| shortcut | description                             |
| -------- | --------------------------------------- |
| d        | vai pra definição da função ou classe   |
| r        | vai aonde referencio a função ou classe |
| a        | vou pro ultimo arquivo acessado         |
| m        | vou pro último arquivo modificado                                        |

Outra coisa que uso muito no neovim é mudar o texto dentro de um parenteses ou aspas e aqui existe um modo pra fazer isso é que o match mode usando a tecla `m`no modo normal.

| shortcut | description                               | 
| -------- | ----------------------------------------- | 
| r        | muda o texto no que está dentro do padrão |  
| d        | deleta o que está dentro do padrão        |    
| a        | seleciona tudo junto com o padrão         |
| i        | seleciona tudo dentro do padrão           |  

Quando digo o padrão é o `() {} [] "" ''`
Sendo sincero isso está um pouco difícil de acostumar ainda acho mais funcional o jeito do vim de trabalhar com padrões.

### Concluindo
Essa semana trabalhei mais com padrões e melhores mais meu fluxo de trabalho isso me ajudou a ser mais produtivo com a ferramenta.
A parte de desenvolver com svelte não esta sendo muito boa então vou ter que me concentrar em ver qual o problema. No caso por exemplo do nuxtjs ele funcionou bem.

## Semana 3
Ola gente compartilhando como foi minha terceira semana, como foi black friday e estava trabalhando num projeto não consegui explorar tanto em expandir meus recursos mais sim em trabalhar com o qie ja conhecia.
### Desafios
Bom a parte de selecionar código algumas vezes me dava trabalho, por exemplo quando eu queria selecionar todo o arquivo se eu usava o v as vezes não pegava tudo e usando x não me parece uma ideia muito legal e em arquivos grandes se mostra algo não muito inteligente.
Lembrando um chefe meu que usava vim, "tudo no vim da para fazer com dois comandos.".
Provavelmente não estava fazendo do jeito certo e tem um jeito melhor de fazer.
Outra coisa que sinto falta é uma indicação visual nas tabs, estava com várias tabs abertas, mas não aparecia a tab que eu estava usando  em destaque ai não sabia se estava salvo o buffer ou não e isso as vezes me deu uma dor de cabeça.
### Coisas legais

É incrível como usar por um tempo um editor você acaba trabalhando bem com seu fluxo. Essa semana eu precisei codar bastante e as coisas começam a ficar mais naturais.
Parte de lint estava funcionando bem assim como as buscas o que ajuda a ficar produtivo, outra coisa que usei bastante foi o multi-cursor que realmente é algo bem útil no helix.

Acabei colocando um server novo agora para ter uma camada de buffer de comandos

Pra isso precisei instalar o [simple-completion-language-server](https://github.com/estin/simple-completion-language-server)

Ajustar meu languages.toml
```toml
[language-server.scls]
command = "simple-completion-language-server"
config = { max_completion_items = 20, snippets_first = false }

[language-server.scls.environment]
RUST_LOG = "debug,simple-completion-langauge-server=debug"
LOG_FILE = "/tmp/completion.log"


[[language]]
name = "python"
roots = ["pyproject.toml"]
language-servers = ["scls", "pyright", "ruff"]

[language-server.pyright.config.python.analysis]
typeCheckingMode = "basic"

[language-server.ruff]
command = "ruff-lsp"

[language-server.ruff.config.settings]
args = ["--ignore", "E501"]

[language.formatter]
command = "blue"


[[language]]
name = "rust"
[language-server.rust-analyzer.config.check]
auto-format = false
language-servers = ["rust-analyzer", "scls"]
command = "clippy"


[[language]]
name = "vue"
auto-format = true
formatter = { command = "prettier", args = ["--parser", "vue"] }


[[language]]
name = "svelte"
auto-format = true
formatter = { command = 'prettier', args = ["--plugin", "prettier-plugin-svelte", "--stdin"] }


[[language]]
name = "git-commit"
language-servers = [ "scls" ]


```

Ele além disso ele me da alguns snipets do código.

Bom por enquanto ainda não tive muita fluência com o svelte ainda, trabalhei um pouco no meu blog e o auto-complete não estava tão legal, isso é uma coisa que sinto falta que tinha no neovim que são alguns snippets.

Bom esse texto foi mais curto foi muito mais usando que qualquer coisa e a experiência está sendo interessante, convido você testar também ele pois é um editor muito interessante.

Até semana que vem.

## Semana 4

Olá, estamos na semana 4 e foi uma jornada muito interessante até aqui.
Bom estou muito mais adaptado ao hélix alem de ainda ter velhos hábitos como apertar yy pra copiar ou DD pra deletar, principalmente quando eu estava querendo fazer algo mais rápido com pressa. Claro que poderia criar um atalho pra fazer esses comandos mas acabei não fazendo.
Acho que no final dessa semana uma coisa que fiquei devendo bastante é ler a documentação com calma, eu meio que fui alterando e lendo e como não reservei um tempo pra ler tudo com calma fica o sentimento que poderia tirar mais do editor.

### Algumas coisas que não consegui resolver

Como nem tudo são flores nos casos que abri muitos buffers fica um pouco difícil as vezes de visualizar em qual arquivo você está não explorei a fundo a customização nativa dele, talvez consiga algo melhor do que o default mas, ai foi um problema pra mim.
Outro problema foi o svelte e o tailwind o primeiro ele ate me dava algumas coisas no auto complete porem não tudo, no caso do tailwind o meu problema foi ele não dar autocomplete.
No caso de ele vir com o client lsp pra mim foi uma faca de dois gumes por um lado se você tem clients qie ja esta acostumado a instalar globalmente é muito bom, porem no caso do python por exemplo eu uso cliente diferentes pra projetos diferentes e ai não fica muito legal trabalhar assim.

### Alguns ajustes

Bom como de costume em editores com arquivos de configuração é legal ver as configurações dos outros pra buscar ideias, no meu caso dei uma olhada no github no meu amigo Bruno Rocha e fiz algumas alterações no meu arquivo do config.toml

`color-modes = true` para cada modo ele muda a cor
`gutters = ["diff", "diagnostics", "line-numbers", "spacer"]` mostrar algumas diferenças visuais entre as versões de um arquivo

### Conclusão

O hélix é um editor muito promissor, segue a filosofia do vim e kakaroune principalmente no segundo. Tenta trazer coisas novas como ter um client lsp já funcional, adicionou o suporte a multi servers que ajudou muito.
Ainda sinto falta DD um sistema de plugins pra conseguir entender algumas coisas e trazer funcionalidades que ele ainda não tem, mas entendo qie ele esta querendo trazer uma experiencia mais "baterias inclusas" do que o neovim e arriscou dizer que é uma boa opção pra iniciantes por ser de algumas formas mais amigável que o neovim e mesmo assim você precisando aprender a configurar seu editor.
Alem disso ainda tem coisas que me fazem continuar com o com como um suporte melhor ao svelte e ter um autocomplete bom pro tailwind. Nos próximos meses devo refazer minha config do zero pro neovim e enquanto isso devo continuar usando o hélix pois ele é muito bom e talvez ate contribuir com ele.
Convido você que quer aprender a usar um editor de terminal experimente o hélix primeiro e depois vá pro vim ele tem uma configuração mais simples e você vai aprender a maior parte da navegação por ele. Não me leve a mal ainda gosto mais do neovim porém vejo que muitos novatos sofrem pra configurar o neovim no dia a dia o hélix é uma boa opção de começar a usar com menos configuração enquanto ajusta seu neovim aos poucos.
Estero que quem acompanhou essa jornada se inspire a conhecer também.
