var foo = true;

if (foo) {
        var a = 2;
        const b = 3; // block-scoped to the containing `if`

        a = 3; // just fine!
        b = 4; // error!
}

console.log( a ); // 3
console.log( b ); // ReferenceError!
