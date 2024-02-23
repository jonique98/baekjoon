const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	const n = Number(input[0].split(' ')[0]);
	const k = Number(input[0].split(' ')[1]);

	const map = Array(100001).fill(0);
	const arr = input[1].split(' ').map(Number);
	
	let i = 0;
	let j = 0;
	let max = 0;
	while(i < arr.length){
		if(map[arr[i]] < k){
			map[arr[i]] += 1;
			i++;
		}
		else{
			map[arr[j]] -= 1;
			j++;
		}
		if(i - j > max)
			max = i - j;
	}

	console.log(max);

});