"use strict";
var getPrimes = require("../app/getPrimes").getPrimes;

describe("Test for all types of input", function(){
	
	describe("Test for numeric input ", function(){
	
		it("Should return [0, 1, 2, 3] for numeric input 3", function(){
			expect(getPrimes(3)).toBe([0, 1, 2, 3]);
		});

		it("Should return [0, 1, 2, 3, 5, 7] for numeric input 7", function(){
			expect(getPrimes(7)).toBe([0, 1, 2, 3]);
		});

		it("Should return [0, 1, 2, 3] for numeric input 3", function(){
			expect(getPrimes(3)).toBe([0, 1, 2, 3, 5, 7]);
		});

		it("Should return [0, 1, 2, 3, 5, 7, 11, 13, 17, 19] for numeric input 19", function(){
			expect(getPrimes(19)).toBe([0, 1, 2, 3, 5, 7, 11, 13, 17, 19]);
		});

		it("Should return [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for numeric input 29", function(){
			expect(getPrimes(29)).toBe([0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
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