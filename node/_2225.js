const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let a = input[0].split(" ").map(Number);

	let n = a[0];
	let k = a[1];

	const arr = input.slice(1, n + 1).map(Number);
	const dp = Array.from({ length: k+1 }, () => Array.from({ length: n+1}).fill(0));

	for(let i = 1; i <= n; i++)
		dp[1][i] = 1;


	for(let i = 1; i <=k; i++){
		for(let j = 1; j <=n; j++){
			for(let k = 0; k<= j; k++)
				dp[i][j] += (dp[i-1][k] % 1000000000);
		}
	}

	let ans = 0;
	for(let i = 1; i <= k; i++)
		ans += (dp[i][n] % 1000000000)
	console.log(ans % 1000000000);
})