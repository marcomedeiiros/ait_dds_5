'use strict';

export default function abreviaInstrutor(instrutor) {
    const nomes = instrutor.split(' ');
    if (nomes.length === 0) {
        return '';
    }

    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];

    return `${primeiroNome} ${ultimoNome}`;
}