const Park = function(){
  this.enclosure = [];
}

Park.prototype.enclosureSize = function(){
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeTypeOfDinosaur = function(type){
  this.enclosure = this.enclosure.filter(dinosaur => dinosaur.type !== type);
}

module.exports = Park;
