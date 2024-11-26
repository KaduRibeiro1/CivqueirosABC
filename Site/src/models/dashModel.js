var database = require("../database/config")

function geracaoPopular() {
    var instrucaoSql = `SELECT geracao, COUNT(*) AS numeroDeCarros FROM carro GROUP BY geracao ORDER BY numeroDeCarros DESC LIMIT 1;`
    return database.executar(instrucaoSql);
}

function totalCadastrados() {
    var instrucaoSql = `SELECT COUNT(*) AS totalDeCarros FROM carro;`

    return database.executar(instrucaoSql);
}

function plotagemGrafico() {
    var instrucaoSql = `select count(geracao) as qtdGeracao, geracao from carro group by geracao;`

    return database.executar(instrucaoSql);
}

module.exports = {
    geracaoPopular,
    totalCadastrados,
    plotagemGrafico
};