function memoize(fn) {
  const cache = {};
  return function (...args) {
    const strArgs = JSON.stringify(args);
    if (!cache[strArgs]) {
      cache[strArgs] = fn.apply(this, args);
    }
    return cache[strArgs];
  };
}
