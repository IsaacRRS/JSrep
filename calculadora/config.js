
function adicionar(value) { 
    document.querySelector('input[name="resultado"]').value += value;
}

function limpar() { 
    document.querySelector('input[name="resultado"]').value = '';
}

function remover() { 
    let resultado = document.querySelector('input[name="resultado"]').value; 
    document.querySelector('input[name="resultado"]').value = resultado.slice(0, -1); 
}

function Fresultado() { // calcular resultado
    let resultado = document.querySelector('input[name="resultado"]').value;
    try {
        document.querySelector('input[name="resultado"]').value = eval(resultado); 
    } catch (e) {
        document.querySelector('input[name="resultado"]').value = 'Erro';
    }
}

document.addEventListener('DOMContentLoaded', () => { 



    document.querySelector('input[value="AC"]').addEventListener('click', limpar);   
    document.querySelector('input[value="DE"]').addEventListener('click', remover);  

    document.querySelector('input[value="."]').addEventListener('click', () => adicionar('.'));
    document.querySelector('input[value="/"]').addEventListener('click', () => adicionar('/'));
    document.querySelector('input[value="7"]').addEventListener('click', () => adicionar('7'));
    document.querySelector('input[value="8"]').addEventListener('click', () => adicionar('8'));
    document.querySelector('input[value="9"]').addEventListener('click', () => adicionar('9'));
    document.querySelector('input[value="*"]').addEventListener('click', () => adicionar('*'));
    document.querySelector('input[value="4"]').addEventListener('click', () => adicionar('4'));  
    document.querySelector('input[value="5"]').addEventListener('click', () => adicionar('5'));
    document.querySelector('input[value="6"]').addEventListener('click', () => adicionar('6'));
    document.querySelector('input[value="-"]').addEventListener('click', () => adicionar('-'));
    document.querySelector('input[value="1"]').addEventListener('click', () => adicionar('1'));
    document.querySelector('input[value="2"]').addEventListener('click', () => adicionar('2'));
    document.querySelector('input[value="3"]').addEventListener('click', () => adicionar('3'));
    document.querySelector('input[value="+"]').addEventListener('click', () => adicionar('+'));
    document.querySelector('input[value="00"]').addEventListener('click', () => adicionar('00'));
    document.querySelector('input[value="0"]').addEventListener('click', () => adicionar('0'));

    document.querySelector('input[class="igual"]').addEventListener('click', Fresultado); 

});
