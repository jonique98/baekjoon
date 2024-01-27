const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let [A, B, C] = input[0].split(' ').map(Number);

	A = BigInt(A);
	C = BigInt(C);

	let m = [];
	let cnt = 0;

	const pow = (ex) => {
		if(ex === 1)
			return A % C;
		
		let temp = BigInt(pow(Math.floor(ex/2)));

		if(ex % 2 === 1)
			return temp * temp % C * A % C;
		else
			return temp * temp % C;
	}

	console.log(pow(B).toString());

});