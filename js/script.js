// scrivere in pagina i primi 6 numeri
// ? recupero l'elemento che sara' il parent di quello che voglio popolare nell'html
const wrapperElement = document.querySelector('div.wrapper');


// multiplo significa che e' divisibile per quel numero senza resto
// # a % b = resto => 6 % 3 =? 0

for (let i = 1; i <= 100 ; i++ ){
    if ( i % 15 === 0){
        console.log('FuzzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}