# App alunos

O aplicativo de alunos é uma aplicação que lista os alunos de uma escola com filtros

## Tecnologias Utilizadas

API:

 - [NodeJS](https://nodejs.org/en/) 
 - [Typescript](https://www.typescriptlang.org/)
 - [NestJS](https://nestjs.com/)
 - [GraphQL](https://graphql.org/)
 - [TypeORM](https://typeorm.io/)
 - [Jest](https://jestjs.io/pt-BR/)
 - [Docker](https://www.docker.com/)

WEB:

 - [NodeJS](https://nodejs.org/en/) 
 - [Typescript](https://www.typescriptlang.org/)
 - [ReactJS](https://pt-br.reactjs.org/)
 - [Apollo Client](https://www.apollographql.com/docs/react/)
 - [React Hook Form](https://react-hook-form.com/)
 - [Docker](https://www.docker.com/)

## Requisitos

Para conseguir rodar a aplicação tanto a api como o web é necessário ter instalado e configurado o [docker](https://docs.docker.com/engine/install/ubuntu/) e o [docker-compose](https://docs.docker.com/compose/install/)

## Como Rodar a aplicação

### API

```bash
# Clone este repositório
$ git clone <https://github.com/zarateganso10/app-students.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd app-api

# Rode o docker-compose up para subir os containers da api
$ docker-compose up -d
```

### WEB

Se ainda estiver na pasta da api

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd ../app-web

# Rode o docker-compose para subir os containers do web
$ docker-compose up -d
```
