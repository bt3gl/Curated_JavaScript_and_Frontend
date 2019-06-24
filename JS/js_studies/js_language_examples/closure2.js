#!/usr/bin/env node


function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

console.log(plusOne( 3 ));		// 4  <-- 1 
console.log(plusOne( 41 ));		// 42 <-- 1 + 41

console.log(plusTen( 13 ));		// 23 <-- 10 + 13
