---
postId: 2
title: "Afiando o machado 2021"
imgUrl: ""
summary: "As ferramentas que estou usando no meu workflow de trabalho"
publishedAt: 2021-01-15
---

# Afiando o machado em 2021

Bom estamos começando mais um ano, deixando esse difícil ano de 2020 pra trás, então decidi no hiato entre 2020 e 2021 de revisar meu ambiente de desenvolvimento, então gostaria de compartilhar com vocês como está ficando.

Pra começar é bom colocar as linguagens / frameworks que tenho configuradas no meu ambiente :

* Dart / Flutter
* Python / Flask / Django / FastAPI
* Javascript / Vue
* Rust
* Go

Um ponto que acho interessante frisar que em 2021 vou ter um ano atípico no que diz a sistema operacional, vou começar o ano com o Mac, lá pelo meio do ano vou usar o Windows e no fim do ano devo voltar pro Linux, mais precisamente o Arch se não viu meu artigo anterior [acesse aqui](https://jonatasoliveira.dev/blog/minha-instalacao-do-arch-linux/) ali eu já fiz uma guia da minha instalação.

Com isso meu ambiente de desenvolvimento tem que ser o mais flexível possível, além de tudo eu gosto de trabalhar no terminal então como vou usar o WSL2 no Windows (talvez até um virtualbox mesmo) vai ser mais tranquila essa transição.

Legal já frisar que nesse artigo específico não vou explicar detalhadamente a configuração de cada ferramenta, pretendo fazer isso ao longo do ano, mas já queria falar quais ferramentas estou usando hoje.

Outro ponto importante pra mim é eu gosto de experimentar uma coisa ou outra, mas sempre de forma separada do fluxo padrão, pois eu posso achar que um projeto ainda não está tão legal pra mim, simplesmente desistir ou ainda intrega-lo no meu workflow principal, removendo a ferramenta anterior, faço isso muito por curiosidade sobre o desenvolvimento de outras ferramentas e vez ou outra acabo incorporando uma ferramenta nova durante o ano ou mesmo um plugin. Algo pra entrar no meu workflow precisa me deixar mais produtivo e não o contrário.

Pra facilitar a sua leitura deu dividi o artigo nos tópicos abaixo:

* Fontes
* Prompt de comando
* Emulador de terminal
* Multiplexador
* Python
* Dart / Flutter
* Vue
* Editor
* Docker
* Conclusão

## Fontes
Uma coisa que pode não parecer muito importante, mas que no meu workflow eu acho super importante é o uso do [nerdfonts](https://www.nerdfonts.com/), pois ele me dá um conjunto de fontes e ícones que vou colocar tanto no meu terminal, quanto no meu editor de texto, como eu fico 80% do meu tempo dentro do terminal ter boas fontes e bons ícones ajuda a deixar o ambiente mais agradável, sei que muita gente gosta e vive bem com um terminal mais "seco" e vive bem com isso.

Além disso, eu pretendo usar também os ícones e fontes no próprio Xmonad.

## Tema
Um tema que venho usando e gosto muito é o [dracula](https://draculatheme.com/), o bom dele é que basicamente posso usar o mesmo esquema de cores em todas as ferramentas que uso, inclusive no meu browser, então tudo que eu posso eu tento usar o drácula como tema.

No caso do Xmonad ainda não tem um tema, mas pretendo resolver essa pendência =D.

## Prompt de comando
Aqui eu uso o [zsh](https://www.zsh.org/) como shell, para complementar uso o [ohmyzsh](https://ohmyz.sh/) pois ele me trás vários plugins úteis para o dia-a-dia e o [starship](https://starship.rs/) para customizar a visualização do prompt pois ele possui várias opções de customizar a visualização e acho ele infinitamente mais leve que o tema do [powerlevel10k](https://github.com/romkatv/powerlevel10k) que me dá várias opções mas, pelo menos no mac hoje fica bem pesado quando uso.  

Com isso já consigo usar autocomplete e ter alguns indícios visuais de um repositório, e no meu .zshrc eu vou colocando as configurações e alias de comando que mais uso no dia-a-dia.

Uma coisa que penso em experimentar durante o ano é o [fish shell](https://fishshell.com/) e o [elvish shell](https://elv.sh/learn/).

## Emulador de terminal
Pode não parecer, mas minha ideia é ter o menor número de ferramentas / plugins dentro do meu workflow, pois é fácil você configurar algo e raramente usar. Porém no caso do emulador de terminal ainda tenho um dilema estou usando 2, o [alacritty](https://github.com/alacritty/alacritty) e o [kitty](https://sw.kovidgoyal.net/kitty/).

O [alacritty](https://github.com/alacritty/alacritty) é um emulador de terminal pequeno, leve e poderoso, ele segue o conceito dos emuladores com poucas features, o que é perfeito pra usar em tilling manager como o Xmonad ou o i3, porém hoje ele não tem uma feature que estou usando no momento, que é a compatibilidade para fontes com ligadura, tipo o fira code.

Por conta disso estou usando o [kitty](https://sw.kovidgoyal.net/kitty/), que é um emulador de terminal com muitos recursos, porém fora suas configurações básicas, não uso as features tmux like dele, muito por que acho que o próprio alacritty no futuro vai ter essa feature e eu devo voltar pra ele, e não me entenda mal o kitty é ótimo, mas muitas das features dele eu já resolvo com tmux + Xmonad, o que pode parecer estranho já que quero ter sempre o mínimo possível de ferramentas, mas durante esse ano se em algum momento eu achar que o Kitty está sendo mais vantajoso com certeza vou permanecer nele.

Mas por enquanto a ideia é ter o alacritty como emulador de terminal principal.

## Multiplexador
Aqui só tem uma ferramenta que uso que é o [tmux](https://github.com/tmux/tmux), ele nada mais é que um multiplexador, trabalha com abas além de manipular as janelas de maneira muito parecida com o tilling manager, mas então por que usar isso até pelo que falei sobre o kitty?

Uso principalmente por conta de gerar uma sessão e uma sessão básica, e o que isso quer dizer? Primeiro quando crio uma sessão no tmux, mesmo que feche o terminal a sessão ainda vai ficar de pé até que você reinicie o computador ou mate a sessão. Assim mesmo que acidentalmente feche o terminal a minha sessão vai continuar em pé normalmente.

Agora outra feature que o tmux tem é poder criar templates de sessões, ou seja, já posso configurar quantidade de janelas, diretório que vai abrir além de dar start em alguma ferramenta como um git fetch ou coisa do tipo. Hoje uso apenas uma sessão e abro tudo que eu possa precisar, isso até por que hoje estou usando o mac e é mais conveniente abrir tudo já, porém quando voltar a usar o linux penso em criar sessões especializadas (editor, kubernetes, dart e etc), pois ao invés de ficar trabalhando com várias abas no tmux, posso trabalhar com uma apenas mas, com o workflow da atividade que vou trabalhar já.

Voltando ao kitty ele faz isso também tanto em manter sessão quanto montar templates de uso, aqui a preferência é por já ter o costumo com os atalhos do tmux, conforme esse ano for passando talvez eu faça alguns testes usando só o kitty, por que talvez eu ganhe mais usando só ele ao invés do alacritty + tmux.

## Python
Aqui nessa sessão eu configuro a versão do python e meu ambiente virtuais, primeira ferramenta que uso é o [pyenv](https://github.com/pyenv/pyenv), no caso ele vai gerenciar a versão do python que estou usando em determinado projeto, por exemplo, hoje tenho projetos que usam python 3.5, 3.7 e 3.9, isso muito por que alguns projetos usam bibliotecas de terceiros que são incompatíveis com versões mais recentes do python.

Além disso o pyenv me dá a possibildade de não "sujar" a versão do python do sistema (mac/linux), pois essa versão vai ser usada para as aplicações do sistema, e prefiro deixar ela intocada, isso é interessante se você algum dia já instalou várias bibliotecas no seu python de sistema e um aplicativo já parou de funcionar por conflito, tendo a versão do python segregada te ajuda a resolver esse problema, além disso o pyenv você consegue configurar na sua versão global todas as versões que vc está usando. 

O pyenv tem plugins para gerenciar suas virtuals envs, porém hoje eu prefiro usar o [poetry](https://python-poetry.org/), ele ajudar a manter o controle das bibliotecas que uso em determinado projeto, mantém uma árvore de dependências, versionando inclusive lib dependentes do meu projeto além de criar minha virtualenv tudo com um comando, e isso é uma das coisas que mais gosto dele.

## Dart / Flutter
Aqui não tem muito segredo, pois eu simplesmente uso o procedimento do site do [flutter](https://flutter.dev/docs/get-started/install) pra fazer a instalação, como não mexo tanto no dart/flutter (esse ano devo usar mais), então a configuração padrão já me atende sem muito problema.

Aqui talvez num futuro se precisar trabalhar com versões diferentes do dart uma solução seria usar o [asdf] (https://github.com/asdf-vm/asdf), mas ainda não sei se seria necessário.

## Vue
Para trabalhar com vue eu preciso de duas coisas, primeiro o [NVM](https://github.com/nvm-sh/nvm) com ele eu consigo usar a versão do Node que eu quiser para determinado projeto de forma fácil e rápida, é um processo bem parecido com o pyenv, a segunda coisa que preciso é o [VueCLI](https://cli.vuejs.org/) que já ajuda a criar os projetos VUE de forma bem rápida, além de subir um plugins pré configurados.

## Editor
Já usei vários editores na vida, mas nos últimos anos tenho dado preferência ao vim e mais especificamente ao [NeoVim](https://neovim.io/), muito por que mesmo tendo vários plugins nele ainda é bem leve para se trabalhar.

O NeoVim quando instalado já possui várias configurações interessantes, das quais pretendo colocar em outro post que já ajuda bastante, mas gostaria de falar aqui dos principais plugins que uso hoje.

Para ter um intellisense e alguns auto formats eu uso o [COC](https://github.com/neoclide/coc.nvim) ele já me da uma gama de possibilidades de configurar o interpretador para python, js, vue e dart e sem muito esforço, sua única inconveniência ao meu ver é ter que criar uma pasta de configuração .vim em todos os projetos que trabalho. Com ajuda do COC eu também configuro a parte do [cTags](https://github.com/universal-ctags/ctags) para poder funcionar os Go To na navegação do código.

[NerdTree](https://github.com/preservim/nerdtree) eu uso para poder navegar nos diretórios do projeto e poder alterar, adicionar e remover pastas e diretórios é bem fácil de usar e bem funcional.

[FZF](https://github.com/junegunn/fzf.vim), [CTRLP](https://github.com/kien/ctrlp.vim) e o [FERRET](https://github.com/wincent/ferret), são um conjunto de plugins para fazer busca tanto no diretório quanto detro dos arquivos junto com o [RG](https://github.com/BurntSushi/ripgrep) e o [AG](https://github.com/ggreer/the_silver_searcher) para aplicar os algoritmos de busca o que otimiza o tempo para fazer as buscas. Com isso já consigo fazer buscas rápidas pelo meu código.

[VIM-FUGITIVE](https://github.com/tpope/vim-fugitive) pra mim um dos melhores plugins para dominar no vim, com ele eu consigo trabalhar e ir fazendo meus commits, pulls, pushs sem precisar ter uma outra janela do terminal pra ficar fazendo isso, o que acaba facilitando muito a vida, além de conseguir fazer um gitdiff quando em pull acontece algum conflito com minhas alterações.

Bom poderia falar de muitos outros plugins que uso mas, acredito que hoje esses são os mais essenciais pro meu dia-a-dia de trabalho.

## Docker
Aqui também uso as instalações padrões do [docker](https://docs.docker.com/get-docker/) e [docker-compose](https://docs.docker.com/compose/install/), além de muitas vezes ainda não desenvolver diretamente no docker, todas as estruturas de apoio para o desenvolvimento como db, filas, ferramentas de monitoração e etc, eu rodo no docker, e também quando preciso simular algum problema que não ocorre quando subo o projeto diretamente no poetry eu acabo apelando pra subir o projeto via docker-compose e ver se consigo replicar o erro.

Penso que quando você começa a trabalhar com docker, você vai sentir dificuldade de deixar ele, pois ele ajuda muito a deixar as configs do seu sistema limpas, pois todas as bibliotecas, instalações e afins estão contidas dentro do container.

## Conclusão
A ideia aqui foi apresentar o conjunto de ferramentas que uso no meu workflow de trabalho no dia-a-dia, aqui além de talvez você me falar que instalando o pacote do jetbrains eu teria quase tudo isso já na mão.

Mas, como sempre digo a melhor ferramenta é a que você se sente mais produtivo, acredito que o meu workflow tem uma produtividade bem alta e com um baixo custo de recursos (vendo que tenho um mac de 2014 e um notebook que é um core 2 duo com 4gb de ram), além disso ter um workflow via terminal é extremamente poderoso pois faço praticamente tudo que preciso apenas usando alguns comandos ou atalhos no teclado. Acredito que no caso de um workflow como o meu tem um grande trabalho em "esculpir" as configurações, porém ele fica exatamente do jeito que você quer ao contrário de um jetbrains ou mesmo o vscode que você acaba ficando preso a algumas definições da ferramenta.

Enfim, espero que você goste e convido a compartilhar ferramentas que você ache legal pra trabalhar num workflow usando terminal ou algum outro workflow que você use, gosto muito de conhecer outros workflows de trabalho =).

Então é isso e até o próximo artigo.
