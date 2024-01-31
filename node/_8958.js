const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for(let i = 1; i <= N; i++) {
	const line = input[i];
	let a = 0;
	let ans = 0;
	for(let j = 0; j < line.length; j++) {
		if(line[j] === 'X') {
			a = 0;
			continue ;
		}
		a += 1;
		ans += a;
	}
	console.log(ans);
}