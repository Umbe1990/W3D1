/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
   function crazySum(numero1, numero2){
     if (numero1===numero2){
        return (numero1+numero2)*3
     }     
    else{
        return numero1+numero2
    }
    
    }
     
    
    
    console.log(crazySum(20 ,2))
    

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/function boundary(numero){
    return numero>=20 && numero <=100;
}

console.log(boundary(30))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa){
    return stringa.split("").reverse().join("")

}
console.log(reverseString("umberto"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function upperFirst(stringa){
    return stringa.charAt(0).toUpperCase() + stringa.slice(1)

 }

 console.log(upperFirst("umberto pone bellissimo"))
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/ function giveMeRandom(n){
    const array=[];

    const giveMeRandom=Math.random()*100
    for(let i=0;i<n;i++){
        array.push(giveMeRandom)
    }
    return array

}
console.log(giveMeRandom(10))
/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2){
    return area= l1*l2
}
console.log(area(5,6))
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
    function crazyDiff(numero){
        const differenza=Math.abs(numero-19)        
        if(differenza>19){
            return differenza*3
        }
        else{
            return differenza
        }
        
    }
    console.log(crazyDiff(20))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function codify(stringa1, stringa2){
    return stringa1 +" "+stringa2
   const risultato=codify("code","hello")
 }

 console.log(risultato)
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/function check3and7(numero){
    return numero % 3===0 || numero % 7===0
}
console.log(check3and7(10))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/function cutString(stringa){
    return stringa.slice(1,-1)
}

const stringaOriginale= "Umberto"
const nuovaStringa=cutString(stringaOriginale)
console.log(nuovaStringa)
/* SCRIVI QUI LA TUA RISPOSTA */
