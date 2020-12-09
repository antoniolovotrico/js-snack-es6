// jsnack 6 oggetti :  Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const daGirare = "argomento";

const reverse = (stringa) => {
    const splitta = stringa.split("");
    console.log(splitta.length);
    let reverse ="";
    for (let i = splitta.length - 1; i >= 0; i--) {
        reverse += splitta[i];
    }
    return reverse
}

const result = reverse(daGirare);
console.log(result);