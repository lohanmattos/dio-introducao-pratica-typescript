"use strict";
//Trabalhando com objetos 
const pessoa = {
    nome: 'Mariana',
    idade: 25,
    profissão: 'desenvolvedora'
};
const andre = {
    nome: 'andre',
    idade: 25,
    profissao: 'Pintor'
};
//patronizar o tipo profissao 
var profissao;
(function (profissao) {
    profissao[profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    profissao[profissao["Pintor"] = 1] = "Pintor";
    profissao[profissao["Analista TI"] = 2] = "Analista TI";
})(profissao || (profissao = {}));
const lohan = {
    nome: 'Lohan',
    idade: 27,
    profissao: profissao.Desenvolvedor
};
const pessoacomum = {
    nome: 'João',
    idade: 52,
    profissao: profissao.Pintor
};
const aluno = {
    nome: 'Aluno',
    idade: 52,
    profissao: profissao.Pintor,
    materias: ['matemática', 'algoritimos']
};
function listarMaterias(lista) {
    for (const materia of lista) {
        console.log('-', materia);
    }
}
listarMaterias(aluno.materias);
