var INPUT = process.argv['2'];
console.log(INPUT);

function solver(options, staticrepeat) {
  var answer = (1 / options)^staticrepeat;
  console.log(answer);
}
