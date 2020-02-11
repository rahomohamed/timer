const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {

  if (key === '\u0003') {
    process.exit();

  } else if (key === 'b') {
  process.stdout.write("\x07"); 
  
} else {
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (let num of numbers) {
if (key === num) {
  console.log(`setting timer for ${key} seconds`)
  setTimeout(() => {
        process.stdout.write("\x07");
      }, (key * 1000));
    }
  }
}
})
