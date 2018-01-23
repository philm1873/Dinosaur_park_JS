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

Park.prototype.getAllDinosaursByOffspringRate = function(rate){
  dinosaurs = this.enclosure.filter(dinosaur => dinosaur.numberOffspring > 2);
  return dinosaurs;
}

Park.prototype.calculateDinosaurs = function(years){
  var totalDinosaurs = 0;
  for (dinosaur of this.enclosure){
    totalDinosaurs += (1 + (dinosaur.numberOffspring)) ** years;
  }
  return totalDinosaurs;
}

module.exports = Park;
