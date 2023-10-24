# JSON WEB TOKEN NO NODEJS COM EXPRESSJS
JSON Web Token (JWT) é uma técnica popular para autenticação e autorização em aplicações web. Vou mostrar um exemplo simples de como implementar autenticação JWT em um aplicativo Node.js com Express.js.

Primeiro, certifique-se de que você tenha o Node.js e o Express.js instalados em seu ambiente de desenvolvimento.

**Passos para implementar a autenticação JWT com Express.js:**

1. **Instale as dependências:**

   Você precisará das bibliotecas `express`, `jsonwebtoken`, `body-parser` e `bcrypt` para este exemplo. Você pode instalá-las usando o npm:

   ```bash
   npm install express jsonwebtoken body-parser bcrypt
   ```

2. **Configuração do Express.js:**

   Crie um arquivo JavaScript para a sua aplicação (por exemplo, `app.js`) e configure o Express.js:

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const jwt = require('jsonwebtoken');
   const bcrypt = require('bcrypt');
   const app = express();
   const port = 3000;

   // Configurar o middleware para analisar o corpo das solicitações
   app.use(bodyParser.json());

   // Chave secreta para assinar e verificar tokens
   const segredo = 'chave-secreta-super-segura';

   // Simulação de uma base de dados de usuários (geralmente, isso seria uma base de dados real)
   const usuarios = [
     { id: 1, nome: 'Usuário1', senha: 'senha1' },
     { id: 2, nome: 'Usuário2', senha: 'senha2' },
   ];
   ```

3. **Rota de Registro:**

   Crie uma rota para o registro de usuários. Esta rota permite que os usuários criem uma conta com nome de usuário e senha. O exemplo abaixo usa o `bcrypt` para armazenar as senhas de forma segura:

   ```javascript
   app.post('/registro', (req, res) => {
     const { nome, senha } = req.body;

     // Simulação de um ID único (geralmente, isso viria da base de dados)
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
   ```

4. **Rota de Login:**

   Crie uma rota para a autenticação do usuário. Esta rota permite que os usuários façam login e recebam um token JWT se as credenciais estiverem corretas:

   ```javascript
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
   ```

5. **Proteger Rotas com JWT:**

   Você pode proteger rotas autenticadas verificando o token JWT nas solicitações. Vamos criar uma rota protegida de exemplo:

   ```javascript
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
   ```

6. **Iniciar o Servidor:**

   Inicie o servidor Express:

   ```javascript
   app.listen(port, () => {
     console.log(`Servidor Express está rodando na porta ${port}`);
   });
   ```

Este é um exemplo básico de autenticação JWT em um aplicativo Express.js. Certifique-se de adaptar e aprimorar este código para atender às necessidades específicas do seu projeto, como a integração com uma base de dados real, tratamento de erros e melhores práticas de segurança.