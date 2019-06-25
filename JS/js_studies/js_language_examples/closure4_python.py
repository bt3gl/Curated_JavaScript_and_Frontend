def foo(): 
            a = 2;

            def bar():
                print a
            return bar;


baz = foo();

baz() # 2 -- Whoa, closure was just observed, man.
