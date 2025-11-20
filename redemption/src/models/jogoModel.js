var database = require("../database/config")

function inserir(tempo, fkUsuario){
    var instrucaoSql = `
            INSERT INTO msTempo (ms, fkUsuario) VALUES ('${tempo}', '${fkUsuario}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function buscarUsuarioConsole(consoleId) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE fk_console = ${consoleId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarJogos(idUser) {

  var instrucaoSql = `SELECT ms FROM msTempo a JOIN usuario u WHERE a.fkUsuario = ${idUser}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
    buscarUsuarioConsole,
    buscarJogos
};