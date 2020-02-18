var INPUT = process.argv;
var opt = INPUT['2'];
var stat = INPUT['3'];
solver(opt, stat);

function solver(options, staticrepeat) {
  var answer = (1 / options)^staticrepeat;
  console.log(answer);
}
