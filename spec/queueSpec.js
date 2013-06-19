describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('should have a size of 0 initially', function() {
    expect(queue.size()).to.equal(0);
  });

  it('enqueue a value, size should increase to 1', function() {
    queue.enqueue('hey');
    expect(queue.size()).to.equal(1);
  });

  it('dequeue next item, size should decrease by one', function() {
    queue.enqueue('hey');
    queue.enqueue('there');
    queue.enqueue('friend');
    queue.dequeue();
    expect(queue.size()).to.equal(2);
  });

  // Hey! Add tests here that thoroughly test the functionality of your queue
});
