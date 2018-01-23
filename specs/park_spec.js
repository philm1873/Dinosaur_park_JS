const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){
  let park, dinosaurOne, dinosaurTwo, dinosaurThree;

  beforeEach(function(){
    park = new Park();
    dinosaurOne = new Dinosaur('Tyrannosaurus', 3);
    dinosaurTwo = new Dinosaur('Velociraptor', 2);
    dinosaurThree = new Dinosaur('Tyrannosaurus', 3);
  })

  it('Park starts empty', function(){
    assert.strictEqual(park.enclosureSize(), 0);
  })

  it('Park can add dinosaur to enclosure', function(){
    park.addDinosaur(dinosaurOne);
    assert.strictEqual(park.enclosureSize(), 1);
  })

  it('Can remove all dinosaurs of particular type', function(){
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.removeTypeOfDinosaur('Tyrannosaurus');
    assert.strictEqual(park.enclosureSize(), 1);
  })

  it('Can find all dinosaurs by offspring rate', function(){
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    assert.strictEqual(park.getAllDinosaursByOffspringRate().length, 2)
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaurOne);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaurOne);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });
})
