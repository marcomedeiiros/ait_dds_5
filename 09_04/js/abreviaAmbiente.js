'use strict';

export default function abreviaAmbiente(ambiente) {
    const partes = ambiente.split('-').filter(part => part.trim() !== 'VTRIA');
    if (partes.length > 1) {
        return partes.slice(1).join('-').trim();
    }
    return '';
}