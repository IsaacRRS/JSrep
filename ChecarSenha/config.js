var senha = document.getElementById("senhaID");

var mensagem = document.getElementById("mensagemID"); 

var span = document.getElementById("spanID");

senha.addEventListener('input', () => {

    if(senha.value.length > 0) {

        mensagem.style.display = 'block'; // caso haja senha (através do método de verificar se seu tamanho é > 0), muda o display à fim de tonar visível

    }
    else {

        mensagem.style.display = 'none'; // senão, oculta

    }


    if(senha.value.length <= 4) {  // caso a senha tenha até 4 caracteres, é acrescentado 'fraca' no texto do elemento span

        span.innerHTML = "fraca.";
        mensagem.style.color = "#ff4824" // muda a cor do texto para vermelho

    }
    else if(senha.value.length > 4 && senha.value.length <= 9) {

        span.innerHTML = "razoável."; // caso a senha tenha 5-9 caracteres, é acrescentado 'razoável' no texto do elemento span
        mensagem.style.color = "#e4eb28" // muda o texto para a cor amarela
    }
    else {

        span.innerHTML = "forte." // caso a senha tenha mais de 9 caracteres, é acrescentado 'fraca' no texto do elemento span
        mensagem.style.color = "#3dba1a" // muda a cor do texto para verde
    }


})