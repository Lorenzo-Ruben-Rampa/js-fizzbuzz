// stampiamo i valori di i da 1 a 100

for (let i = 1; i <= 100; i++) {
    // se multiplto di 3 mostra Fizz
    if (i % 3 === 0) {
    console.log("Fizz", i);
    }   
     // se multiplto di 5 mostra Buzz
    if  (i % 5 === 0) {
    console.log("Buzz", i);
    }
     // se multiplto sia di 3 che di 5 mostra FizzBuzz
    if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz", i);
    }
}