Array.prototype.diff = function(a) {
  return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};

Array.prototype.flatten = function() {
  return this.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten);
  }, []);
};

Array.prototype.fill = function(){
  for (var i = 0; i < this.length; i++){
    this[i] = Object.create(null);
  }
  return this;
};