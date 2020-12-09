// snack 5 oggetti :  Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const ZucchinoRules = [
    {
        varietà : "Zucchino nero di Milano",
        peso : 500,
        lunghezza : 10
    },
    {
        varietà : "Zucchino ortolano di Faenza",
        peso : 300,
        lunghezza : 13
    },
    {
        varietà : "Zucchina lunga fiorentina",
        peso : 600,
        lunghezza : 14
    },
    {
        varietà : "Zucchino siciliano",
        peso : 700,
        lunghezza : 12
    },
    {
        varietà : "Zucchina striata di Napoli",
        peso : 200,
        lunghezza : 11
    },
    {
        varietà : "Zucchino romanesco",
        peso : 400,
        lunghezza : 15
    },
    {
        varietà : "Zucchina bianca triestina",
        peso : 800,
        lunghezza : 20
    },
    {
        varietà : "Zucchina rigata pugliese",
        peso : 250,
        lunghezza : 7
    },
    {
        varietà : "Zucchino tondo di Piacenza",
        peso : 100,
        lunghezza : 5
    },
    {
        varietà : "Zucchino tondo di Nizza",
        peso : 50,
        lunghezza : 4
    },
]

let sumPeso = 0;

ZucchinoRules.forEach ((item) => sumPeso += item.peso);

console.log(sumPeso);