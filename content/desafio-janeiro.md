---
title: "Desafio de prática - Escopo Janeiro"
description: "Escopo Inicial - Janeiro"
date: 2021-12-29
---

# Por que?
* Melhorar o conhecimento em python
* Montar minha primeira lib no pypi
* Melhorar o conhecimento em GitHub Actions

Bom o objetivo desse projeto é conseguir completar a talvez unica fase prevista no [projeto de templates fastapi](https://github.com/jonatasoli/fastapi-template-cookiecutter),
assim montar o exemplo da documentação do fastapi que tem apenas o main.py e o meu exemplo melhorado do repositório que mencionei, além disso quero usar uma ferramenta de script como o typer do próprio criador do fastapi pra adicionar as funcionalidades: add template, inicializar/gerar/rodar migrations e rodar o app do template.

Como o template sem o cookiecutter está pronto o maior trabalho vai ser fazer ele funcionar com o cookiecuter em si, além de fazer os testes rodarem via github actions.

# O que?

## Conceitos

* Aprender typer
* Aprender a gerar um teste de unidade no GitHub Actions
* Publicar uma lib no PyPi

Aqui basicamente vou estudar o typer que é a ferramenta de script feita pelo criador do fastapi, aprender a gerar os testes de unidade sem containers via GitHub Action e por fim como publicar uma biblioteca no PyPi.

## Fatos

* Montar um pré-commit no projeto
* Adicionar o projeto badges de build, dependencias e analise estática
* O projeto precisa ser desenvolvido como lib
* O projeto precisa poder criar um template
* O projeto precisa poder iniciar - gerar - migrar as migrations do bd
* O projeto precisa poder iniciar o projeto com uvicorn

## Procedimentos

* Reforçar conceitos de OO
* Reforçar conceitos de teste
* Reforçar o conhecimento em cookiecuter
* Reforçar conhecimentos em desenvolvimento web com python

# Como?

[Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/)
* Gerar 2 projetos diferentes
* Opções do poetry
* Adicionar como o exemplo o projeto [design api](https://github.com/jonatasoli/fastapi-design-api-example)

[Typer](https://typer.tiangolo.com/):
* Criar o prefixo "fast"
* Receber paramêtros (create | db [init/make/migrate] | runserver)

[GitHub Actions](https://github.com/features/actions)
* Rodar testes de unidade (sem db)
* Rodar o coverage
* Adicionar o [sonarcloud](https://sonarcloud.io/)

[Git](https://pre-commit.com/)
* Rodar o prospector
* Rodar o safety

Basicamente nesse projeto é consultar as documentações e aplicar os conceitos acima, estimativa inicial pra todos esses passo é fazer tudo em 20 horas.
