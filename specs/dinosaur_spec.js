const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  let dinosaurOne, dinosaurTwo;

  beforeEach(function(){
    dinosaurOne = new Dinosaur('Tyrannosaurus', 3);
    dinosaurTwo = new Dinosaur('Velociraptor', 4);
  });

  it('Can create a dinosaur with type and reproduction rate', function(){
    assert.strictEqual(dinosaurOne.type, 'Tyrannosaurus');
    assert.strictEqual(dinosaurOne.numberOffspring, 3);
  })

});
