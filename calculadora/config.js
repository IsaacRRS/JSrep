
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

