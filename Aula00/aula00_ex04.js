// Função que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidades.`;
}

const produto1 = {
    nome: "Iphone 15",
    preco:5000.9999,
    estoque: 100
}

const produto2 = {
    nome: "Ipad 10",
    preco: 3200.5049,
    estoque:50
}

console.log(exibirInfoProdutos(produto1));
console.log(exibirInfoProdutos(produto2));
