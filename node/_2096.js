const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let mdp = [];
let dp = [];
for(let i = 1; i < input.length; i++){
	let line = input[i].split(" ");
	if(i === 1){
		for(let j = 0; j < 3; j++)
		mdp[j] = Number(line[j]);
		dp[j] = Number(line[j]);
		continue;
	}
	for(let j = 0; j < 3; j++){
		const temp = mdp[j];
		const temp2 = dp[j];

		if(j === 0){
			mdp[j] = Math.max(temp, mdp[j + 1]) + Number(line[j]);
			dp[j] = Math.min(temp2, dp[j + 1]) + Number(line[j]);
		}
		else if (j === N - 1){
			mdp[j] = Math.max(mdp[j - 1], mdp[j]) + Number(line[j]);
			dp[j] = Math.min(dp[j - 1], dp[j]) + Number(line[j]);
		}
		else{
			mdp[j] = Math.max(mdp[j - 1], mdp[j], mdp[j + 1]) + Number(line[j]);
			dp[j] = Math.min(dp[j - 1], dp[j], dp[j + 1]) + Number(line[j]);
		}
	}
}

console.log(`${Math.max(...mdp)} ${Math.min(...dp)}`);