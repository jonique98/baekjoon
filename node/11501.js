const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

const input = [];
rl.on('line', line => {
	input.push(line);
}).on('close', () => {
	const T = Number(input[0]);
	for(let i = 0; i < T; i++){
		let k = i*2+2;
		const arr = input[k].split(' ').map(Number);
		k = arr.length - 1;
		let max = arr[k];
		let ans = 0;
		for(let j = k; j >= 1; j--){
			if(arr[j-1] < max)
				ans += max - arr[j-1];
			else
				max = arr[j-1];
		}
		console.log(ans);
	}
})