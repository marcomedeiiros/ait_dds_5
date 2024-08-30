'use strict';

const instrutores = [
    'Gabriel Da Silva Souza',
    'Pietro Hangel Da Silva',
    'Deivid Da Silva Dos Santos',
    'Ana Julia Pereira Santos',
    'Sarah Duque Da Silva',
    'Isac Abravanel Santos',
    'Aymar Antônio Da Silva',
    'Matheus Pereira Da Silva',
    'João Vitor Da Silva',
    'Heloisa Rangel Da Silva',
    'Daniel Silva Pereira',
    'Emanoel Da Silva Pereira',
    'Amanda Da Silva Santos',
    'Samara Da Silva Ribeiro',
    'Marco pinto da silva'
];

for (let i = 0; i < instrutores.length; i++) {

    const piece = instrutores[i].split(' ');


    const primarykey = piece[0];


    const name = piece[piece.length - 1];


    console.log(primarykey + ' ' + name);
}