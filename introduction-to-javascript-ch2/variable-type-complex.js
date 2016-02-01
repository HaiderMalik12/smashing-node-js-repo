//In complexm you actually work on the reference

var a=['hello','world'];
var b=a;

b[0]='bye';

//because b has same refernce where a is pointing
console.log(b[0]);
console.log(a[0]);

var bunchOfParties=['HaiderMalik','BurjBank','Shah Khurma'];

var fsdParties=bunchOfParties;

bunchOfParties[0]='First Party';
fsdParties[0]='First Party';

console.log(bunchOfParties[0]);
console.log(fsdParties[0]);

//to verify the refercnees

console.log(bunchOfParties[0]===fsdParties[0]);