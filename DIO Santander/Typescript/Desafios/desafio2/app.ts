// Como podemos melhorar o esse código usando TS? 

enum Trabalho
{
    Atriz,
    Padeiro
}

interface IPessoa
{
    nome: string;
    idade: number;
    profissao: Trabalho;
}

let pessoa1 = {} as IPessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz;

let pessoa2 = {} as IPessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Padeiro;

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Trabalho.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};