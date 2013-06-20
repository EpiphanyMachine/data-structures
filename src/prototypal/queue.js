var Queue = function() {
  var newQueue = Object.create(Queue.prototype);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  return newQueue;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail ++;
};
Queue.prototype.dequeue = function(){
  if (this.size() > 0) {
    this.head ++;
    var temp = this.storage[this.head - 1];
    delete this.storage[this.head - 1];
    return temp;
  }
};
Queue.prototype.size = function(){
  return this.tail - this.head;
};
Queue.prototype.storageSize = function(){
  var size = 0;
  for (var key in this.storage){
    size ++;
  }
  return size;
};
