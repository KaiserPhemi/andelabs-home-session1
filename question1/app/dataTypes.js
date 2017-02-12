/*IIFE implemented to prevent pollution of the global space*/
(function(){
	'use strict'; /*Strict mode*/

	module.exports = {
		dataTypes : function(passedData){
			var dataType = typeof passedData;

			switch(dataType){

				case "boolean":
					return passedData;
					break;
				case "function":
					return passedData(true);
					break;
				case "string":
					return passedData.length;
					break;
				case "number":
					var message = 
						passedData == 100 ? "equal to 100":
						passedData > 100 ? "more than 100": "less than 100";
					return message;
					break;
				case "object":
					var element = 
						passedData == null ? "no value":
						passedData.constructor == Array ? passedData[2] : undefined;
					return element;
					break;
				case "undefined":
					return "no value";
					break;
				default:
					break;

			}
		}
		
	};

})();