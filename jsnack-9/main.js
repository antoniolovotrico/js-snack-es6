//// JSnack 9 //// Scrivi una funzione che accetti tre argomenti:un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


//creazione di un un array iniziale vuoto. Creato For loop per riempirlo di "i" elementi casuali.
const arrIniziale = [];
for (let i = 0; i < 10; i++) {
    const arrEle = Math.floor(Math.random() * (20 - 1)) + 1;
    arrIniziale.push(arrEle);    
} 

// creazione di due variabili con le caratteristiche assegnate
const b = Math.floor(Math.random() * (arrIniziale.length - 1)) + 1; 
const a = Math.floor(Math.random() * (b - 2)) + 1;

console.log(arrIniziale);
console.log(a);
console.log(b);

// dichiarazione dell'array finale da riempire tramite la funzione creata
const arrFinale = [];

const arrCreation = (arrDue,num1,num2) => {
    for (let j = num1; j < num2; j++){
        arrDue.push(arrIniziale[j]);
    }
    return arrDue
}

const result = arrCreation(arrFinale,a,b);
console.log(result);