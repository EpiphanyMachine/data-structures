var makeQueue = function(){
  var newQueue = Object.create(queuePrototype);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  return newQueue;
};


var queuePrototype = {};
queuePrototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail ++;
};
queuePrototype.dequeue = function(){
  if (this.size() > 0) {
    this.head ++;
    var temp = this.storage[this.head - 1];
    delete this.storage[this.head - 1];
    return temp;
  }
};
queuePrototype.size = function(){
  return this.tail - this.head;
};
queuePrototype.storageSize = function(){
  var size = 0;
  for (var key in this.storage){
    size ++;
  }
  return size;
};
