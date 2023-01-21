//Trabalhando com objetos 
const pessoa = {
    nome:'Mariana',
    idade: 25,
    profissão: 'desenvolvedora'
}

const andre: {nome:string, idade: number, profissao:string} = {
    nome: 'andre',
    idade: 25,
    profissao: 'Pintor'
}
    
//patronizar o tipo profissao 

enum profissao{
    "Desenvolvedor",
    'Pintor',
    'Analista TI'
}

const lohan = {
    nome: 'Lohan',
    idade: 27,
    profissao: profissao.Desenvolvedor
}

interface ipessoa {
    nome: string,
    idade: number,
    profissao: profissao
}

interface estudante extends ipessoa {
    materias: string[]
}

const pessoacomum: ipessoa = {
    nome: 'João',
    idade: 52,
    profissao: profissao.Pintor
}

const aluno: estudante ={
    nome: 'Aluno',
    idade: 52,
    profissao: profissao.Pintor,
    materias: ['matemática', 'algoritimos']
}

function listarMaterias(lista: string[]) {
    for(const materia of lista) {
        console.log('-', materia);
    }
}

listarMaterias(aluno.materias)