var jogoModel = require("../models/jogoModel");

function inserir(req, res){
    var tempo = req.body.segundosServer;
    var fkUsuario = req.body.fkUserServer;


    if (tempo == undefined) {
            res.status(400).send("Sem valor");
        } else {
    
            jogoModel.inserir(tempo, fkUsuario)
                .then(
                    function (cadastrarTempo) {
                        console.log(`\nResultados encontrados: ${cadastrarTempo.length}`);
                        console.log(`Resultados: ${JSON.stringify(cadastrarTempo)}`); // transforma JSON em String
    
                        if (cadastrarTempo.length == 1) {
                            console.log(cadastrarTempo);
    
                        } else if (cadastrarTempo.length == 0) {
                            res.status(403).send("Tempo inválido");
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

function buscarJogos(req, res) {
    var idUsuario = req.params.idUsuario;

    jogoModel.buscarJogos(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
    console.log(erro);
    console.log("Erro ao buscar disparos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function quantidadeDisparos(req, res) {
    var idUsuario = req.params.idUsuario;

    jogoModel.quantidadeDisparos(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
    console.log(erro);
    console.log("Erro ao buscar disparos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function ultimosDisparos(req, res) {

    const ultimos = 10

    var idUsuario = req.params.idUsuario;

    jogoModel.ultimosDisparos(idUsuario, ultimos).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("nothings new");
        }
    }).catch(function (erro) {
    console.log(erro);
    console.log("Erro ao buscar disparos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function buscarDisparos(req, res) {

    var idUsuario = req.params.idUsuario;

    jogoModel.buscarDisparos(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("nada");
        }
    }).catch(function (erro) {
    console.log(erro);
    console.log("Erro ao buscar disparos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function atualizarGrafico(req, res){
    var idUsuario = req.params.idUsuario;

    jogoModel.atualizarGrafico(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("nada");
        }
    })
}

module.exports = {
    inserir,
    buscarJogos,
    quantidadeDisparos,
    ultimosDisparos,
    buscarDisparos,
    atualizarGrafico
}