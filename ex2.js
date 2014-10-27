var sum = 0;
//console.log(process.argv);
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
};
console.log(sum);
