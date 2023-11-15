// scrivere in pagina i primi 6 numeri
// ? recupero l'elemento che sara' il parent di quello che voglio popolare nell'html
const wrapperElement = document.querySelector('div.wrapper');

// multiplo significa che e' divisibile per quel numero senza resto
// # a % b = resto => 6 % 3 =? 0


for (let i = 1; i <= 100 ; i++ ){
    const fizzBuzzElement = document.createElement('article');
    fizzBuzzElement.className = 'card';

    if ( i % 15 === 0){
        fizzBuzzElement.append('fizzbuzz');
        // % fizzBuzzElement.className += ' bg-yellow';
        fizzBuzzElement.classList.add('bg-yellow');
    } else if (i % 3 === 0){
        fizzBuzzElement.append('fizz');
        // % fizzBuzzElement.className += ' bg-green';
        fizzBuzzElement.classList.add('bg-green');
    } else if (i % 5 === 0) {
        fizzBuzzElement.append('buzz');
        // % fizzBuzzElement.className += ' bg-cyan';
        fizzBuzzElement.classList.add('bg-cyan');
    } else {
        fizzBuzzElement.append(i);
        // % fizzBuzzElement.className += ' bg-blue';
        fizzBuzzElement.classList.add('bg-blue');
    }

    wrapperElement.appendChild(fizzBuzzElement);
}