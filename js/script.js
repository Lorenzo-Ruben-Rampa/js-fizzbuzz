// stampiamo i valori di i da 1 a 100

for (let i = 1; i <= 100; i++) {
   
    // se multiplto sia di 3 che di 5 mostra FizzBuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }
     // se multiplto di 3 mostra Fizz
    else if (i % 3 === 0) {
    console.log("Fizz");
    }   
     // se multiplto di 5 mostra Buzz
    else if  (i % 5 === 0) {
    console.log("Buzz");
    }
    else {
    console.log(i);
    }
}