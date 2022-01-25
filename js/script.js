// Carregar jogo

const game = new Game(arrayDePalavras);

// DOM

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const btnTestar1 = document.getElementById('botaoTeste1');
const btnTestar2 = document.getElementById('botaoTeste2');
const btnTestar3 = document.getElementById('botaoTeste3');
const btnTestar4 = document.getElementById('botaoTeste4');
const btnTestar5 = document.getElementById('botaoTeste5');
const btnTestar6 = document.getElementById('botaoTeste6');

// Acompanhar o número de tentativas para checar o resultado

let tentativas = 0;

// Funções do jogo

function resultado(input) {
    if (game.isWon(input)) {
         alert("Uhul");
         setTimeout(() => {restart()}, 1000)}
    else if (game.isLost(input, tentativas)){
        alert (`Fim de linha, a palavra era ${game.getWord().join("")}`);
        setTimeout(() => {restart()}, 1000)}
    else {tentativas ++}
}

function restart(){
    location.reload();
    return false;
}

game.init();

console.log(game.getWord());

// Função de puxar o input, testar, mudar as cores, travar a row

function puxar (id){
    let span = document.getElementsByName(`${id}`); // Informo através da classe do botão o Id para puxar os inputs;
    let arrayGuess = [];
    arrayGuess = [];

    span.forEach((currentElement) => {arrayGuess.push(currentElement.value)}); // Passa para o array cada letra;

    if (checar(arrayGuess) === true){

    let cores = game.procurarPalavra(arrayGuess); // Compara no game.js a palavra e informa o retorno visual;

    for (let i = 0; i < span.length; i++){ // Mudanças visuais
        span[i].setAttribute("disabled", "disabled");
        span[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    resultado (arrayGuess) // Checar vitória
    return true} 

    else {return false}

}

function checar(arrayGuess){
        for (let i=0; i < arrayGuess.length; i++){
            if(arrayGuess[i] === "")   
               return false;
        }
        return true;
     }


// Botões

btnTestar1.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){ // Função mestre
    btnTestar1.setAttribute("class", "no-show"); // Desligar botão e chamar a próxima fila
    btnTestar2.classList.toggle ("no-show")
    div2.classList.toggle ("no-show");}
    else alert ("Erro - preencha todas as letras")
})

btnTestar2.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){
    btnTestar2.setAttribute("class", "no-show");
    btnTestar3.classList.toggle ("no-show")
    div3.classList.toggle ("no-show");}
    else alert ("Erro - preencha todas as letras")
})

btnTestar3.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){
    puxar (event.target.classList[0]);
    btnTestar3.setAttribute("class", "no-show");
    btnTestar4.classList.toggle ("no-show")
    div4.classList.toggle ("no-show")}
    else alert ("Erro - preencha todas as letras")
})

btnTestar4.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){
    btnTestar4.setAttribute("class", "no-show");
    btnTestar5.classList.toggle ("no-show");
    div5.classList.toggle ("no-show");}
    else alert ("Erro - preencha todas as letras")
})

btnTestar5.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){
    btnTestar5.setAttribute("class", "no-show");
    btnTestar6.classList.toggle ("no-show")
    div6.classList.toggle ("no-show");}
    else alert ("Erro - preencha todas as letras")
})

btnTestar6.addEventListener('click', (event) => {
    if (puxar (event.target.classList[0]) === true){
    btnTestar6.setAttribute("class", "no-show");
    div6.classList.toggle ("no-show");}
    else alert ("Erro - preencha todas as letras")
})

// Função - Só permitir letras + Focus

function validate(arg) {
    let element = document.getElementById(arg);
    element.value = element.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+/, '');
    if (element.value.length == 1){
        element.nextElementSibling.focus();
    }
  }

// Habilitar o enter

document.addEventListener('keydown', (event) =>{
    let botaovisivel = Array.from(document.getElementsByTagName('button')).filter(style =>
        window.getComputedStyle(style).getPropertyValue('display') != 'none');
        
    if (event.key === 'Enter') {
      // Trigger the button element with a click
      botaovisivel[0].click();
    }
  });

