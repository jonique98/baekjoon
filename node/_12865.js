const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = input[0].split(' ').map(Number);

const N = line[0];
const K = line[1];

const list = [];
for(let i = 1; i <= N; i++)
	list.push(input[i].split(' ').map(Number));

const sum = (list, index) => {
	let n = 0;
	for(let i = 0; i < list.length; i++){
		n += list[i][index];
	}
	return n;
}

if(sum(list, 0) <= K)
	return console.log(sum(list, 1));

const dp = [];
for(let i = 0; i <= N; i++){
}

console.log(dp[K][N-1]);


