
var cursos = [
    {
        "nome": "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla": "DS",
        "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga": "1200",
    },
    {
        "nome": "002 - Técnico em Redes de Computadores",
        "sigla": "RDS",
        "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga": "1200"
    }
];
/* 
     Projeto: Construir API para a escola 'Lion School'
     Autor: Ítalo Reis Rosa da Silva
     Versão: 1.0
     Data Início: 27/03/2023
 */

//Recupera uma lista de todos os cursos oferecidos pela escola.
const getCursos = () => {
    return { cursos }
}



module.exports = {
    getCursos
}
