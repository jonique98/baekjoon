const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const m = input[0].split(' ').map(Number)[1];
	const arr = input[1].split(' ').map(Number);

	const max = Math.max(...arr);
	const min = Math.min(...arr);

	let i = 0;
	let j = max;

	let mid = 0;

	while(i < j){
		mid = Math.floor((i + j) / 2);

		let tmp = 0;
		for(let k = 0; k < arr.length; k++){
			if(arr[k] - mid > 0)
				tmp+=arr[k]-mid;
		}
		if(tmp < m)
			j = mid;
		else
			i = mid+1
	}

	console.log(i-1);
})