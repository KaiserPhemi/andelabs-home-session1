"use strict";
var getPrimes = require("../app/getPrimes").getPrimes;

describe("Test for all types of input", function(){
	
	describe("Test for numeric input ", function(){
	
		it("Should return [1, 2, 3] for numeric input 3", function(){
			expect(getPrimes(3)).toEqual([1, 2, 3]);
		});

		it("Should return [1, 2, 3, 5, 7] for numeric input 7", function(){
			expect(getPrimes(7)).toEqual([1, 2, 3, 5, 7]);
		});

		it("Should return `Input must be a number and greater than zero` for input 0", function(){
			expect(getPrimes(0)).toEqual('Input must be a number and greater than zero');
		});

		it("Should return `Input must be a number and greater than zero` for input -5", function(){
			expect(getPrimes(-5)).toEqual('Input must be a number and greater than zero');
		});
		
	});

	describe("Test for string input", function(){
		it("Should return `Input must be a number` for string input 'name'", function(){
			expect(getPrimes("name")).toEqual("Input must be a number");
		});

	});

	describe("Test for array input", function(){
		it("Should return `Input must be a number` for array input [4, 3]", function(){
			expect(getPrimes([4, 3])).toBe("Input must be a number");
		});
	});
});