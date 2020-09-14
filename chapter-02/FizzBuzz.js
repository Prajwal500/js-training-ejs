for (let a = 1; a <= 100; a = a + 1) {
    if ( ( a % 3 ) === 0) {
        if ( a % 5 !== 0 ) {
            console.log('Fizz');
        }
        else {
            console.log('FizzBuzz');

        }
    }
    else if ( ( a % 5 ) === 0) {
        if ( a % 3 !== 0 ) {
            console.log('Buzz');
        }
        else {
            console.log('FizzBuzz');

        }
    }
    else {
        console.log(a);
    }

}

  
