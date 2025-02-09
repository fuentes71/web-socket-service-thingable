<h1 align="center" style="font-weight: bold;">Thingable - API do Serviço WebSocket</h1>

<p align="center">
 <a href="#started">Começando</a> • 
 <a href="#patterns">Padrões</a> •
</p>

<p align="center">
  <b>Aplicação Back-end do Serviço WebSocket </b>
</p>

<h2 id="started">🚀 Começando</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/en) nas versões 18.15 ou 20
- [Git](https://git-scm.com/)
- [NPM](https://docs.npmjs.com/cli) na versão 10.8
- [NestJS](https://docs.nestjs.com/cli/overview)
- [Docker](https://www.docker.com/get-started/)
- [Docker compose](https://docs.docker.com/compose/)


---

<h3> Variáveis de Ambiente</h3>

Use o arquivo `.env.example` e `.docker.env.example` como referência para criar seus arquivos de configuração .env.

---

<h3>Autenticação entre serviços</h3>

Este projeto utiliza autenticação baseada em chaves (API-KEY) para a comunicação entre os microsserviços, garantindo assim segurança e controle de acesso.

Pontos essenciais que devem ser atendidos para implementar a autenticação baseada em chaves:

- <b>Configuração e gerenciamento das chaves de API</b>: As chaves de API deverão ser configuradas e gerenciadas nas variáveis de ambiente para facilitar o controle e atualizações necessárias.

- <b>Tratamento de erros</b>: Em caso de fornecimento de uma API-KEY inválida, o serviço retornará um erro de autenticação apropriado, comunicando claramente a falha na autenticação.

---

<h3>Iniciando o projeto de forma manual</h3>

Como instalar e iniciar seu projeto

1 - Instalar as dependências

```bash
npm run install
```

2 - Subir containers

```bash
docker-compose up --build
```


<h3 id="patterns"> 📝 Padrões do Projeto</h3>

##### Nome da Classe: Padrão PascalCase

- Exemplo: CreateExemple

---

##### Nome da Entidade: Padrão PascalCase e sempre no singular

- Exemplo: NewEntity

---

##### Nome do Arquivo: Padrão kebab-case

- Exemplo: new-feature.service.ts

---

##### Nome dos Métodos da Classe: Padrão camelCase

- Exemplo: getExemple

---

##### Nome da Variável: Padrão camelCase

- Exemplo: const newExemple

---

##### Nome da Pasta/Característica: Padrão kebab-case e sempre no plural

- Exemplo: generic-exemple ou generic-features

- Service: Um único arquivo contendo todos os métodos
- Controller: Um único arquivo contendo todos os métodos
