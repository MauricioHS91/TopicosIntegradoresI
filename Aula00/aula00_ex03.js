// Exemplo 03: Classes

class Animal {
    constructor (nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}
    const cachorro = new Animal ("Joca", "cachorro");
    const gato = new Animal ("Samuca", "gato");

    console.log(cachorro.exibirInformacoes());
    console.log(gato.exibirInformacoes());

