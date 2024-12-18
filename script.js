// stampiamo i valori di i da 1 a 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
    console.log("Fizz", i);
    }   
    if  (i % 5 === 0) {
    console.log("Buzz", i);
    }
    if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz", i);
    }
}