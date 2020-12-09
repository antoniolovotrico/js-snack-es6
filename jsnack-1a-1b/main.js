// snack 1a oggetti: Creare un oggetto palla che abbia le seguenti proprietà.Nome = palla,Peso = 10

const ball = {
    nome : "palla",
    peso : 10
}
console.log(ball);

//snack 1b oggetti: Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

ball.peso = Number(prompt("inserisci il peso della palla"));

console.log(ball);