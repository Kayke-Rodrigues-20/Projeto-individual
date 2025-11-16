var database = require("../database/config")

function inserir(tempo, fkUsuario){
    var instrucaoSql = `
            INSERT INTO msTempo (ms, fkUsuario) VALUES ('${tempo}', '${fkUsuario}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    inserir
};