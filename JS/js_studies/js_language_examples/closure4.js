function foo() {
        var a = 2;

        function bar() {
                    console.log( a );
                }

        return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.
