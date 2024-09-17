let icone = document.getElementById("iconeID");  // armazenar o elemento com ID 'iconeID'
let senha = document.getElementById("senhaID");  // armazenar o elemento com ID 'senhaID'

icone.onclick = function() { // assim que o ícone for clicado..

    if(senha.type === "password") { // caso o tipo do elemento atribuído à variável 'senha' seja 'password' 

        senha.type = "text"; // seu tipo é trocado por 'text', mostrando o conteúdo da senha
        icone.classList.remove("bi-eye-slash"); // alteração de ícone 
        icone.classList.add("bi-eye");

    } else {

        senha.type = "password"; // caso o tipo já tenha sido mudado para 'text', voltará para 'password' caso seja novamente clicado
        icone.classList.remove("bi-eye"); // alteração de ícone 
        icone.classList.add("bi-eye-slash");
        
    }
}