const arr = process.argv.splice(2).filter(n => n > 0);

for (let num of arr) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
}