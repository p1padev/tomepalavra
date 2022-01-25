# TOME PALAVRA!
### _Uma versão PT-BR não-oficial do jogo [Wordle](https://www.powerlanguage.co.uk/wordle/)_
> [Jogue agora mesmo / Play it right now](https://jotavkf.github.io/palavreado/)


![Preview do jogo](./assets/preview.png)

# PT-BR
## Sobre o projeto

Tome palavra! foi concebido como primeiro projeto para o bootcamp em Web Development da Ironhack/BR. A ideia de refazer Wordle foi intuitiva, dado que já acompnhava o crescimento do jogo desde o seu lançamento, somada ao fato de que as versões disponíveis em português demandam uma janela de tempo "chata" entre uma tentativa e a outra. Assim, quis me desafiar a produzir o jogo com os conhecimentos adquiridos até aqui - HTML / CSS / Vanilla JS.

## Como funciona o jogo

A ideia de Tome palavra! é simples: o jogo, ao iniciar, define uma palavra que deve ser adivinhada. A rodada é composta por 6 tentativas, em que o jogador deve inserir as letras de uma palavra nos campos designados e clicar em Tentar! (ou Enter) para ter um retorno do jogo. Os retornos visuais possíveis até a quinta rodada são: i) verde se a letra existe na palavra e está no lugar certo; ii) amarelo se a letra existe na palavra mas está no lugar errado; iii) cinza se a letra não existe na palavra. Se o jogador acertar a palavra, ele receberá um retorno em forma de alerta com "Parabéns!". Se, ao chegar na 6a rodada, o jogador ainda assim não conseguir adivinhar a palavra, ele receberá um alerta informando a derrota e reiniciando o jogo com uma nova palavra/rodada.

## Como o código foi feito

O código foi segmentado entre uma seção OOP para a criação das regras do jogo, uma database simples de palavras e um script principal, responsável por manipular o DOM e avançar nas tentativas do jogo. 
