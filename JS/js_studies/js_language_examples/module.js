function CoolModule() {
        var something = "cool";
        var another = [1, 2, 3];

        function doSomething() {
                    console.log( something );
                }

        function doAnother() {
                    console.log( another.join( " ! " ) );
                }

        return {
                    doSomething: doSomething,
                    doAnother: doAnother
                };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3


var foo = (function CoolModule() {
        var something = "cool";
        var another = [1, 2, 3];

        function doSomething() {
                    console.log( something );
                }

        function doAnother() {
                    console.log( another.join( " ! " ) );
                }

        return {
                    doSomething: doSomething,
                    doAnother: doAnother
                };
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
