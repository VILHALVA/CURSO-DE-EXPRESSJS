# CRUD DE EXPRESS E MONGODB - APLICAÇÃO DE TAREFAS
**Requisitos prévios:**

1. Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.

**Passos básicos para criar uma aplicação CRUD com Express.js e MongoDB:**

1. **Configurar o projeto:**

   - Crie um novo diretório para o seu projeto e navegue até ele no terminal.
   - Inicialize um projeto Node.js com `npm init -y` e verifique se o arquivo `package.json` foi criado.

2. **Instalar as dependências:**

   Instale o Express.js e as dependências necessárias:

   ```
   npm install express mongoose body-parser
   ```

   - `express` é o framework para o servidor.
   - `mongoose` é uma biblioteca para interagir com o banco de dados MongoDB.
   - `body-parser` é um middleware que ajuda a analisar o corpo das solicitações HTTP.

3. **Configurar a aplicação:**

   - Crie um arquivo JavaScript (por exemplo, `app.js`) para a sua aplicação.
   - Requerir o Express.js e as dependências:

   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   ```

4. **Conectar ao banco de dados:**

   - Conecte a sua aplicação a um banco de dados MongoDB usando o `mongoose`. Defina uma URL de conexão com o banco de dados, por exemplo:

   ```javascript
   mongoose.connect('mongodb://localhost/minha-base-de-dados', { useNewUrlParser: true, useUnifiedTopology: true });
   ```

   Substitua `'mongodb://localhost/minha-base-de-dados'` pela URL do seu próprio banco de dados MongoDB.

5. **Definir o modelo de dados:**

   - Crie um modelo de dados para as tarefas que deseja armazenar na base de dados. Por exemplo:

   ```javascript
   const tarefaSchema = new mongoose.Schema({
     nome: String,
     descricao: String,
   });

   const Tarefa = mongoose.model('Tarefa', tarefaSchema);
   ```

   Isso define o esquema da tarefa e cria um modelo chamado `Tarefa` que pode ser usado para interagir com a base de dados.

Esses são os primeiros passos para configurar sua aplicação CRUD com Express.js e MongoDB. Os passos seguintes envolveriam a criação das rotas para realizar as operações CRUD, ou seja, criar, ler, atualizar e excluir tarefas na base de dados. 
