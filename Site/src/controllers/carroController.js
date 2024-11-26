var usuarioModel = require("../models/carroModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var modelo = req.body.modeloServer;
    var geracao = req.body.geracaoServer;
    var ano = req.body.anoServer;
    var cor = req.body.corServer;
    var codigo = req.body.codigoServer;

    if (modelo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (ano == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(modelo, geracao, ano, cor, codigo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDados(req, res) {
    var cor = req.params.cor
    carroModel.buscarDados(cor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    autenticar,
    cadastrar,
    buscarDados
}
