Function.prototype.apply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error('This is not callable.');
  }

  if (!Array.isArray(args)) {
    throw new Error('Arguments are not in array.');
  }

  context.fn = this;
  context.fn(...args);
};
