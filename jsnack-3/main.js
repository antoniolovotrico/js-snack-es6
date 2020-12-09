// snack 3 oggetti: Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.(ripassiamo il Teorema di Pitagora ;D )

const triRett = {
    base : 10,
    altezza : 5
}

const ipotenusa = Math.sqrt(Math.pow(triRett.base , 2)+ Math.pow(triRett.altezza , 2));
console.log(ipotenusa);

const perimetro = ipotenusa + triRett.base + triRett.altezza;
console.log(perimetro);

const area = (triRett.base * triRett.altezza)/2;
console.log(area);
