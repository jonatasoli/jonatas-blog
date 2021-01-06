---
title: "Minha instalação do Arch Linux"
description: "Um roteiro de como eu instalo o Arch Linux"
date: 2021-01-08
---

# Instalação do Arch Linux

Bom começando 2021 com um blog novo decidi compartilhar o meu roteiro para instalar o Arch Linux com algumas explicações.
No longínquo ano de 2004 eu bricanva com instalações complicadas como o FreeBSD, Gentoo e o Slackware, foi uma boa base para aprender muito, com todos os kernel panics  da vida,
mas minha vida com o pinguim naquela época ainda era só uma curiosidade, pois trabalhava com Delphi e ambiente Windows além de que nessa época era bem complicado jogar no Linux.
Desde de 2014 voltei a trabalhar usando Linux inicialmente como freelance e depois na minha ocupação principal, um pouco isso se deve ao trabalho do Dionatan do [Diolinux](https://diolinux.com.br/), mas desde então conhecim uma distro que não havia conhecido lá no começo dos anos 2000 que era o Arch linux, gostei muito da ideia do Pacman que é muito parecido com o Brew do MacOs, mas mesmo assim sempre fiquei nas distros ubuntu like pois era um sistema que eu tinha mais familiaridade.
Esse ano de 2021 vai ser um ano atipico pra mim eu nesse momento estou usando um Mac, mas no meio do ano vou trabalhar alguns meses numa estação Windows até que mais pro final do
ano estou pensando em pegar um notebook da [System76](https://system76.com/), então no perído entre festas ali de 2020 eu decidi me aventurar em fazer uma instalação do Arch numa
virtualbox para ter um roteiro pronto pra usar no meio do ano pra voltar a usar o Arch.
Um ponto importante é que lá por 2017 eu comecei a usar o xubuntu com o gerenciador de janelas i3, antes de começar a usar o mac estava usando o [Xmonad](https://xmonad.org/) nesse guia eu levo em
consideração a instalação do Xmonad pois já tenho meus arquivos de configuração que basicamente devo copiar, caso tenha interesse você pode ver no meu [GitHub](https://github.com/jonatasoli/dotfiles).
Um disclamer antes do guia, na verdade eu achei a configuração do Arch relativamente tranquila, a [documentação oficial](https://wiki.archlinux.org/index.php/installation_guide),
além de que pra mim me enrolei em alguns pontos que não estão muitos explicitos ali, então por isso fiz esse guia, dois vídeos que me ajudaram muito foi esse do [Diolinux](https://www.youtube.com/watch?v=4orYC5ARfn8&t=3212s) e essa do [Derek Taylor](https://www.youtube.com/watch?v=PQgyW10xD8s&t=1340s), que alias também tem materiais muitos bons.

## Verificando UEFI Mode

* Verificar o bootmode se o comando abaixo der erro é por que está no UEFI mode
Pode ser que essa pasta não exista ai o computador não tem suporte a UEFI
```
ls /sys/firmware/efi/efivars
```

## Gerando o partionamento

Aqui acredito que é algo bem pessoal, cada um organiza do jeito que acha melhor eu particularmente uso um / /boot /home /swap usando uma estrutura de partições GPT, caso você não
saiba o que é de uma olhada [nesse artigo do sempreupdate](https://sempreupdate.com.br/quais-as-diferencas-entre-gpt-guid-e-mbr/).

* Particionar o disco
```
fdisk -l #lista discos
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
- 1 # EFI Filesystem ou 4 bios boot se for MBR
```

Agora precisamos formatar as partições pra isso usamos o ```mkfs``` e no caso do swap usamos o ```mkwap e swapon```.

* Formatar partições
```
mkfs.ext4 /dev/sda1

# Swap
mkswap /dev/sda2
swapon /dev/sda2
```

* Instalar dostools
```
pacman -S dosfstools
```

* Formatar a partição do boot
```
mkfs.fat -F 32 /dev/sda1
# Pode ser BIOS boot ou EFI que é a opção 1
```
## Montando os filesystems
Bom o próximo passo é montar o filesystem para fazer a instalação além de montar os diretórios que vão ficar separados em partições diferentes como o /boot e o /home. Acho bom
enfatizar que o nome das partições vai variar dependendo de como você particionou, no meu caso vai ser /dev/sda1 /dev/sda2 /dev/sda3 e /dev/sda4, porém abaixo deixei da forma mais
genérica.

* Montar o filesystem
```
mount /dev/root_partition /mnt
```
* Criar pastas de boot e home
```
mkdir /mnt/home
mkdir /mnt/boot/ # caso EFI tem que ser /mnt/boot/EFI
```

* Montar o filesystem
```
mount /dev/mount-boot /mnt/boot
mount /dev/mount-home /mnt/home
```

## Instalação
Bom agora chegou a hora da instalação, como você vai ver é bem simples:
* instalar os pacotes básicos
```
pacstrap /mnt base base-devel linux linux-firmware
```
Agora vamos gerar o fstab, se não sabe o que é o fstab da uma conferida nesse [vídeo do Diolinux](https://www.youtube.com/watch?v=C63VJV3sOos).

* Gerar o fstab
```
genfstab -U /mnt >> /mnt/etc/fstab
```
Agora vamos montar o root do arch linux.
* Mudar a montagem pra root
```
arch-chroot /mnt
```

* Setar hora local
```
ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
hwclock --systohc
```

* Instalar o neovim ou editor da sua preferência.
```
pacman -Sy neovim
```

* Editar o arquivo /etc/locale.gen e descomentar o en-UTF8 ou a lingua que você usa como pt_BR-UTF8
```
# depois gerar os arquivos
locale-gen
```

* Criar arquivo /etc/locale.conf e add a linguagem padrão do sistema
```
LANG=en_US.UTF-8
```

## Hostname
* Add o hostname em /etc/hostname

* Editar o /etc/hosts
```
/etc/hosts

127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname
```

## Gestão do USER
* Definir senha do root

```
passwd
```

* Add user
```
useradd -m -g users -G wheel,audio,video,storage nome_desejado_para_o_usuario
```

* Add no /etc/sudoers
```
myuser ALL=(ALL) ALL
```

Atualizar agora o usuário que eu criei com o passwd.
```
passwd nome_desejado_para_o_usuario
```

## Pacotes adicionais
* Instalar pacotes adicionais (pra wifi continuar funcionando no pos instalação)
```
pacman -S dosfstools os-prober mtools network-manager-applet networkmanager wpa_supplicant wireless_tools dialog sudo
```

## Grub
Acho que foi a parte que mais me enrosquei, importante que precisa já ter criado e formatado, além disso aqui é importante que ele usa pacotes diferentes dependendo do tipo da sua
partição do boot.

* Instalar o GRUB
```
pacman -S grub os-prober

# MBR

grub-install --target=i386-pc --recheck /dev/sda

# EFI
pacman -S efibootmgr
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck

CONFIG
grub-mkconfig -o /boot/grub/grub.cfg

```

## Pós Instalação

Primeiro vou habilitar o networkmanager pois senão não vai habilitar a rede.
* Hábilitar o network manager
```
systemctl enable NetworkManager
```
Depois disso reinicio e testo através de um ping se está funcionando a rede além é claro de logar com o meu usuário, agora pra usar o pacman vamos usar o sudo.

* Instalar o básico pra usar o Xmonad e algumas aplicações
```
sudo pacman -Syy xorg xorg-xinit xf86-video-fbdev(ou sua placa de video) nitrogen picom firefox neovim ranger rxvt-unicode
sudo pacman -Syy lightdm lightdm-gtk-greeter xmonad xmonad-contrib xmobar dmenu kitty
```

Ali instalo dois terminais o urxvt e o kitty, isso acontece pois quando fiz a instalação tive problemas com o kitty no inicio da configuração, então uso o urxvt e depois de copiar
todas as minhas configs eu mudo para o kitty, já que o caração de usar um tilling manager é ter acesso fácil ao terminal.

* Configurar o .xinitrc copiando o exemplo do xorg pra sua home
```
cp /etc/X11/xinit/xinitrc .xinitrc
```

* Adicionar o arquivo o start do nitrogen do picom e do xmonad
```
# Remover
twm &
...
exec xterm -geometry 80x66+0+0 -name login

#Adicionar
exec xmonad
```

Bom com essa configuração eu já consigo iniciar o Xmonad, eu gosto de deixar ele funcional já por que se houver algum problema pra subir o Xorg ou o Xmonad ele ainda vai entrar em
modo texto.
* Testar a inicialização
```
startx
```
Bom agora aqui eu copio meus arquivos de configuração, se você não tem os seus pode usar o meu [clicando aqui](https://github.com/jonatasoli/dotfiles).
* Copiar os arquivos de configuração do xmonad e do xmobar
```
# criar diretório .xmonad
# criar diretório .config/xmobar

Normalmente eu reinicio logo novamente e dou um startx só pra ter certeza que tudo está funcionando, ai sim eu habilito o lightdm pra iniciar tudo já no modo gráfico.
```
* Habilitar o lightdm
```
sudo systemctl enable lightdm
```

Depois disso, eu começo a configurar o meu ambiente de desenvolvimento mas, o sistema já está pronto pra ser usado. Caso tenham alguma dúvida pode colocar nos comentários que ajudo
da melhor maneira que conseguir.
