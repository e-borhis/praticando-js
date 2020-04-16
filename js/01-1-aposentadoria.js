// Aposentadoria

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const anos_contribuicao = idade + contribuicao;

// Condição para Homens
const aposentadoriaMas = (sexo == 'M' && contribuicao >= 35 && anos_contribuicao >= 95);

// Condição para Mulheres
const aposentadoriaFem = (sexo == 'F' && contribuicao >= 30 && anos_contribuicao >= 85); 

if (aposentadoriaMas || aposentadoriaFem) {
    let msg = (`${nome}, você pode se aposentar!`);
} else {
    msg = (`${nome}, você não pode se aponsentar!`)
}

console.log(msg);