import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Cristiano", 35097691806);
const cliente2 = new Cliente("Gabrielle", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente1);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
