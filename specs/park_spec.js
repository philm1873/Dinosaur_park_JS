const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){
  let park;

  beforeEach(function(){
    park = new Park();
    dinosaurOne = new Dinosaur('Tyrannosaurus', 3);
    dinosaurTwo = new Dinosaur('Velociraptor', 4);
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
})
