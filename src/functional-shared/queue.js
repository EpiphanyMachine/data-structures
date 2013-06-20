var makeQueue = function(){
  var newQueue = Object.create(queuePrototype);
  newQueue._storage = {};
  newQueue._head = 0;
  newQueue._tail = 0;
  return newQueue;
};


var queuePrototype = {};
queuePrototype.enqueue = function(value){
  this._storage[this._tail] = value;
  this._tail ++;
};
queuePrototype.dequeue = function(){
  if (this.size() > 0) {
    this._head ++;
    var temp = this._storage[this._head - 1];
    delete this._storage[this._head - 1];
    return temp;
  }
};
queuePrototype.size = function(){
  return this._tail - this._head;
};
queuePrototype.auditStorage = function(){
  var size = 0;
  for (var key in this._storage){
    size ++;
  }
  return size;
};
