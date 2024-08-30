'use strict';

let municipios = ['Serra', 'Cariacica', 'Vila Velha', 'Viana', 'Vitória', 'Guarapari'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

// removendo dois elementos a partir do elemento 1
municipios.splice(1, 2);
console.log(municipios);

// removendo dois elementos no final
municipios.splice(-2, 1);
console.log(municipios);

// juntar um array usamos o join e podemos definir o separador
let texto = municipios.join('-');

console.log(texto);