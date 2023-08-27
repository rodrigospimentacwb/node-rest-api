# Trabalho de REST API com Node e Express

Este projeto é um exemplo de uma aplicação RESTful API construída usando Node.js e o framework Express. A aplicação apresenta endpoints para realizar operações básicas em uma `lista de produtos`, incluindo GET, POST, PUT e DELETE.

## Instalação e Uso

Siga os passos abaixo para configurar e executar a aplicação:

1. Clone o repositório para o seu ambiente local:

        https://github.com/rodrigospimentacwb/node-rest-api

2. Navegue para o diretório do projeto:

        cd nome-do-repositorio

3. Instale as dependências utilizando o npm:

        npm install

4. Inicie o servidor usando o npm:

        node .\server.js

    ou usando o nodemon (caso você tenha instalado globalmente):

        nodemon .\server.js

A aplicação estará disponível em http://localhost:3000.

## APIs Disponíveis

### Listar todos os produtos

Endpoint: `GET /produtos`

Retorna uma lista de todos os produtos disponíveis.

### Buscar produto por ID

Endpoint: `GET /produtos/:id`

Retorna um produto específico com base no ID fornecido.

### Adicionar novo produto

Endpoint: `POST /produtos`

Permite adicionar um novo produto à lista. O corpo da requisição deve conter os detalhes do produto.

Exemplo de Corpo de Requisição:

        {
            "descricao": "Novo Produto",
            "valor": 9.99,
            "marca": "Marca Nova"
        }

### Atualizar produto por ID

Endpoint: `PUT /produtos/:id`

Permite atualizar as informações de um produto existente com base no ID fornecido. O corpo da requisição deve conter os novos detalhes do produto.

Exemplo de Corpo de Requisição:

        {
            "descricao": "Produto Atualizado",
            "valor": 14.99,
            "marca": "Nova Marca"
        }

### Remover produto por ID

Endpoint: `DELETE /produtos/:id`

Permite remover um produto da lista com base no ID fornecido.