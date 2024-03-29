var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size ++;
  };

  stack.pop = function(){
    if (size > 0) {
      var temp = storage[size - 1];
      delete storage[size - 1];
      size --;
      return temp;
    }
    return undefined;
  };

  stack.size = function(){
    return size;
  };

  stack.auditStorage = function(){
    var size = 0;
    for (var i = 0; i < storage.length; i++) {
      size ++;
    }
    return size;
  };

  return stack;
};
