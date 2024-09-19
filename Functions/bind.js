Function.prototype.bind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('This is not callable.');
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
