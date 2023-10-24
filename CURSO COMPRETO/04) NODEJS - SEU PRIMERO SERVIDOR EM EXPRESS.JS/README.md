# NODEJS - SEU PRIMERO SERVIDOR EM EXPRESS.JS
**Conceitos Importantes:**

1. **Node.js:** Node.js é uma plataforma de tempo de execução JavaScript que permite executar código JavaScript no lado do servidor. É altamente eficiente e adequado para construir aplicativos de rede escaláveis.

2. **Express.js:** Express.js é um framework web para Node.js que simplifica o processo de criação de aplicativos web e APIs.

**Exemplo de Código:**

Aqui está um exemplo de código que demonstra a criação de um servidor HTTP simples com o Express.js:

```javascript
// Importar o módulo Express.js
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();

// Definir a porta em que o servidor irá ouvir
const porta = 3000;

// Rota raiz - Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu primeiro servidor Express.js!');
});

// Iniciar o servidor na porta especificada
app.listen(porta, () => {
  console.log(`Servidor Express está rodando na porta ${porta}`);
});
```

**Explicação e Exemplo:**

1. Primeiro, importamos o módulo `express`, que é o framework web que simplificará a criação do servidor e o tratamento de rotas.

2. Em seguida, criamos uma instância do aplicativo Express usando `const app = express();`. Essa instância representa o servidor web que iremos configurar.

3. Definimos a porta em que o servidor irá ouvir, no caso, a porta 3000, utilizando `const porta = 3000;`.

4. Definimos uma rota raiz (`/`) usando `app.get('/', ... )`. Esta rota responde a solicitações GET, que são solicitações padrão de navegação na web. Quando alguém acessa o servidor através de um navegador, essa rota é acionada.

5. No callback da rota, usamos `res.send(...)` para enviar uma resposta ao cliente, que neste caso é a mensagem "Bem-vindo ao meu primeiro servidor Express.js!".

6. Finalmente, iniciamos o servidor na porta especificada, que é a porta 3000, com `app.listen(porta, () => { ... })`. Quando o servidor está ativo, exibimos uma mensagem no console.

Ao executar este código, você terá um servidor Express.js simples em execução. Quando você acessar `http://localhost:3000` em seu navegador, verá a mensagem de boas-vindas.

Este é um exemplo inicial para lhe dar uma ideia de como criar um servidor com Express.js. Você pode continuar expandindo seu aplicativo, adicionando mais rotas, manipulando solicitações, configurando middlewares e criando recursos mais complexos para atender às necessidades do seu projeto. O Express.js oferece uma variedade de recursos poderosos para o desenvolvimento de aplicativos web robustos.