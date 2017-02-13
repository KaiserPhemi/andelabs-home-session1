(function(){
	'use strict';

	module.exports ={
		getPrimes : function(integerN){
			var makePrimes =(integerN <= 0)? "Input must be a number and greater than zero": 
							(typeof integerN != 'number') ? "Input must be a number": function(integerN){
								
								var primesList = [0, 1];
								for(var count =2; count < integerN; count++ ){
									var resultList = !(integerN % count == 0) ? primesList.push(count) : primesList;
									return resultList;
				}
			};

			return makePrimes;
		}
	};
})();