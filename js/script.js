// scrivere in pagina i primi 6 numeri
// ? recupero l'elemento che sara' il parent di quello che voglio popolare nell'html
const wrapperElement = document.querySelector('div.wrapper');

// multiplo significa che e' divisibile per quel numero senza resto
// # a % b = resto => 6 % 3 =? 0

for (let i = 1; i <= 100 ; i++ ){
    const fizzBuzzElement = document.createElement('article');
    fizzBuzzElement.className = 'card';

    fizzBuzzElement.addEventListener('click', function(){
        fizzBuzzElement.classList.toggle('active');
    });

    if ( i % 15 === 0){
        fizzBuzzElement.append('fizzbuzz');
        fizzBuzzElement.classList.add('bg-yellow');
    } else if (i % 3 === 0){
        fizzBuzzElement.append('fizz');
        fizzBuzzElement.classList.add('bg-green');
    } else if (i % 5 === 0) {
        fizzBuzzElement.append('buzz');
        fizzBuzzElement.classList.add('bg-cyan');
    } else {
        fizzBuzzElement.append(i);
        fizzBuzzElement.classList.add('bg-blue');
    }

    wrapperElement.appendChild(fizzBuzzElement);
}