const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

dp = Array(101).fill(0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

input.slice(1, n + 1).map(Number).forEach((a) => {
	if (dp[a] !== 0)
		return console.log(dp[a]);
	for(let i = 4; i <= a; i++){
		dp[i] = dp[i-2] + dp[i-3]
		if (i === a)
			return console.log(dp[i]);
	}
})

