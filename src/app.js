// passo a passo 
//1: Importar o express
//2: Declarar a variavel app atribuindo o express
//3: Importar a rota
//4: usar a rota criada
//5: exportar o app


const express = require('express');
const app = express();

const musicas = require('./routes/musicasRoutes');

app.use('/', musicas);

// 
app.get('*', (req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname})
})

module.exports = app
