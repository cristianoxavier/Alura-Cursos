console.log(` \nTrabalhando com listas`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = `São Paulo`;

console.log(" \n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log(`Destino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log(`Boa Viagem!`);
} else {
    console.log(`Desculpe, tivemos um erro.`);
}



for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}