const express = require('express');
const app = express();
const port = 3000;

// Rota raiz
app.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota de exemplo com parâmetros na URL
app.get('/produto/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Exibindo detalhes do produto ${productId}`);
});

// Rota para exibir uma página de contato
app.get('/contato', (req, res) => {
  res.send('Página de contato');
});

// Rota para lidar com solicitações POST
app.post('/enviar', (req, res) => {
  res.send('Solicitação POST recebida');
});

// Rota para uma página de erro 404 (página não encontrada)
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
