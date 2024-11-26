var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get('/geracaoPopular', function(req, res){
    dashController.geracaoPopular(req, res);
})

router.get('/totalCadastrados', function(req, res){
    dashController.totalCadastrados(req, res);
})

router.get('/plotagemGrafico', function(req, res){
    dashController.plotagemGrafico(req, res);
})

module.exports = router;