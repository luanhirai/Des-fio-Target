//EXERCICIO 1 ####################################################################

function fibonacci(num){
    let a=0, b=1;
    const vet= new Set([a,b]);

    while(b<=num){
        [a,b]=[b,a+b];
        vet.add(b);
    }

    return vet;
}


function pertence() {
    let num = parseInt(document.getElementById("ex1").value);
    const pertence = fibonacci(num);
    const resultadoDiv = document.getElementById("resultado1");

    if (isNaN(num)) {
        resultadoDiv.innerHTML = "Por favor, digite um número válido.";
    } else {
        resultadoDiv.innerHTML = pertence.has(num) ? `${num} pertence a sequência` : `${num} não pertence`;
    }
}


//EXERCICIO 2 ####################################################################

function VerificaA(frase){
    let i=0, qtd=0;
    const vetA=['A','a','á','à','ã','â','Á','À','Â','Ã'];
    while(i<frase.length){
        if(vetA.includes(frase[i]))
            qtd++;
        i++;
    }
    return qtd;
}

function ex2(){
    let qtd=0;
    let frase=document.getElementById("ex2").value;
    qtd=VerificaA(frase);
    
    const result= document.getElementById("resultado2")
    if(qtd==0)
        resultado2.innerHTML="Não tem letra A na frase!";
    else
        resultado2.innerHTML=`A letra A aparece ${qtd} vezes`
    
}

//alert(`Na palavra/frase tem escrito ${qtd} vezes a letra A`)

//EXERCICIO 3 ####################################################################


function ex3() {
    let INDICE = 12, SOMA = 0, K = 1; 
    while (K < INDICE) {
        K=K+1;
        SOMA=SOMA+K;
    }
    let resultado3=document.getElementById("resultado3");
    resultado3.innerHTML=`O valor final da variavel SOMA é ${SOMA}`;
}
