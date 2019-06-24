var obj = {
        a: 1,
        b: 2,
        c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// // "easier" short-hand
with (obj) {
     a = 3;
     b = 4;
     c = 5;
}
