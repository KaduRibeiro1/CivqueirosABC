var dashModel = require("../models/dashModel");

function geracaoPopular(req, res) {
        dashModel.geracaoPopular()
            .then(
                function (resultadoAutenticar) {
                    res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function totalCadastrados(req, res) {
        dashModel.totalCadastrados()
            .then(
                function (resultadoAutenticar) {
                    res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function plotagemGrafico(req, res) {
        dashModel.plotagemGrafico()
            .then(
                function (resultadoAutenticar) {
                    res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    geracaoPopular,
    totalCadastrados,
    plotagemGrafico
}