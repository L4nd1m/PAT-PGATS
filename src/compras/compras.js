function calcularTotal(ferramentas,comprar){

    let total = 0.00
    let adquiridos = []

    if(ferramentas.length == 0 || comprar.length == 0){
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    for (let i=0; i<ferramentas.length; i++){
        for(let k=0; k<comprar.length; k++){
            if(ferramentas[i].nome === comprar[k]){
                total += ferramentas[i].preco
                adquiridos.push(ferramentas[i].nome)
            }
        }
    }

    if (adquiridos.length < 1)
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    
    return `O valor a pagar pelas ferramentas (${adquiridos.join(", ")}) é R$ ${total.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}