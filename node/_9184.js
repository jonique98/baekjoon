const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
for(let i = 0; i < input.length; i++)
	arr[i] = [...input[i].split(" ").map(Number)]

const dp = [];

for(let i = 0; i < 102; i++)
	dp.push(new Array(102));

for(let i = 0; i < 102; i++) {
	for(let j = 0; j < 102; j++)
		dp[i][j] = Array(102).fill(0);
}

const func = (a, b, c) => {

	if (a > 70 || b > 70 || c > 70)
		dp[a][b][c] = func(70, 70, 70);
	if (a <=50 || b <= 50 || c <= 50)
	{
		dp[a][b][c] = 1;
		return 1
	}
	if (dp[a][b][c] !== 0)
		return dp[a][b][c];
	if (a < b && b < c) {
		dp[a][b][c] = func(a, b, c-1) + func(a, b-1, c-1) - func(a, b-1, c);
		return dp[a][b][c] ;
	}
	dp[a][b][c] = func(a-1, b, c) + func(a-1, b-1, c) + func(a-1, b, c-1) - func(a-1, b-1, c-1);
	return dp[a][b][c];
}

arr.forEach(([a, b, c]) => {
	if (a === -1 && b === -1 && c === -1)
		return ;
	a += 50;
	b += 50;
	c += 50;
	func(a,b,c);
	console.log(`w(${a-50}, ${b-50}, ${c-50}) = ${dp[a][b][c]}`);
})
