########################
## CONSTRÓI APLICAÇÃO ##
########################

FROM node:18.15-alpine AS builder


## Cria o diretório da aplicação
##
WORKDIR /usr/src/app

## Copia os arquivos do repositório
##
COPY . .

## Instala dependências
##
RUN npm install

## Compila a aplicação gerando os arquivos de distribuição
##
RUN npm run build