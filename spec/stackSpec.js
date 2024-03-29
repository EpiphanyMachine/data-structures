describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should return size 0 when empty', function() {
    expect(stack.size()).to.equal(0);
  });

  it('should return size 1 after push', function() {
    stack.push('zero');
    expect(stack.size()).to.equal(1);
  });

  it('should return size 0 and push and pop', function() {
    stack.push('zero');
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  it('should remove popped items from the top of the stack', function() {
    stack.push('zero');
    expect(stack.pop()).to.equal('zero');
  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    stack.push('zero');
    expect(stack.pop()).to.equal('zero');
    stack.push('zero');
    stack.push('one');
    stack.push('two');
    stack.push('three');
    expect(stack.pop()).to.equal('three');
    expect(stack.pop()).to.equal('two');
  });

  it('should not error when popping from an empty stack', function() {
    stack.push('zero');
    expect(stack.pop()).to.equal('zero');
    expect(stack.pop()).to.equal(undefined);
    expect(stack.pop()).to.equal(undefined);
  });


  it('should not leak memory', function() {
    expect(stack.auditStorage()).to.equal(stack.size());
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
