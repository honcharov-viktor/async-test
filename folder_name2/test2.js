function my_function(data, result) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      console.log(`${__filename} done!`);
      resolve();
    }, 1000);
  }));
}

module.exports = my_function;
