var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};
  queue.enqueue = function(value){
    storage[this.tail] = value;
    this.tail ++;
  };
  queue.dequeue = function(){
    if (this.size() > 0) {
      this.head ++;
      var temp = storage[this.head - 1];
      delete storage[this.head - 1];
      return temp;
    }
  };
  queue.size = function(){
    return this.tail - this.head;
  };
  queue.head = 0; //initial value
  queue.tail = 0; //initial value
  queue.storageSize = function(){
    var size = 0;
    for (var key in storage){
      size ++;
    }
    return size;
  };

  return queue;
};
