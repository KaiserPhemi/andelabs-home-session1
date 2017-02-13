(function(){
  'use strict';

  var Animal = require("../app/oop").Animal;

  describe("Animal Class: Create an animal", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var dog = Object.create(Animal);
      expect(typeof dog).toEqual(typeof {});
      expect(dog instanceof Animal).toBeTruthy();
    });

    it("The animal habitat should be a property of the animal", function(){
      var fish = Object.create(Animal);
      expect(fish.habitat).toEqual('Water');
      expect(fish.numOfLegs).toEqual(0);
    });

    it("The animal should be called 'Generic' if no name is passed as a parameter", function() {
      var wiered = Object.create(Animal);
      expect(wiered.name).toEqual('Generic');
      expect(wiered.family).toBe('GC');
    });

    it("The animal maximum speed should be a property of the Animal", function() {
      var horse  = Object.create(Animal);
      expect(horse.name).toEqual('Shadowfax');
      expect(horse.family).toBe('Herbivore');
      expect(horse.maximumSpeed).toBe(45);
    });

    it("The animal name and family should be a property of the Animal", function() {
      var cat  = Object.create(Animal);
      expect(cat.name).toBe('Casper');
      expect(cat.family).toBe('Carnivore');
    });

    it("The Animal should have four (4) legs except its a habitat is Water or Air", function() {
      var goat  = Object.create(Animal);
      expect(goat.numOfLegs('Ground')).toBe(4);

      var fish = Object.create(Animal);
      expect(fish.numOfLegs('Water')).toBe(0);
      

      var eagle = Object.create(Animal);
      expect(eagle.numOfLegs('Air')).toBe(2);
           
    });

  });
})();