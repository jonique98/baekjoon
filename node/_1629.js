const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
	input.push(line)}
).on("close", function(){
	let a = input[0].split(' ');

	let A = Number(a[0]);
	let B = Number(a[1]);
	let C = Number(a[2]);

	let m = [];
	let cnt = 0;

	let b = B;

	while(b > 1) {

		if(b % 2 === 1)
			m.push(1);
		else
			m.push(0);

		b = Math.floor(b / 2);
		cnt++;
	}

	while (cnt > 0){
		let temp = (A%C);

		if(m[cnt-1] === 1)
			A = ((temp * temp) * (A % C)) % C;
		else
			A = temp*temp%C;
		cnt--;
	}

	console.log(A);

});