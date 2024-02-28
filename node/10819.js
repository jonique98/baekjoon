const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {

	const n = Number(input[0]);

	const a = input[1].split(' ').map(Number);
	const visited = Array(n).fill(0);

	const calc = (arr) => {
		let tmp;
		let answer = 0;
		for(let i = 0; i < n; i++){
			if (i === 0){
				tmp = arr[i];
			}
			else{
				answer += Math.abs(tmp - arr[i]);
				tmp = arr[i];
			}
		}
		return answer;
	}

	let answer = -Infinity;
	const dfs = (depth, arr) => {
		if(depth === n){
			answer = Math.max(calc(arr), answer);
			return;
		}

		for(let i = 0; i < n; i++){
			if(visited[i] === 0){
				visited[i] = 1;
				dfs(depth+1, [...arr, a[i]])
				visited[i] = 0;
			}
		}

	}

	dfs(0, []);
	console.log(answer);

})