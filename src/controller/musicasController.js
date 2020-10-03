//  Passo a passo para não esquecer: 
//1: Importar o JSON de musicas
//2: Criar métodos para buscar todas as musicas
//3: Exportar o método

const musicas = require('../model/musicas.json');
// const artistas = require('../model/artistas.json')

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o Json
    res.status(200).send(musicas);
}

// passo a passo
//1: Criar método getByID
//2: Retornar o item daquele ID 

const getByID = (req, res) => {
    const id = req.params.id

    // método find retorna o primeiro elemento que passa na condição

    const musicaFiltrada = musicas.find(musica => musica.id == id)
    res.status(200).send(musicaFiltrada)
}

//1: Criar método getAllArtistas
//2: Filtrar lista de músicas por artistas

// const getAllArtistas = (req, res) => {
//     res.status(200).send(artistas)
// }

const getByArtista = (req, res) => {
    const artista = req.params.artista
    const artistaFiltrado = artistas.filter((a) => a.nome == artista)
    res.status(200).send(artistaFiltrado);
}

//1. Criar método GetAllArtista
//2. Retornar somente o nome dos artistas da lista de musicas
//pega somente os atistas da lista musica.json

const getAllArtistas = (req, res) => {
    const artistas = musicas.map((musica) => musica.artista)
    res.status(200).send(artistas)
}
module.exports = { getAll, getByID, getAllArtistas, getByArtista }