for (let i=0; i<10; i++) {
        console.log( i );
}

console.log( i ); // ReferenceError


{
        let j;
        for (j=0; j<10; j++) {
                    let i = j; // re-bound for each iteration!
                    console.log( i );
                }
}

/////////////////


var foo = true;

if (foo) {
        { // <-- explicit block
                    let bar = foo * 2;
                    bar = something( bar );
                    console.log( bar );
                }
}

console.log( bar ); // ReferenceError
