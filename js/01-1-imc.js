// Cálculo de IMC

const nome = "Ecthon";
const peso = 84;
const altura = 1.88;

let msg = "";

const imc = (peso / (altura * altura));

if (imc >= 30) {
    msg = (`${nome}, você está acima do peso.` );
} else {
    msg = (`${nome}, você está abaixo do peso.` );
}

console.log(msg);