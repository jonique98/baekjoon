const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	const [N, M] = input[0].split(' ').map(Number);

	const map = Array.from(Array(N+1), ()=>Array(N+1).fill(Infinity));

	for(let i = 0; i < M; i++){
		const [y,x] = input[i+1].split(' ').map(Number);
		map[y][x] = 1;
		map[x][y] = 1;
	}

	for(let k = 1; k <= N; k++){
		for(let i = 1; i <= N; i++){
			for(let j = 1; j <= N; j++){
				if(map[i][k] + map[k][j] < map[i][j])
					map[i][j] = map[i][k] + map[k][j];
			}
		}
	}

	const ans = [];
	for(let i = 1; i <= N; i++){
		let sum = 0;
		for(let j = 1; j <= N; j++){
			if(j !== i)
				sum += map[i][j]
		}
		ans.push(sum);
		sum = 0;
	}

	let max = Math.min(...ans);
	console.log(ans.indexOf(max)+1);
})