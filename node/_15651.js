const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let N = Number(input[0].split(" ")[0]);
	let M = Number(input[0].split(" ")[1]);

	let ans = [];
	let tmp = [];

	const dfs = (c, f) => {
		if (c === f) {
			ans.push([...tmp]);
			return ;
		}
		for(let i = 1; i <= N; i++) {
			tmp[c] = i;
			dfs(c + 1, f);
		}
	}

	dfs(0, M);
	let k = "";
	ans.forEach((a) => k = k + a.join(' ') + '\n');
	console.log(k.trim());
	// ans.forEach((a) => console.log(a.join(' ')));
})