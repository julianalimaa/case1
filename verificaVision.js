function confereCilindricoDireitoVision(){
    if (cilindricoDireito.value >= -5){
        return true;
    }
}

function confereCilindricoEsquerdoVision(){
    if (cilindricoEsquerdo.value >= -5){
        return true;
    }
}

function confereCilindricosVision (){
    if (confereCilindricoDireitoVision() && confereCilindricoEsquerdoVision()){
        return true;
    }
}