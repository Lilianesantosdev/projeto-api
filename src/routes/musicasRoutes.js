const { Router } = require("express");
// passo a passo
//1: importar o Express
//2: Importar o Router
//3: Importar o Controller
//4: Criar a rota que traz todos os itens
//5: Exportar o router

const express = require ("express");
const route = express.Router();
const controller = require('../controller/musicasController');

//tema MUSICA
//FILTRO ARTISTAS

route.get('/musicas', controller.getAll);
route.get('/artistas', controller.getAllArtistas);
route.get('/:id', controller.getByID);
route.get('/artista/:artista', controller.getByArtista);
route.get('/artistas',controller.getAllArtistas)

module.exports = route