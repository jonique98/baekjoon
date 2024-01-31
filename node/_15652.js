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

	let N = a[0];
	let M = a[1];

	let tmp = [];
	let ans = new Set();
	const dfs = (n , f, i) => {
		if (n === f) {
			ans.add([...tmp]);
			return ;
		}

		for(let k = i; k <= N; k++){
			tmp[n] = k;
			dfs(n + 1, f, k);
		}
	}
	dfs(0, M, 1);
	ans.forEach(n => console.log(n.join(' ')));
})