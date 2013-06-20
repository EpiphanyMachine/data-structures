var makeStack = function(){
  var newStack = {};
  newStack.storage = {};
  newStack.stackSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};
stackMethods.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize ++;
};
stackMethods.pop = function(){
  if (this.stackSize > 0) {
    var temp = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize --;
    return temp;
  }
  return undefined;
};
stackMethods.size = function(){
  return this.stackSize;
};
stackMethods.storageSize = function(){
  var tempSize = 0;
  for (var i = 0; i < this.storage.length; i++) {
    tempSize ++;
  }
  return tempSize;
};
