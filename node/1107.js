const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const len = Number(input[0]).toString().length;

	const N = Number(input[0]);
	const q = Number(input[1]);
	if(q === 0){
		console.log(Math.min(len, Math.abs(N - 100)));
		return;
	}
	const tmp = input[2].split(' ').map(Number);

	arr = arr.filter(n => !tmp.includes(n));

	let a = Math.abs(N - 100);
	let c = [];

	if(q === 10)
		return (console.log(a));

	const dfs = (k) => {
		if(k > 0){
			if (Math.abs(N - Number(c.slice(0,k).join('')))+Number(c.slice(0,k).join('')).toString().length < a)
				a = Math.abs(N - Number(c.slice(0,k).join(''))) +Number(c.slice(0,k).join('')).toString().length;
		}
		if(k === 6)
			return;

		for(let i = 0; i < arr.length; i++){
			c[k] = arr[i];
			dfs(k+1);
		}
	}

	dfs(0);
	console.log(a);
})