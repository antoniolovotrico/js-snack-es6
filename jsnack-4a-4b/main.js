// snack 4a oggetti : Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
    {
        nome : "Inter",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli : 0
    },
    {
        nome : "Rubentus",
        punti : 0,
        falli : 0
    },
]

// snak 4b oggetti : Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti

squadre.forEach((item) => {
    const rndNum = (Math.floor((Math.random() * 10) + 1));
    item.falli = rndNum;   
})

squadre.forEach((item) => {
    const rndNum = (Math.floor((Math.random() * 10) + 1));
    item.punti = rndNum;
})

console.log(squadre);