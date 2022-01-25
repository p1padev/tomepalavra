class Game {
    constructor (database){
        this.database = database;
        this.palavra = "";
        this.numero = 0;
    }

    init(){
        this.numero = this.gerarNumero(this.database.length);
        this.palavra = this.database[this.numero].split("");
    }

    getWord(){
        return this.palavra
    }

    gerarNumero(interval) {
        return Math.floor(Math.random() * interval)
    }

    isWon (input){
        return this.palavra.join("") === input.join("")
    }

    isLost (input){
      return tentativas === 6 && !game.isWon(input)
    }

    procurarPalavra (input) {
        const result = [];
        for (let i = 0; i < input.length; i++) {
            let inputLetter = input[i].toLowerCase();
            let wordLetter = this.palavra[i].toLowerCase();
            if (inputLetter === wordLetter) {
              result.push(("rgba(115, 253, 115, 0.6)"));
            }
            else if (this.palavra.indexOf(inputLetter) != -1) {
              result.push(("rgba(253, 233, 115, 0.6)"));
          }
            else {
              result.push(("rgba(61, 61, 61, 0.2)"));
        }
      } return result
    }   

}

