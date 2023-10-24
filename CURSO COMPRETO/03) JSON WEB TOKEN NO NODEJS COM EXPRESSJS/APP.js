// Importar as bibliotecas necessárias
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Configurar middleware para analisar JSON
app.use(bodyParser.json());

// Chave secreta para assinar e verificar tokens JWT
const segredo = 'chave-secreta-super-segura';

// Simulação de um banco de dados de usuários (geralmente, você usaria um banco de dados real)
const usuarios = [
  { id: 1, nome: 'Usuario1', senha: 'senha1' },
  { id: 2, nome: 'Usuario2', senha: 'senha2' },
];

// Rota de registro de usuário
app.post('/registro', (req, res) => {
  const { nome, senha } = req.body;

  // Simulação de um ID único (geralmente, isso viria do banco de dados)
  const id = usuarios.length + 1;

  // Criptografar a senha antes de armazená-la (usando bcrypt)
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao criar o usuário' });
    } else {
      usuarios.push({ id, nome, senha: hash });
      res.json({ message: 'Usuário criado com sucesso' });
    }
  });
});

// Rota de login
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  const usuario = usuarios.find((u) => u.nome === nome);

  if (!usuario) {
    res.status(401).json({ error: 'Usuário não encontrado' });
  } else {
    bcrypt.compare(senha, usuario.senha, (err, result) => {
      if (err || !result) {
        res.status(401).json({ error: 'Credenciais inválidas' });
      } else {
        // Criar um token JWT
        const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, segredo);

        res.json({ token });
      }
    });
  }
});

// Rota protegida com JWT
app.get('/rota-protegida', (req, res) => {
  // Verificar o token JWT da solicitação
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ error: 'Token JWT ausente' });
  } else {
    // Verificar e decodificar o token JWT
    jwt.verify(token, segredo, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Token JWT inválido' });
      } else {
        res.json({ message: 'Rota protegida', usuario: decoded });
      }
    });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
