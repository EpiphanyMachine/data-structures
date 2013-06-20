var Stack = function() {
  this._storage = {};
  this._stackSize = 0;
};

Stack.prototype.push = function(value){
    this._storage[this._stackSize] = value;
    this._stackSize++;
};
Stack.prototype.pop = function(){
  if (this._stackSize > 0) {
    var temp = this._storage[this._stackSize - 1];
    delete this._storage[this._stackSize - 1];
    this._stackSize--;
    return temp;
  }
  return undefined;
};
Stack.prototype.size = function(){
  return this._stackSize;
};
Stack.prototype.auditStorage = function(){
  var tempSize = 0;
  for (var i = 0; i < this._storage.length; i++) {
    tempSize ++;
  }
  return tempSize;
};
