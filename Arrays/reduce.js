Array.prototype.reduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};
