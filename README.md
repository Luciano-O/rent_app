# Aplicação de aluguéis

## Súmario

- [Sobre](#sobre)
- [Autênticação](#autênticação)
- [Setup](#setup)
    - [Requisitos](#requisitos)
    - [Rodar](#rodar)
    - [Usar](#usar)
- [Links](#links)

## Sobre

O intuito foi criar uma aplicação de aluguel de produtos de tecnologia, utilizando uma
 api que realizasse o CRUD em um banco de dados sql, utilizando o ORM 
Sequelize para conexão com o banco manipulando os dados para essa aplicação, 
realizando ações como: cadastrar novos aluguéis, cadastrar novos clientes, realizar login,
alem de requisitar informações sobre clientes e produtos.

A api foi desenvolvida em TypeScript utilizando NodeJs e tambem utilizando outra bibliotecas como
Express para a criação da api, alem de outras bibliotecas que podem ser consultadas no package.json.

Ja o front-end foi feito com React, utilizando algumas bibliotecas como bootstrap para estilização,
axios para requisiçōes http, alem de outras bibliotecas que podem ser consultadas no package.json.

Para os testes foi usado o Jest, alem das bibliotecas mocha, chai e sinon para complementar e para executa-los
basta usar o comando:    `cd back-end && npm test`.

Alem do uso do TypeScript, o projeto seguiu o paradigma de orientação à objetos. A arquitetura MSC
foi usada para estruturar essa api, tendo a camada de models sendo controlada pelo Sequelize.

## Autênticação

Essa api usa o padrão Bearer para autênticação, e a biblioteca json-web-token para gerar e autêtnicar os tokens
necessarios para o uso de certar rotas.

Como vera na documentação, algumas rotas necessitam do token para serem acessadas, você pode conseguir esse token
realizando login através da rota /login, como descrito na documentação.

## Setup

### Requisitos

Você necessita do seguinte requisito prévio para que o projeto rode corretamente na sua maquina.

1. Docker
2. Docker-compose

### Rodar

Para executar esse projeto, você precisa apenas do Docker e docker-compose instalado no seu computador, caso ja tenha eles instalados,
realize o passo abaixo para rodar a aplicação.

1. Execute o build da api
    + `docker-compose up -d --build `

Pronto, feito isso, todas as partes da aplicação ja devem estar rodando corretamente, sendo elas, o back-end em http://localhost:3001,
o front-end em http://localhost:3000 e o banco de dados em http://localhost:3002.

### Usar

Com a aplicação rodando, agora basta acessar http://localhost:3000 e utilizar a aplicação, caso queira acessar a documentação da api
basta acessar http://localhost:3001/docs

## Links

* [LinkedIn](https://www.linkedin.com/in/lucianoog/)
