function confereCilindricoZerado(){
    if(cilindricoDireito.value == 0 && cilindricoEsquerdo.value == 0){
        return true;
    }
}

function confereEsfericoDireitoSemCilindrico(){    
    if(esfericoDireito.value <= -3 && esfericoDireito.value >= -12){
        return true;
    }
}

function confereEsfericoEsquerdoSemCilindrico(){    
    if(esfericoEsquerdo.value <= -3 && esfericoEsquerdo.value >= -12){
        return true;
    }
}

function confereEsfericosSemCilindrico(){
    if(confereEsfericoEsquerdoSemCilindrico() && confereEsfericoDireitoSemCilindrico() && confereCilindricoZerado()){
        return true;
    }
}

function confereEsfericoDireitoComCilindrico(){    
    if(esfericoDireito.value <= -3 && esfericoDireito.value >= -10){
        return true;
    }
}

function confereEsfericoEsquerdoComCilindrico(){    
    if(esfericoEsquerdo.value <= -3 && esfericoEsquerdo.value >= -10){
        return true;
    }
}

function confereCilindricoDireitoPrime(){
    if( cilindricoDireito.value >= -2){
        return true;
    }
}

function confereCilindricoEsquerdoPrime(){
    if( cilindricoEsquerdo.value >= -2){
        return true;
    }
}

function confereCilindricosPrime(){
    if (confereCilindricoDireitoPrime() && confereCilindricoEsquerdoPrime()){
        return true;
    }
}


function confereEsfericosComCilindrico(){
    if (confereEsfericoEsquerdoComCilindrico() && confereEsfericoDireitoComCilindrico() && confereCilindricosPrime()){
        return true;
    }
}