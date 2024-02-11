const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const N = Number(input[0]);
	const map = Array.from({length:N} , () => Array(N).fill(0));

	let answer = 0;

	for(let i = 1; i < input.length; i++){
		const a = input[i].split('');
		for(let j = 0; j < a.length; j++)
			map[i-1][j] = a[j];
	}

	const swap = (i, j, i_, j_) =>{
		let temp = map[i][j];
		map[i][j] = map[i_][j_];
		map[i_][j_] = temp;
	}
	
	
	const left_dfs = (i, j, k) => {
		if(j + 1 === N || map[i][j+1] !== map[i][j]){
			if(answer < k)
				answer = k;
			return ;
		}
		left_dfs(i, j+1, k+1);
	}

	const down_dfs = (i, j, k) => {
		if(i + 1 === N || map[i+1][j] !== map[i][j]){
			if(answer < k)
				answer = k;
			return ;
		}
		down_dfs(i+1, j, k+1);
	}

	let tmp = 0;
	for(let i = 0; i < N; i++){
		for(let j = 0; j < N; j++){
				left_dfs(i, j, 1);
				down_dfs(i, j, 1);
		}
	}

	for(let i = 0; i < N; i++){
		for(let j = 0; j < N; j++){
			if(i+1 < N){
				swap(i, j, i+1, j);
				for(let i = 0; i < N; i++){
					for(let j = 0; j < N; j++){
							left_dfs(i, j, 1);
							down_dfs(i, j, 1);
					}
				}
				swap(i, j, i+1, j);
			}
			if(j+1 < N){
				swap(i, j, i, j+1);
				for(let i = 0; i < N; i++){
					for(let j = 0; j < N; j++){
							left_dfs(i, j, 1);
							down_dfs(i, j, 1);
					}
				}
				swap(i, j, i, j+1);
			}
		}
	}

	console.log(answer);
})
