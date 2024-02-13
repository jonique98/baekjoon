// const readline = require("readline");

// function readLineAsync() {
//     return new Promise((resolve) => {
//       const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });

//       rl.question('', (input) => {
//         rl.close();
//         resolve(input);
//       });
//     });
//   }

// 	function dfs(map, cnt, state, cur, N) {
// 		if(cur[0] === N  && cur[1] === N)
// 		{
// 			cnt[0]++;
// 			return ;
// 		}
// 		if(state === 1){
// 			if(cur[0] + 1 <= N && cur[1] + 1 <= N){
// 				if(map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0)
// 					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
// 			}
// 			if(cur[1] + 1 <= N && map[cur[0]][cur[1] + 1] === 0){
// 				dfs(map, cnt, 1, [cur[0], cur[1] + 1], N)
// 			}
// 		}
// 		else if (state === 2){
// 			if(cur[0] + 1 <= N && cur[1] + 1 <= N){
// 				if(map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0)
// 					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
// 			}
// 			if(cur[0] + 1 <= N && map[cur[0] + 1][cur[1]] === 0)
// 				dfs(map, cnt, 3, [cur[0] + 1, cur[1]], N)
// 			if(cur[1] + 1 <= N && map[cur[0]][cur[1] + 1] === 0)
// 				dfs(map, cnt, 1, [cur[0], cur[1] + 1], N)
// 		}
// 		else if (state === 3){
// 			if(cur[0] + 1 <= N && cur[1] + 1 <= N){
// 				if(map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0)
// 					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
// 			}
// 			if(cur[0] + 1 <= N && map[cur[0] + 1][cur[1]] === 0)
// 				dfs(map, cnt, 3, [cur[0] + 1, cur[1]], N)
// 		}
// 	}

// const main = async () => {
// 	const N = Number(await readLineAsync());
// 	const map = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

// 	for(let i = 1; i <= N; i++) {
// 		const line = await readLineAsync();
// 		const input = line.split(" ").map(Number);
// 		for(let j = 1; j <= N; j++)
// 			map[i][j] = input[j - 1];
// 	}

// 	let cnt = [0];
// 	let cur = [1, 2];
// 	dfs(map, cnt, 1, cur, N);
// 	console.log(cnt[0]);
// }

// main();


const fs = require("fs");

	function dfs(map, cnt, state, cur, N) {
		if(cur[0] === N  && cur[1] === N)
		{
			cnt[0]++;
			return ;
		}
		if(state === 1){
			if(cur[0] + 1 <= N && cur[1] + 1 <= N &&
				map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0){
					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
			}
			if(cur[1] + 1 <= N && map[cur[0]][cur[1] + 1] === 0){
				dfs(map, cnt, 1, [cur[0], cur[1] + 1], N)
			}
		}
		else if (state === 2){
			if(cur[0] + 1 <= N && cur[1] + 1 <= N &&
				map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0){
					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
			}
			if(cur[0] + 1 <= N && map[cur[0] + 1][cur[1]] === 0)
				dfs(map, cnt, 3, [cur[0] + 1, cur[1]], N)
			if(cur[1] + 1 <= N && map[cur[0]][cur[1] + 1] === 0)
				dfs(map, cnt, 1, [cur[0], cur[1] + 1], N)
		}
		else if (state === 3){
			if(cur[0] + 1 <= N && cur[1] + 1 <= N &&
				map[cur[0] + 1][cur[1]] === 0 && map[cur[0]][cur[1] + 1] === 0 && map[cur[0] + 1][cur[1] + 1] === 0){
					dfs(map, cnt, 2, [cur[0] + 1, cur[1] + 1], N)
			}
			if(cur[0] + 1 <= N && map[cur[0] + 1][cur[1]] === 0)
				dfs(map, cnt, 3, [cur[0] + 1, cur[1]], N)
		}
	}

const main = () => {
	let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
	const N = Number(input[0]);
	const map = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

	for(let i = 1; i <= N; i++) {
		const line = input[i];
		const a = line.split(" ").map(Number);
		for(let j = 1; j <= N; j++)
			map[i][j] = a[j - 1];
	}

	let cnt = [0];
	let cur = [1, 2];
	if(map[N][N] === 1)
		return console.log(0);
	dfs(map, cnt, 1, cur, N);
	console.log(cnt[0]);
}

main();