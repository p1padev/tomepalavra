// Carregar jogo

const game = new Game(arrayDePalavras)

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
const primeiroSpan = document.getElementsByName('letter1');
const segundoSpan = document.getElementsByName('letter2');
const terceiroSpan = document.getElementsByName('letter3');
const quartoSpan = document.getElementsByName('letter4');
const quintoSpan = document.getElementsByName('letter5');
const sextoSpan = document.getElementsByName('letter6');
let arrayGuess = [];
let tentativas = 0;


// Funções de resultado

function resultado(input) {
    if (game.isWon(input)) {
         alert("Uhul");
         setTimeout(() => {restart()}, 2000)}
    else if (game.isLost(input, tentativas)){
        alert (`Fim de linha, a palavra era ${game.getWord()}`);
        setTimeout(() => {restart()}, 2000)}
    else {
        alert ("Hoje não"); tentativas ++}
}

// Reiniciar

function restart(){
    location.reload();
    return false;
}

// Iniciar

game.init()

console.log(game.getWord())


// Botões

btnTestar1.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    primeiroSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar1.setAttribute("class", "no-show");
    div2.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < primeiroSpan.length; i++){
        primeiroSpan[i].setAttribute("disabled", "disabled");
        primeiroSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

btnTestar2.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    segundoSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar2.setAttribute("class", "no-show");
    div3.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < segundoSpan.length; i++){
        segundoSpan[i].setAttribute("disabled", "disabled");
        segundoSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

btnTestar3.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    terceiroSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar3.setAttribute("class", "no-show");
    div4.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < terceiroSpan.length; i++){
        terceiroSpan[i].setAttribute("disabled", "disabled");
        terceiroSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

btnTestar4.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    quartoSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar4.setAttribute("class", "no-show");
    div5.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < quartoSpan.length; i++){
        quartoSpan[i].setAttribute("disabled", "disabled");
        quartoSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

btnTestar5.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    quintoSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar5.setAttribute("class", "no-show");
    div6.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < quintoSpan.length; i++){
        quintoSpan[i].setAttribute("disabled", "disabled");
        quintoSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

btnTestar6.addEventListener('click', () => {

    // Sobe o guess para o Array;
    arrayGuess = [];
    sextoSpan.forEach((currentElement) => {arrayGuess.push(currentElement.value)});

    // Desligar botão e chamar a próxima fila
    btnTestar5.setAttribute("class", "no-show");
    div6.classList.toggle ("no-show")
    
    let cores = game.procurarPalavra(arrayGuess);

    // Trava a row atual 
    for (let i = 0; i < sextoSpan.length; i++){
        sextoSpan[i].setAttribute("disabled", "disabled");
        sextoSpan[i].setAttribute("style", `background-color: ${cores[i]}`);
    }
    
    resultado(arrayGuess);
})

// Função - Só permitir letras + Focus

function validate(arg) {
    let element = document.getElementById(arg);
    element.value = element.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+/, '')

  

    if (element.value.length == 1){
        element.nextElementSibling.focus();
    }
  };

