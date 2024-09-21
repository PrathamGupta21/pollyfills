function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }

    return function (...nextArgs) {
      return curried.call(this, ...args, ...nextArgs);
    };
  };
}
