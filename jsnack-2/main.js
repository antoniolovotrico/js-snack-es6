// snack 2 oggetti: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bikeArray = [
    {
        nome : "Diablo",
        peso : 7
    },
    {
        nome : "Gt",
        peso : 5
    },
    {
        nome : "Racer",
        peso : 6
    },
    {
        nome : "Ferro",
        peso : 10
    },
]

const kg = []




bikeArray.forEach((item) => kg.push(item.peso));
console.log(kg);
    

let min = Math.min.apply(Math, kg);
console.log(min);