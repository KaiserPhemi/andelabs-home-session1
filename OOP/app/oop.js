/*IIFE implemented to prevent pollution of the global namespace*/
(function(){
	"use strict";
	module.exports = {

		Animal : function(name, family, maximumSpeed, numOfLegs, age){

			this.name = name;
			this.family = family;
			this.maximumSpeed = maximumSpeed;
			this.age = age;
			this.numOfLegs = function(habitat){
				var animalHabitat = (habitat == 'Ground') ? 4 :
								(habitat == 'Air') ? 2 :
								(habitat == 'Water') ? 0 : "Animal habitat can only be `Ground`, `Air` or `Water` only";
				return animalHabitat;
			};
			
		}
	};

})();