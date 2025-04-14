import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "postId": 1,
  "title": "Minha instalação do Arch Linux",
  "imgUrl": "",
  "summary": "Um roteiro de como eu instalo o Arch Linux",
  "publishedAt": "2021-01-08T00:00:00.000Z"
};
const Minha_instalacao_arch_linux = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-d7m7um">Instalação do Arch Linux</h1> <p data-svelte-h="svelte-rbs57v">Bom começando 2021 com um blog novo decidi compartilhar o meu roteiro para instalar o Arch Linux com algumas explicações.</p> <p data-svelte-h="svelte-1k8aeio">No longínquo ano de 2004 eu brincava com instalações complicadas como o FreeBSD, Gentoo e o Slackware, foi uma boa base para aprender muito, com todos os kernel panics  da vida,
mas minha vida com o pinguim naquela época ainda era só uma curiosidade, pois trabalhava com Delphi e ambiente Windows além de que nessa época era bem complicado jogar no Linux.</p> <p data-svelte-h="svelte-bc4cdi">Desde de 2014 voltei a trabalhar usando Linux inicialmente como freelance e depois na minha ocupação principal, um pouco isso se deve ao trabalho do Dionatan do <a href="https://diolinux.com.br/" rel="nofollow">Diolinux</a>, mas desde então conhecim uma distro que não havia conhecido lá no começo dos anos 2000 que era o Arch linux, gostei muito da ideia do Pacman que é muito parecido com o Brew do MacOs, mas mesmo assim sempre fiquei nas distros ubuntu like pois era um sistema que eu tinha mais familiaridade.</p> <p data-svelte-h="svelte-50yfmf">Esse ano de 2021 vai ser um ano atipico pra mim eu nesse momento estou usando um Mac, mas no meio do ano vou trabalhar alguns meses numa estação Windows até que mais pro final do
ano estou pensando em pegar um notebook da <a href="https://system76.com/" rel="nofollow">System76</a>, então no perído entre festas ali de 2020 eu decidi me aventurar em fazer uma instalação do Arch numa
virtualbox para ter um roteiro pronto pra usar no meio do ano pra voltar a usar o Arch.</p> <p data-svelte-h="svelte-1t9vvwq">Um ponto importante é que lá por 2017 eu comecei a usar o xubuntu com o gerenciador de janelas i3, antes de começar a usar o mac estava usando o <a href="https://xmonad.org/" rel="nofollow">Xmonad</a> nesse guia eu levo em consideração a instalação do Xmonad pois já tenho meus arquivos de configuração que basicamente devo copiar, caso tenha interesse você pode ver no meu <a href="https://github.com/jonatasoli/dotfiles" rel="nofollow">GitHub</a>.</p> <p data-svelte-h="svelte-15l2wc2">Um disclamer antes do guia, na verdade eu achei a configuração do Arch relativamente tranquila, a <a href="https://wiki.archlinux.org/index.php/installation_guide" rel="nofollow">documentação oficial</a>,
além de que pra mim me enrolei em alguns pontos que não estão muitos explicitos ali, então por isso fiz esse guia, dois vídeos que me ajudaram muito foi esse do <a href="https://www.youtube.com/watch?v=4orYC5ARfn8&t=3212s" rel="nofollow">Diolinux</a> e essa do <a href="https://www.youtube.com/watch?v=PQgyW10xD8s&t=1340s" rel="nofollow">Derek Taylor</a>, que alias também tem materiais muitos bons.</p> <h2 data-svelte-h="svelte-1l06338">Verificando UEFI Mode</h2> <ul data-svelte-h="svelte-14anidf"><li>Verificar o bootmode se o comando abaixo der erro é por que está no UEFI mode
Pode ser que essa pasta não exista ai o computador não tem suporte a UEFI</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">ls /sys/firmware/efi/efivars</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-pto94m">Gerando o particionamento</h2> <p data-svelte-h="svelte-qlidqh">Aqui acredito que é algo bem pessoal, cada um organiza do jeito que acha melhor eu particularmente uso um / /boot /home /swap usando uma estrutura de partições GPT, caso você não
saiba o que é de uma olhada <a href="https://sempreupdate.com.br/quais-as-diferencas-entre-gpt-guid-e-mbr/" rel="nofollow">nesse artigo do sempreupdate</a>.</p> <ul data-svelte-h="svelte-msqxf4"><li>Particionar o disco</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">fdisk -l #lista discos
fdisk /dev/sda # ou o disco que vc quer particionar
exemplo de criação com comandos para o /boot
- n
- 1
- 2048
- +200M

# Pra criar uma partição existente como swap
- t
- 2 # numero da partição
- 19 # Código do swap

# Bootloader
- t
- 1
- 1 # EFI Filesystem ou 4 bios boot se for MBR</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1sk31uv">Agora precisamos formatar as partições pra isso usamos o <code>mkfs</code> e no caso do swap usamos o <code>mkwap e swapon</code>.</p> <ul data-svelte-h="svelte-1krwwwv"><li>Formatar partições</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mkfs.ext4 /dev/sda1

# Swap
mkswap /dev/sda2
swapon /dev/sda2</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-cnclga"><li>Instalar dostools</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pacman -S dosfstools</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-qr7iuk"><li>Formatar a partição do boot</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mkfs.fat -F 32 /dev/sda1
# Pode ser BIOS boot ou EFI que é a opção 1</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-1t4b35g">Montando os filesystems</h2> <p data-svelte-h="svelte-qlqi50">Bom o próximo passo é montar o filesystem para fazer a instalação além de montar os diretórios que vão ficar separados em partições diferentes como o /boot e o /home. Acho bom
enfatizar que o nome das partições vai variar dependendo de como você particionou, no meu caso vai ser /dev/sda1 /dev/sda2 /dev/sda3 e /dev/sda4, porém abaixo deixei da forma mais
genérica.</p> <ul data-svelte-h="svelte-1vk9gqm"><li>Montar o filesystem</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mount /dev/root_partition /mnt</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-fgom2f"><li>Criar pastas de boot e home</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mkdir /mnt/home
mkdir /mnt/boot/ # caso EFI tem que ser /mnt/boot/EFI</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-1vk9gqm"><li>Montar o filesystem</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">mount /dev/mount-boot /mnt/boot
mount /dev/mount-home /mnt/home</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-jul9ah">Instalação</h2> <p data-svelte-h="svelte-omw2tp">Bom agora chegou a hora da instalação, como você vai ver é bem simples:</p> <ul data-svelte-h="svelte-102eaye"><li>instalar os pacotes básicos</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pacstrap /mnt base base-devel linux linux-firmware</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1e9234q">Agora vamos gerar o fstab, se não sabe o que é o fstab da uma conferida nesse <a href="https://www.youtube.com/watch?v=C63VJV3sOos" rel="nofollow">vídeo do Diolinux</a>.</p> <ul data-svelte-h="svelte-12udlt7"><li>Gerar o fstab</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">genfstab -U /mnt &gt;&gt; /mnt/etc/fstab</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-jhfsx9">Agora vamos montar o root do arch linux.</p> <ul data-svelte-h="svelte-1jm7ovg"><li>Mudar a montagem pra root</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">arch-chroot /mnt</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-1pdvrhx"><li>Setar hora local</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
hwclock --systohc</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-xowezi"><li>Instalar o neovim ou editor da sua preferência.</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pacman -Sy neovim</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-dj7xr6"><li>Editar o arquivo /etc/locale.gen e descomentar o en-UTF8 ou a lingua que você usa como pt_BR-UTF8</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"># depois gerar os arquivos
locale-gen</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-l0otdd"><li>Criar arquivo /etc/locale.conf e add a linguagem padrão do sistema</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">LANG=en_US.UTF-8</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-atpv13">Hostname</h2> <ul data-svelte-h="svelte-h0fxc7"><li><p>Add o hostname em /etc/hostname</p></li> <li><p>Editar o /etc/hosts</p></li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/etc/hosts

127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-1cxsqwr">Gestão do USER</h2> <ul data-svelte-h="svelte-1sx9mg0"><li>Definir senha do root</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">passwd</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-6ifpdl"><li>Add user</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">useradd -m -g users -G wheel,audio,video,storage nome_desejado_para_o_usuario</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-yil1dm"><li>Add no /etc/sudoers</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">myuser ALL=(ALL) ALL</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1rt423x">Atualizar agora o usuário que eu criei com o passwd.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">passwd nome_desejado_para_o_usuario</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-zl9jmb">Pacotes adicionais</h2> <ul data-svelte-h="svelte-1k2elw0"><li>Instalar pacotes adicionais (pra wifi continuar funcionando no pos instalação)</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pacman -S dosfstools os-prober mtools network-manager-applet networkmanager wpa_supplicant wireless_tools dialog sudo</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-19qwidg">Grub</h2> <p data-svelte-h="svelte-b8lqnu">Acho que foi a parte que mais me enrosquei, importante que precisa já ter criado e formatado, além disso aqui é importante que ele usa pacotes diferentes dependendo do tipo da sua
partição do boot.</p> <ul data-svelte-h="svelte-1bejskq"><li>Instalar o GRUB</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">pacman -S grub os-prober

# MBR

grub-install --target=i386-pc --recheck /dev/sda

# EFI
pacman -S efibootmgr
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck

CONFIG
grub-mkconfig -o /boot/grub/grub.cfg
</code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-sk550b">Pós Instalação</h2> <p data-svelte-h="svelte-kwvlt">Primeiro vou habilitar o networkmanager pois senão não vai habilitar a rede.</p> <ul data-svelte-h="svelte-buzms9"><li>Hábilitar o network manager</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">systemctl enable NetworkManager</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1qcwgc1">Depois disso reinicio e testo através de um ping se está funcionando a rede além é claro de logar com o meu usuário, agora pra usar o pacman vamos usar o sudo.</p> <ul data-svelte-h="svelte-1pfzyd0"><li>Instalar o básico pra usar o Xmonad e algumas aplicações</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo pacman -Syy xorg xorg-xinit xf86-video-fbdev(ou sua placa de video) nitrogen picom firefox neovim ranger rxvt-unicode
sudo pacman -Syy lightdm lightdm-gtk-greeter xmonad xmonad-contrib xmobar dmenu kitty</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-u71swl">Ali instalo dois terminais o urxvt e o kitty, isso acontece pois quando fiz a instalação tive problemas com o kitty no inicio da configuração, então uso o urxvt e depois de copiar
todas as minhas configs eu mudo para o kitty, já que o caração de usar um tilling manager é ter acesso fácil ao terminal.</p> <ul data-svelte-h="svelte-1nbyua7"><li>Configurar o .xinitrc copiando o exemplo do xorg pra sua home</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">cp /etc/X11/xinit/xinitrc .xinitrc</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-1mkcwm5"><li>Adicionar o arquivo o start do nitrogen do picom e do xmonad</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"># Remover
twm &amp;
...
exec xterm -geometry 80x66+0+0 -name login

#Adicionar
exec xmonad</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1yd25ew">Bom com essa configuração eu já consigo iniciar o Xmonad, eu gosto de deixar ele funcional já por que se houver algum problema pra subir o Xorg ou o Xmonad ele ainda vai entrar em
modo texto.</p> <ul data-svelte-h="svelte-grtsxt"><li>Testar a inicialização</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">startx</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1r2lx3e">Bom agora aqui eu copio meus arquivos de configuração, se você não tem os seus pode usar o meu <a href="https://github.com/jonatasoli/dotfiles" rel="nofollow">clicando aqui</a>.</p> <ul data-svelte-h="svelte-1pku4tm"><li>Copiar os arquivos de configuração do xmonad e do xmobar</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"># criar diretório .xmonad
# criar diretório .config/xmobar

Normalmente eu reinicio logo novamente e dou um startx só pra ter certeza que tudo está funcionando, ai sim eu habilito o lightdm pra iniciar tudo já no modo gráfico.</code>`}<!-- HTML_TAG_END --></pre> <ul data-svelte-h="svelte-1d3bwhv"><li>Habilitar o lightdm</li></ul> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl enable lightdm</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-pd896c">Depois disso, eu começo a configurar o meu ambiente de desenvolvimento mas, o sistema já está pronto pra ser usado. Caso tenham alguma dúvida pode colocar nos comentários que ajudo
da melhor maneira que conseguir.</p>`;
});
export {
  Minha_instalacao_arch_linux as default,
  metadata
};
