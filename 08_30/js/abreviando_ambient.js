'use strict';

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5002'
];


function ambientais(segundonome) {
    const partes = segundonome.split('-');
    return partes.splice(-2).join('-');
}


const ultinomes = new Array(ambientes.length);


for (let i = 0; i < ambientes.length; i++) {
    const ambiente = ambientes[i];
    ultinomes[i] = ambientais(ambiente);
}

console.log(ultinomes);