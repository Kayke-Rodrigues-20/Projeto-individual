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
    
                            jogoModel.buscarAquariosPorEmpresa(cadastrarTempo[0].consoleId)
                                .then((resultadoAquarios) => {
                                    if (resultadoAquarios.length >= 0) {
                                        res.json({
                                            id: cadastrarTempo[0].id
                                            //email: cadastrarTempo[0].email,
                                            //nome: cadastrarTempo[0].nome,
                                            //senha: cadastrarTempo[0].senha,
                                            //aquarios: resultadoAquarios
                                        });
                                    } else {
                                        res.status(204).json({ aquarios: [] });
                                    }
                                })
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

module.exports = {
    inserir
}