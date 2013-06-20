var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize ++;
};
Stack.prototype.pop = function(){
  if (this.stackSize > 0) {
    var temp = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize --;
    return temp;
  }
  return undefined;
};
Stack.prototype.size = function(){
  return this.stackSize;
};
Stack.prototype.storageSize = function(){
  var tempSize = 0;
  for (var i = 0; i < this.storage.length; i++) {
    tempSize ++;
  }
  return tempSize;
};
