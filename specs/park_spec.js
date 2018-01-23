const assert = require('assert');
const Park = require('../park.js');

describe('Park', function(){
  let park;

  beforeEach(function(){
    park = new Park();
  })

  it('Park starts empty', function(){
    assert.strictEqual(park.enclosureSize(), 0);
  })
})
