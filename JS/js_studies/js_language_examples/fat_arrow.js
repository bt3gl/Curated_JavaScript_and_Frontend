function foo() {
    // return an arrow function
    return (a) => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    };
}
    
var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};
    
var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!
