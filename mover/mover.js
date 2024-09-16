let escolhido = null; 

document.querySelectorAll('.item').forEach(item => {

    item.addEventListener('dragstart', function(e) {

        escolhido = e.target;
        
    });

});

