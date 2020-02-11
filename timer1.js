const input = process.argv.slice(2);

let delay = input[0];

const timer = function(input) {
  for (let num of input) {
    if (num > 0 || num === Number) {
      setTimeout(() => {
        process.stdout.write("\x07" + num + "\n");
      }, (delay = num * 1000));
    }
  }
};
timer(input);
