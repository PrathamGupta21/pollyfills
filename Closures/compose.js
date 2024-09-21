function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}
