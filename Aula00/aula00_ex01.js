// exemplo 01
// usando var ( escopo global/função)

var nome = "Mauricio";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}
nome = 15.8
console.log(nome);

//usando let (escopo de bloco)

let idade = 33;
console.log(idade);

if(true){
    let idade = 25;
    console.log(idade);
}
idade = "Mauricio"
console.log(idade);

// usando const ( escopo de bloco e valor constante)


const PI = 3.14;
console.log(PI);


if(true){
    const PI = 3.14159;
    console.log(PI);
}
PI = "Topicos Integradores I"
console.log(PI);