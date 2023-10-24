// Importe o módulo Express.js
const express = require('express');

// Crie uma instância do aplicativo Express
const app = express();

// Defina a porta em que o servidor irá ouvir
const porta = 3000;

// Rota raiz - Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu primeiro servidor Express.js!');
});

// Inicie o servidor na porta especificada
app.listen(porta, () => {
  console.log(`Servidor Express está rodando na porta ${porta}`);
});
