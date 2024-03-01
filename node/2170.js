const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const n = Number(input[0]);

	const arr = input.slice(1).sort((a,b) => a.split(' ').map(Number)[0] -  b.split(' ').map(Number)[0])

	const [x,y] = arr[0].split(' ').map(Number);

	let start = x;
	let end = y;
	let ans = Math.abs(y-x);

	for(let i = 1; i < arr.length; i++){
		const [x,y] = arr[i].split(' ').map(Number);

		if(x < start){
			start = x;
		}
		else if(x < end && y >= end){
			end = y;
		}
		else
			ans+= Math.abs(y-x);
	}

	console.log(ans);

})