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

function buscarJogos(idUsuario) {

  var instrucaoSql = `SELECT min(ms) as melhorDisparo FROM msTempo a JOIN usuario u ON a.fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function quantidadeDisparos(idUsuario) {
  var instrucaoSql = `SELECT count(*) as quantDisparo FROM msTempo a JOIN usuario u ON a.fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function ultimosDisparos(idUsuario, ultimos) {

    var instrucaoSql = `SELECT ms as Disparo FROM msTempo a JOIN usuario b on a.fkUsuario = ${idUsuario}
                    ORDER BY b.id DESC LIMIT ${ultimos}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
    buscarUsuarioConsole,
    buscarJogos,
    quantidadeDisparos,
    ultimosDisparos
};