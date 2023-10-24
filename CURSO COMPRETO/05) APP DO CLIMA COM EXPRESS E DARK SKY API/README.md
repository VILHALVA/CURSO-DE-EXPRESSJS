# APP DO CLIMA COM EXPRESS E DARK SKY API
**Passo 1: Configuração do Projeto**

Primeiro, crie um novo diretório para o seu projeto e navegue até ele no terminal:

```bash
mkdir app-clima-express
cd app-clima-express
```

Em seguida, inicialize um projeto Node.js com as configurações padrão:

```bash
npm init -y
```

Isso criará um arquivo `package.json` com as configurações padrão para o seu projeto.

**Passo 2: Instalação de Dependências**

Instale as dependências necessárias para o projeto, incluindo Express.js, Axios e Pure.css:

```bash
npm install express axios purecss
```

- `express` é o framework web que usaremos.
- `axios` será usado para fazer solicitações HTTP para a API Dark Sky.
- `purecss` é um framework CSS leve que pode ser usado para estilizar a aplicação.

**Passo 3: Configuração do Servidor Express**

Crie um arquivo JavaScript (por exemplo, `app.js`) para configurar o servidor Express:

```javascript
const express = require('express');
const axios = require('axios');
const app = express();
const porta = 3000;

app.use(express.static('public'));

app.get('/clima', async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;

    const darkSkyApiKey = 'SUA_CHAVE_DE_API_DARK_SKY';
    const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lon}?units=si`;
    const response = await axios.get(darkSkyUrl);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados climáticos' });
  }
});

app.listen(porta, () => {
  console.log(`Servidor Express está rodando na porta ${porta}`);
});
```

Neste código:

- Importamos o Express.js e o Axios, e criamos uma instância do aplicativo Express.
- Configuramos um middleware para servir arquivos estáticos da pasta "public".
- Criamos uma rota `/clima` que aceita as coordenadas de latitude e longitude como parâmetros de consulta.
- Fazemos uma solicitação à API Dark Sky para obter dados climáticos com base nas coordenadas fornecidas.
- Iniciamos o servidor Express na porta 3000.

Certifique-se de substituir `'SUA_CHAVE_DE_API_DARK_SKY'` pela sua chave de API real da Dark Sky.

**Passo 4: Criação da Interface do Usuário**

Na pasta do seu projeto, crie uma pasta chamada "public" e adicione um arquivo HTML (por exemplo, `index.html`) com um formulário para inserir as coordenadas de latitude e longitude.

**Passo 5: Script do Lado do Cliente**

Dentro da pasta "public", crie um arquivo JavaScript (por exemplo, `app.js`) para lidar com a solicitação ao servidor e exibir os dados climáticos.

**Passo 6: Obtenha uma Chave de API Dark Sky**

Acesse o site da Dark Sky (agora de propriedade da Apple) e registre-se para obter uma chave de API. Substitua `'SUA_CHAVE_DE_API_DARK_SKY'` no código pelo seu token de API real da Dark Sky.