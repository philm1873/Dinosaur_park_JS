const Park = function(){
  this.enclosure = [];
}

Park.prototype.enclosureSize = function(){
  return this.enclosure.length;
}

module.exports = Park;
