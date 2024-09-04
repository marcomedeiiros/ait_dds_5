'use strict';

function Turmas(turminhas){
    const turma = new turma(turminhas);
    const turmes = turma.toLocaleTimeString('pt-br');
    return turma;

}

export default Turmas;