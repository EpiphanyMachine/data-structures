var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};
  queue.enqueue = function(value){
    this.tail ++;
  };
  queue.dequeue = function(){
    this.head ++;
  };
  queue.size = function(){
    return this.tail - this.head;
  };
  queue.head = 0; //initial value
  queue.tail = 0; //initial value

  return queue;
};
