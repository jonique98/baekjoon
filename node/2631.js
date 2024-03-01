const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {

	const n = Number(input[0]);

	for(let i = 0; i < n; i++){
		input[i+1] = Number(input[i+1]);
	}

	const arr = input.slice(1);

	const dp = Array(n).fill(1);

	for(let i = 0; i < n; i++){
		for(let j = 0; j < i; j++){
			if(arr[j] < arr[i]){
				dp[i] = Math.max(dp[i], dp[j]+1);
			}
		}
	}

	console.log(n - Math.max(...dp));

})