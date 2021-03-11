
var form = document.getElementById('dadosReceita');
var esfericoEsquerdo = document.getElementById('esfericoEsquerdo');
var esfericoDireito = document.getElementById('esfericoDireito');
var cilindricoEsquerdo = document.getElementById('cilindricoEsquerdo');
var cilindricoDireito = document.getElementById('cilindricoDireito');


function validaDados(){
    
    if(esfericoEsquerdo.value > 0 || esfericoEsquerdo.value < -15){
        alert("Grau esférico esquerdo é inválido");
        return false;
    } 
    
    if(esfericoEsquerdo.value % 0.25 != 0){
        alert("Grau esférico esquerdo não existe!");
        return false;
    } 
    
    if(esfericoDireito.value > 0 || esfericoDireito.value < -15){
        alert("Grau esférico direito é inválido");
        return false;
    } 
    
    if(esfericoDireito.value % 0.25 != 0){
        alert("Grau esférico direito não existe!")
        return false;
    } 
    
    if(cilindricoEsquerdo.value > 0 || cilindricoEsquerdo.value < -6){
        alert("Grau cilíndrico esquerdo é inválido")
        return false;
    } 
    
    if(cilindricoEsquerdo.value % 0.25 != 0){
        alert("Grau cilíndrico esquerdo não existe!")
        return false;
    } 
    
    if(cilindricoDireito.value > 0 || cilindricoDireito.value < -6){
        alert("Grau cilíndrico direito é inválido")
        return false;
    } 
    
    if(cilindricoDireito.value % 0.25 != 0){
        alert("Grau cilíndrico direito não existe!")
        return false;
    } 
        
    return true;
};


