const express = require('express');

const app = express();

// o que conseguimos pegar pelo 'req' = parâmetros, corpo da requisição, cabeçalho da requisição, usuário que faz a requisição, se o usuário está ou não autenticado, todos os tipos de informações que estão na requisição, IP, ...etc;

// o 'res' tem a ver com a resposta que vamos dar com a partir da requisição;
app.get('/', (req, res) => {
  res.send("Hello DUDE");
});

app.listen(3001);