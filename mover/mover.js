let escolhido = null; // variável para armazenar item arrastado

document.querySelectorAll('.item').forEach(item => { // evento dragstart à classe 'item'

    item.addEventListener('dragstart', function(e) { // aciona quando um item for arrastado

        escolhido = e.target; // armazena o item arrastado 
        
    });

});

function Arrastar(e) { // função chamada quando o item é arrastado 

    e.preventDefault(); // previnir o padrão de 'dragover' para permitir que o item seja solto

}

function Soltar(e) { // função chamada quando o item é solto

    e.preventDefault(); // previnir o padrão de 'drop'

    if (escolhido) { // caso o item não for nulo (se há item arrastado)

    e.target.appendChild(escolhido); // adiciona o item ao alvo 
    escolhido = null; // limpa a variável para que um próximo item possa ser arrastado

    }

}

// a classe 'soltar' recebe 'dragover' e 'drop'
document.querySelectorAll('.soltar').forEach(caixa => {

    caixa.addEventListener('dragover', Arrastar);

    caixa.addEventListener('drop', Soltar);

    });