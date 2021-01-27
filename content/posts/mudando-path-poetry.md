---
title: "Mudando path do poetry"
description: "Como configurar o poetry para mudar o diretório padrão que ele cria a Virtual Env"
date: 2021-01-27
---

Olá tudo bem?

Estou passando aqui pra dar uma dica rápida, quando você possui muitos projetos em python as vezes fica difícil de gerenciar as Virtal Envs do projetos.

Quando usava o pipenv isso não era tanto um problema, pois ele tinha um comando para remover uma virtualenv e recria-la novamente, porém o poetry até esse momento ainda não criou tal comando. Ai lembre do Renzo do [Python Pro](https://www.python.pro.br), falava que criava as envs diretamente no projeto numa pasta .env, então decidi fazer assim também no meu ambiente e vem me ajudando muito.

Pra fazer isso é bem simples é só executar o comando abaixo no seu terminal:
```
poetry config virtualenvs.path .env
```

Lembrando que pra funcionar você precisa ter o poetry instalado no seu pipenv =D

Bom gente é isso, espero que lhe ajudem.
