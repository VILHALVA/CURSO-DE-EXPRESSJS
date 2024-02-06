# SINTAXE:
Abaixo está um exemplo básico de um aplicativo Express.js que cria um servidor HTTP simples para exibir "Hello, World!" quando acessado:

1. **Crie um diretório para o projeto e instale o Express**:
```bash
mkdir meu-projeto-express
cd meu-projeto-express
npm init -y
npm install express
```

2. **Crie um arquivo `app.js` e adicione o seguinte código**:
```javascript
// Importe o módulo Express
const express = require('express');

// Crie uma instância do aplicativo Express
const app = express();

// Defina uma rota padrão que responde com "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Escute as solicitações HTTP na porta 3000
app.listen(3000, () => {
  console.log('Servidor Express está rodando em http://localhost:3000');
});
```

3. **Inicie o servidor**:
```bash
node app.js
```

4. **Acesse o aplicativo no navegador**:
   - Abra um navegador da web e vá para `http://localhost:3000`.
   - Você verá a mensagem "Hello, World!" sendo exibida.

**Explicação**:
- Primeiro, importamos o módulo Express usando `require('express')`.
- Em seguida, criamos uma instância do aplicativo Express chamando a função `express()`.
- Definimos uma rota padrão usando `app.get('/')`, que responde a solicitações HTTP GET na raiz do aplicativo (ou seja, `http://localhost:3000/`).
- Quando essa rota é acessada, o Express envia a resposta "Hello, World!" usando `res.send()`.
- Finalmente, iniciamos o servidor Express chamando `app.listen()` e especificando a porta em que o servidor deve escutar as solicitações HTTP (neste caso, a porta 3000).
- Quando o servidor está em execução, ele imprime uma mensagem no console indicando que está ouvindo em `http://localhost:3000`.

