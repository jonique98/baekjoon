const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let n = Number(input[0].split(' ')[0]);
	let m = Number(input[0].split(' ')[1]);

	const map = Array.from({length:n+1}, () => Array(m+1).fill(0));
	const dp = Array.from({length:n+1}, () => Array(m+1).fill(0));

	for(let i = 1; i <= n; i++){
		const tmp = input[i].split('').map(Number);
		for (let j = 1; j <= m; j++){
			map[i][j] = tmp[j-1];
		}
	}
	
	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= m; j++){
			if(map[i][j] === 0 || map[i-1][j-1] === 0 || map[i][j-1] === 0 || map[i-1][j] === 0)
				dp[i][j] = map[i][j];
			else
				dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
		}
	}

	// console.log(dp);

	console.log(Math.max(...dp.flat()) * Math.max(...dp.flat()));
});