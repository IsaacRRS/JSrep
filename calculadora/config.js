function adicionar(value) { // adicionar número ao campo
    document.querySelector('input[name="resultado"]').value += value;
}

function limpar() { // limpar todos os números do campo, definindo como string vazia
    document.querySelector('input[name="resultado"]').value = '';
}

function remover() { // remover o último número inserido

    let resultado = document.querySelector('input[name="resultado"]').value; // obter o valor do input 'resultado' para então remover a última posição da string
    document.querySelector('input[name="resultado"]').value = resultado.slice(0, -1); // neste caso, o último número que foi inserido
    
}
function Fresultado() { // calcular resultado

    let resultado = document.querySelector('input[name="resultado"]').value;
    try {
        document.querySelector('input[name="resultado"]').value = eval(resultado); // avalia a expressão; em caso de erro é imprimido 'Erro'
    } catch (e) {
        document.querySelector('input[name="resultado"]').value = 'Erro';
    }
}

document.addEventListener('DOMContentLoaded', () => { // eventos só serão adicionados após o DOM (o browser carregou o HTML) carregar 

// adiciona EventListener para os botões (gatilhos para execução do código)

    document.querySelector('input[value="AC"]').addEventListener('click', limpar);   // chama a função 'limpar' ao clicar
    document.querySelector('input[value="DE"]').addEventListener('click', remover);  // chama a função 'remover' ao clicar

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

    document.querySelector('input[class="igual"]').addEventListener('click', Fresultado); // chama a função 'Fresultado'

});