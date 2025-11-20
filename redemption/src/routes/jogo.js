var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserir", function (req, res) {
    jogoController.inserir(req, res);
})

router.get("/jogo/buscarJogos", function (req, res){
  jogoController.buscarJogos(req, res)
})

/*function buscarUsuarioConsole(consoleId) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE fk_console = ${consoleId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}*/

module.exports = router;