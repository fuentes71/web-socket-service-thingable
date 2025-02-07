<h1 align="center" style="font-weight: bold;">Inova - API do Serviço WebSocket</h1>

<p align="center">
 <a href="#started">Começando</a> • 
 <a href="#routes">Endpoints da API</a> •
 <a href="#patterns">Padrões</a> •
</p>

<p align="center">
  <b>Aplicação Back-end do Serviço WebSocket - Inova</b>
</p>

<h2 id="started">🚀 Começando</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [NPM](https://docs.npmjs.com/cli) ou [Yarn](https://classic.yarnpkg.com/pt-BR/docs/cli)
- [NestJS](https://docs.nestjs.com/cli/overview)
- [Docker](https://www.docker.com/get-started/)
- [Docker compose](https://docs.docker.com/compose/)

<h3>Clonagem</h3>

Como clonar seu projeto

```bash
git clone https://gitlab.inova.ind.br/inova/mes/websocket-service.git
```

---

<h3> Variáveis de Ambiente</h3>

Use o arquivo `.env.example` e `.docker.env.example` como referência para criar seus arquivos de configuração .env.

---

<h3>Iniciando o projeto de forma manual</h3>

Como instalar e iniciar seu projeto

1 - Instalar as dependências

```bash
npm install
```

2 - Subir containers

```bash
docker-compose up
```

---

<h3>Usando Dev Container</h3>

O projeto usa a Extensão do VSCode [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) para construir e executar o aplicativo dentro de um contêiner Docker.
Para isso, basta instalar a extensão em seu IDE e executar a opção para abrir o repositório em container e executar os comandos:

1 - Executar servidor

```bash
npm run start:dev
```

---

<h3>Formatando o projeto com as regras Eslint e Prettier</h3>

**IMPORTANTE:** Para que as configurações de formatação sejam executadas na sua aplicação é necessário que:

Como formatar o seu projeto

1 - Verificar arquivos que contenham erros de sintaxe com ESlint

```bash
npm run check:lint
```

2 - Executar o linting para a correção dos erros de código que estão fora das regras definidas no ESlint. Utilizando o padrão de formatação de código configurado com prettier

```bash
npm run lint:fix
```

3 - Executar a formatação dos códigos que estão fora do padrão de formatação definido no Prettier. Usando apenas a configuração do prettier

```bash
npm run format
```

**OPCIONAL:** Para que as configurações de formatação de identação sejam executadas automaticamente na sua máquina ao salvar as modificações no arquivo é necessário que:

- Seja habilitada a configuração `formatOnSave` no VSCode.
- O Prettier esteja configurado como formatador padrão no seu VSCode.

---

<h2 id="routes">📍 Endpoints da API</h2>

<h3>WebSocket</h3>

O serviço WebSocket permite a comunicação em tempo real entre o servidor e os clientes conectados.

<h4>Conectar ao WebSocket</h4>

- URL: `ws://localhost:8085/events`

<h4>Mensagens</h4>

- **Evento:** `send-event`
- **Payload:**
  ```json
  {
    "event": "send-event",
    "data": "Sua mensagem aqui",
  }
  ```

---

<h3 id="patterns"> 💾 Padrões</h3>

<h4>Nome da Classe: Padrão PascalCase</h4>

- Exemplo: CreateStopType

<h4>Nome da Entidade: Padrão PascalCase e sempre no singular</h4>

- Exemplo: StopTypeEntity

<h4>Nome do Arquivo: Padrão kebab-case</h4>

- Exemplo: new-feature.service.ts

<h4>Nome dos Métodos da Classe: Padrão camelCase</h4>

- Exemplo: getStopTypesById

<h4>Nome da Variável: Padrão camelCase</h4>

- Exemplo: const stopType

<h4>Nome da Pasta/Característica: Padrão kebab-case e sempre no plural</h4>

- Exemplo: stop-types ou generic-features

  - **Service:** Um único arquivo contendo todos os métodos
  - **Controller:** Um único arquivo contendo todos os métodos

---

### CI/CD

- Em desenvolvimento