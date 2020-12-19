console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;   

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo um item da lista (posição, quantidade)
// } else if (estaAcompanhada == true){
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1); //removendo um item da lista (posição, quantidade)
// } else {
//         console.log("Não é maior de idade, nao é possivel vender.");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Boa Viagem`);
    listaDeDestinos.splice(2,1); //removendo um item da lista (posição, quantidade)
    console.log(listaDeDestinos);
}  else {
        console.log("Não é maior de idade, nao é possivel vender.");
}

console.log(`Embarque: \n \n`);
if(idadeComprador >= 18 && temPassagemComprada == true) {
    console.log(`Boa Viagem`);
} else {
    console.log(`Você não pode embarcar`);
}

