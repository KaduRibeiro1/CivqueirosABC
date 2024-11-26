var express = require("express");
var router = express.Router();

var carroController = require("../controllers/carroController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    carroController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    carroController.autenticar(req, res);
});

router.get('/buscarDados/:cor', function(req, res){
    carroController.buscarDados(req, res);
})

module.exports = router;