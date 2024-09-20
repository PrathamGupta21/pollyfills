Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
