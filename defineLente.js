var prime = document.getElementById('prime');
var vision = document.getElementById('vision');
var grausEsfericos = document.getElementsByClassName(".grauEsferico");
var grausCilindricos = document.getElementsByClassName(".grauCilindrico");


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(validaDados()){
        console.log("Ok")

        var titulo = document.querySelector(".tituloSecundario");

        titulo.textContent = "Essa é a lente recomendada para você:";
        
        if(confereEsfericosSemCilindrico()){
            retornaImagensProdutos()
            vision.classList.add("invisivel"); 
            return;  
        } 

        if(confereEsfericosComCilindrico()){
            retornaImagensProdutos()
            vision.classList.add("invisivel"); 
            return;
        };

       if(confereCilindricosVision()){
           retornaImagensProdutos()
           prime.classList.add("invisivel"); 
           return;
       }

       return informaProdutoIndisponivel();    
        
    }     
});


function informaProdutoIndisponivel(){
    vision.classList.add("invisivel"); 
    prime.classList.add("invisivel"); 
    alert("Infelizmente, a lente que precisa não está disponível");
}

function retornaImagensProdutos(){
    vision.classList.remove("invisivel");
    prime.classList.remove("invisivel");
}











