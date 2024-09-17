var senha = document.getElementById("senhaID");

var mensagem = document.getElementById("mensagemID");

var span = document.getElementById("spanID");

senha.addEventListener('input', () => {

    if(senha.value.length > 0) {

        mensagem.style.display = 'block';

    }
    else {

        mensagem.style.display = 'none';

    }


    if(senha.value.length <= 4) {

        span.innerHTML = "fraca.";
        mensagem.style.color = "#ff4824"

    }
    else if(senha.value.length > 4 && senha.value.length <= 9) {

        span.innerHTML = "razoável.";
        mensagem.style.color = "#e4eb28"
    }
    else {

        span.innerHTML = "forte."
        mensagem.style.color = "#3dba1a"
    }


})