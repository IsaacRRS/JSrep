let escolhido = null; 

document.querySelectorAll('.item').forEach(item => {

    item.addEventListener('dragstart', function(e) {

        escolhido = e.target;
        
    });

});

function Arrastar(e) {

    e.preventDefault();

}

function Soltar(e) {

    e.preventDefault();

    if (escolhido) {

    e.target.appendChild(escolhido);
    escolhido = null;

    }

}

  
document.querySelectorAll('.soltar').forEach(caixa => {

    caixa.addEventListener('dragover', Arrastar);

    caixa.addEventListener('drop', Soltar);

    });