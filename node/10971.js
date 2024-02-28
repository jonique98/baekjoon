const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const n = Number(input[0]);

	const map = Array.from(Array(n), () => Array(n).fill(0));

	for(let i = 0; i < n; i++){
		const arr = input[i+1].split(' ');
		for(let j = 0; j < n; j++){
			map[i][j] = Number(arr[j]);
		}
	}

	const check = (arr) => {
		for(let i = 0; i < arr.length; i++){
			if(arr[i] === 0)
				return false
		}
		return true;
	}

	const visited = Array(n).fill(0);
	const dist = Array(n).fill(0);

	let answer = Infinity;
	const dfs = (node, sum) => {
		if(sum > answer)
			return ;
		if(check(visited)){
			if(dist[node] !== 0)
				answer = Math.min(sum + dist[node], answer);
			return ;
		}

		for(let i = 0; i < n; i++){
			if(map[node][i] > 0 && visited[i] === 0){
				visited[i] = 1;
				dfs(i, sum+map[node][i]);
				visited[i] = 0;
			}
		}
	}

	for(let i = 0; i < n; i++){
		dist[i] = map[i][0];
	}

	visited[0] = 1;
	dfs(0, 0);
	console.log(answer);

})