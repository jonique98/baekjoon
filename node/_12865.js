let readline = require("readline");

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", (line)=> {
	input.push(line);
}).on("close", () => {
	let N = Number(input[0].split(' ')[0]);
	let K = Number(input[0].split(' ')[1]);

	let arr = [];
	for(let i = 1; i <= N; i++)
		arr.push(input[i].split(' ').map(Number));

		let dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

		for(let i = 1; i <= N; i++){
			let W = arr[i-1][0];
			let P = arr[i-1][1];
			for(let j = 1; j <= K; j++){
				if(j >= W)
					dp[i][j] = Math.max(dp[i - 1][j - W] + P, dp[i - 1][j]);
				else
					dp[i][j] = dp[i - 1][j];
			}
		}


		console.log(dp[N][K]);



})