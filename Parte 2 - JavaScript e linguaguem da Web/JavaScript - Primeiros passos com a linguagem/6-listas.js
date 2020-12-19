console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;   

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


listaDeDestinos.push(`Curitiba`); //adicionando um item a lista
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //removendo um item da lista (posição, quantidade)
console.log(listaDeDestinos);