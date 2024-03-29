var Stack = function() {
  var newStack = Object.create(Stack.prototype);
  newStack.storage = {};
  newStack.stackSize = 0;
  return newStack;
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
Stack.prototype.auditStorage = function(){
  var tempSize = 0;
  for (var i = 0; i < this.storage.length; i++) {
    tempSize ++;
  }
  return tempSize;
};
