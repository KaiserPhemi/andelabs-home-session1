(function(){
  'use strict';

  var Animal = require("../app/oop.js").Animal;

  describe("Animal Class: Create an animal", function() {

    it("The animal should be a type of `object`", function() {
      var dog = new Animal;
      expect(typeof dog).toEqual("object");
    });

    it("The animal should have a number of legs property and it should be a function", function() {
      var dog = new Animal;
      expect(typeof dog.numOfLegs).toEqual("function");
    });

    it("The animal should be called 'Generic' if no name is passed as a parameter", function() {
      var wiered =  new Animal('Generic', 'GC' );
      expect(wiered.name).toEqual('Generic');
      expect(wiered.family).toEqual('GC');
    });

    it("The animal maximum speed should be a property of the Animal", function() {
      var horse  = new Animal('Shadowfax', 'Herbivore', 45);
      expect(horse.name).toEqual('Shadowfax');
      expect(horse.family).toEqual('Herbivore');
      expect(horse.maximumSpeed).toBe(45);
    });

    it("The animal name and family should be a property of the Animal", function() {
      var cat  = new Animal('Casper', 'Carnivore');
      expect(cat.name).toBe('Casper');
      expect(cat.family).toBe('Carnivore');
    });

    it("The animal age should be a property of the Animal", function() {
      var cat  = new Animal('Casper', 'Carnivore',30, 'Ground', 3);
      expect(cat.name).toBe('Casper');
      expect(cat.family).toBe('Carnivore');
      expect(cat.age).toBe(3);
    });

    it("The Animal should have four (4) legs except its a habitat is Water or Air", function() {
      var goat  = new Animal('Ewu', 'Herbivore', 20, 'Ground');
      expect(goat.numOfLegs('Ground')).toBe(4);

      var fish = new Animal('Nemo', 'Herbivore', 10, 'Water');
      expect(fish.numOfLegs('Water')).toBe(0);
      
      var eagle = new Animal('Sam', 'Carnivore', 60, 'Air');
      expect(eagle.numOfLegs('Air')).toBe(2);
           
    });

  });
})();