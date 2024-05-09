# MANUAL:
Abaixo está um exemplo básico de um aplicativo Express.js que cria um servidor HTTP simples para exibir "Hello, World!" quando acessado:

1. **Crie um diretório para o projeto e instale o Express**:
```bash
mkdir meu-projeto-express
```

- Este comando cria um novo diretório chamado "meu-projeto-express" no sistema de arquivos.

```bash
cd meu-projeto-express
```

- Este comando navega para o diretório recém-criado "meu-projeto-express".

```bash
npm init -y
```

- Este comando inicializa um novo projeto Node.js no diretório atual. O parâmetro `-y` indica que todas as perguntas feitas durante o processo de inicialização serão aceitas com os valores padrão, resultando em um arquivo `package.json` com valores padrão.

```bash
npm install express
```

- Este comando instala o framework Express no projeto. O npm (Node Package Manager) é usado para instalar pacotes e suas dependências em um projeto Node.js. Aqui, o pacote "express" é instalado localmente no diretório do projeto e adicionado como uma dependência ao arquivo `package.json`.

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

## DIRETÓRIOS:
Em uma aplicação Express.js, a estrutura de diretório geralmente segue um padrão comum, mas pode variar dependendo das necessidades específicas do projeto. Aqui está uma estrutura básica de diretórios e arquivos, com uma breve explicação de cada um:

```
meuApp/
  |- node_modules/        # Pacotes e dependências instaladas via npm
  |- public/              # Arquivos públicos (HTML, CSS, imagens, etc.)
  |  |- css/              # Arquivos CSS
  |  |- js/               # Arquivos JavaScript
  |  |- images/           # Imagens
  |- views/               # Arquivos de visualização (normalmente, arquivos HTML ou templates)
  |- routes/              # Arquivos de rota para diferentes partes da aplicação
  |- models/              # Modelos de dados (opcional, dependendo da arquitetura)
  |- controllers/         # Controladores para gerenciar a lógica de negócios
  |- app.js               # Arquivo principal da aplicação, onde o servidor Express é configurado e iniciado
  |- package.json         # Metadados do projeto e dependências npm
  |- package-lock.json    # Versões fixas das dependências npm para garantir a reprodutibilidade das instalações
  |- README.md            # Documentação do projeto em formato Markdown
```

Aqui está uma breve explicação de cada diretório:

- **node_modules/**: Contém todas as dependências do projeto instaladas via npm. Você não deve modificar nada neste diretório diretamente, pois é gerado automaticamente pelo npm.

- **public/**: Este diretório é onde você armazena arquivos estáticos acessíveis publicamente, como arquivos CSS, JavaScript e imagens. Esses arquivos são servidos diretamente pelo Express.

- **views/**: Este diretório contém os arquivos de visualização da sua aplicação, como arquivos HTML ou templates de renderização, se você estiver usando um mecanismo de template como EJS, Handlebars, ou Pug.

- **routes/**: Aqui você coloca os arquivos de rota da sua aplicação. Cada arquivo geralmente contém definições de rotas e as funções de callback associadas a essas rotas.

- **models/**: Opcionalmente, se você estiver seguindo um padrão MVC (Model-View-Controller), pode usar este diretório para armazenar modelos de dados que representam a estrutura dos dados da sua aplicação.

- **controllers/**: Este diretório é onde você coloca os controladores, que contêm a lógica de negócios da sua aplicação. Os controladores são responsáveis por receber as requisições, interagir com os modelos (se houver) e retornar as respostas adequadas.

- **app.js**: Este é o arquivo principal da sua aplicação Express.js. Aqui você configura e inicia o servidor Express, define rotas principais, conecta-se ao banco de dados (se aplicável) e configura qualquer middleware necessário.

- **package.json** e **package-lock.json**: O `package.json` contém metadados sobre o projeto, como nome, versão, descrição, scripts de execução e dependências do projeto. O `package-lock.json` contém informações detalhadas sobre as versões exatas das dependências instaladas para garantir a reprodutibilidade das instalações.

- **README.md**: Um arquivo Markdown que geralmente contém informações sobre o projeto, como uma visão geral, instruções de instalação, uso, etc.



