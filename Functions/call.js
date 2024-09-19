Function.prototype.call = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('This is not callable.');
  }

  context.fn = this;
  context.fn(...args);
};
