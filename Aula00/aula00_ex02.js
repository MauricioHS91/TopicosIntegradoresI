// exemplo 2
//funcao simples

function saudacao(nome){
    return "Olá, " + nome + " ! ";
}

console.log(saudacao("34"));

//Funcao anonima()

const soma = function (a,b){
    return a + b;
}
console.log(soma(10,15));

console.log(soma("Rafael ","Marinho"));

// Arrow Fuction ( função de seta)
const multiplicacao = (x,y) => x*y;
console.log(multiplicacao(5,6));

// objeto em javascript
const pessoa = {
    nomeUsuario: "Mauricio Hansen",
    idade:33,
    email: "hansen.simoes@hotmail.com",
    usuario: "Aluno",
    saudar: function(){
        return "Oi, meu nome é " +this.nomeUsuario + " e eu sou um "+ this.usuario + ".";
    }
}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());
