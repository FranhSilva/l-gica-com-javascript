alert("Bem vindo ao jogo do número secreto, vamos começar?");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto){
    alert(`Parabéns, você descobriu o número secreto (${numeroSecreto})`);
} else{
    alert("Você errou :(");
}