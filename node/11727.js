const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', ()=>{


	let n = Number(input[0]);

	const dp = Array(n+1);

	if(n === 1)
		return console.log(1);
	if(n === 2)
		return console.log(3);

	dp[1] = 1;
	dp[2] = 3;
	for(let i = 3; i <= n; i++)
		dp[i] = (dp[i-2]*2 + dp[i-1]) % 10007;
	console.log(dp[n]);
})