let saltoS = document.getElementById("salto"); // definir uma variável para o elemento com ID 'salto'

function saltar () { // adicionar os estilos da classe 'animação' (efeitos visuais do popup)
    saltoS.classList.add("animacao");
}

function voltar () {
    saltoS.classList.remove("animacao"); // remove a classe 'animacao'
}