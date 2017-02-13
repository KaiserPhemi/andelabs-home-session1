/*IIFE implemented to prevent pollution of global namespace*/
(function(){
	'use strict'; 

	module.exports ={
		getPrimes : function(integerN){
			
			var makePrimes =(integerN <= 0)? "Input must be a number and greater than zero": 
							(typeof integerN != 'number') ? "Input must be a number": primes(integerN);

			function primes(integerN){

				var primesList = [];

				for(var count = 1; count <= integerN; count++){

					var checkPrime = false;

					for(var innerCount = 2; innerCount <= count; innerCount++){

						if(count % innerCount === 0 && innerCount != count){

							checkPrime = true;
						}
					}
					if(checkPrime === false){

						primesList.push(count);
        			}
        		}
        		return primesList;
			}
			return makePrimes;
		}
	};
})();