'use strict';

export default function abreviaUnidadeCurricular(unidade_curricular) {
    const partes = unidade_curricular.split(' ');

    if (partes.length > 2) {
        const primeiro = partes[0];
        const antepenultimo = partes[partes.length - 3];
        return `${primeiro} ${antepenultimo}`;
    }

    return unidade_curricular;
}