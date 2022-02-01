---
title: "Desafio de prática - Escopo Janeiro"
description: "Escopo Inicial - Janeiro"
date: 2022-01-01
---

# Por que?
* Atender demandas de um cliente antigo de um projeto já criado
* Aplicar o método da refatoração
* Melhorar o conhecimento em GitHub Actions

Bom o objetivo desse projeto é atender algumas demandas que já me foram pedidas num projeto antigo [fast-ecommerce](https://github.com/jonatasoli/Fast-Ecommerce).

O objetivo é transformar num monorepo, ajustar testes, criar features e fazer pequenos refactors durante o processo.

# O que?

## Conceitos

* Testar a migração do vue 2 para o vue 3
* Aprender a gerar um testes de unidade no GitHub Actions
* Exercitar refactors

Aqui basicamente tem estudos mais focados em testes e GitHub Actions, mas o projeto vai ser mais focado na prática.

## Fatos

* Montar um pré-commit no projeto
* Adicionar o projeto badges de build, dependencias e analise estática
* O projeto front precisa ser migrado para vue3
* Os projetos precisam ficar num monorepo
* O projeto front precisa remover dependências do cliente
* O projeto back precisa sofrer alguns refactors
* O projeto front precisa aceitar scripts do tipo typescript
* Ajustes sugeridos no sonarcloud

## Procedimentos

* Reforçar conceitos de arquitetura
* Reforçar conceitos de teste
* Reforçar os conhecimentos de vue3
* Reforçar os conhecimentos de typescript

# Como?

[Vue3 migrate](https://cli.vuejs.org/migrating-from-v3/)
* Rodar script de migração
* Resolver conflitos
* Bônus - Fazer refactors para composition API

[Typescript](https://www.typescriptlang.org/docs/):
* Refatorar scripts já usando typescript

[GitHub Actions](https://github.com/features/actions)
* Rodar testes de unidade (sem db)
* Rodar o coverage
* Ajustes no [sonarcloud](https://sonarcloud.io/)

[Git](https://pre-commit.com/)
* Rodar o prospector
* Rodar o safety

Basicamente é um projeto focado em atender uma demanda, montar features, e fazer melhorias.
