var makeStack = function(){
  var newStack = {};
  newStack._storage = {};
  newStack._stackSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};
stackMethods.push = function(value){
    this._storage[this._stackSize] = value;
    this._stackSize ++;
};
stackMethods.pop = function(){
  if (this._stackSize > 0) {
    var temp = this._storage[this._stackSize - 1];
    delete this._storage[this._stackSize - 1];
    this._stackSize --;
    return temp;
  }
  return undefined;
};
stackMethods.size = function(){
  return this._stackSize;
};
stackMethods.auditStorage = function(){
  var tempSize = 0;
  for (var i = 0; i < this._storage.length; i++) {
    tempSize ++;
  }
  return tempSize;
};
