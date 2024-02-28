const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	const [n,s] = input[0].split(' ').map(Number);
	const a = input[1].split(' ').map(Number);

	const sum  = (arr) => {
		let sum = 0;
		for(let i = 0; i < arr.length; i++)
			sum+= arr[i];
		return sum;
	}

	let answer = 0;
	const dfs = (idx, arr) => {
		if(idx > n)
			return ;
		if(arr.length > 0 && sum(arr) === s)
			answer++;
		for(let i = idx; i < n; i++)
			dfs(i+1, [...arr,a[i]]);
	}

	dfs(0, []);

	console.log(answer);
})