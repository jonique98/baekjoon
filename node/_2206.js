const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M;
let map, ans;
let visited;
let q;

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {

	const [n, m] = input[0].split(" ").map(Number);
	N = n;
	M = m;

	map = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
	visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));
	ans = Infinity;
	q = [];

	for(let i = 1; i <= N; i++){
		for(let j = 1; j <= M; j++){
			map[i][j] = Number(input[i].split('')[j-1]);
		}
	}

	bfs();

});

function bfs() {

		let m = [[0, 1], [0, -1], [1,0], [-1,0]];
		q.push([1, 1, 0, 1]);
		
		while(q.length !== 0){
			
			let temp = q.shift();
			let i = temp[0];
			let j = temp[1];
			let dis = temp[2];
			let cur = temp[3]

			if(i === N && j === M){
				ans = cur;
				break;
			}

			visited[i][j] = true;

			for(let k = 0; k < 4; k++){
				if( 
				i+m[k][0] >= 1 && i+m[k][0] <= N &&
				j+m[k][1] >= 1 && j+m[k][1] <= M &&
				!visited[i+m[k][0]][j+m[k][1]]){

					if (map[i+m[k][0]][j+m[k][1]] === 0)
						q.push([i+m[k][0], j+m[k][1], dis, cur+1]);
					else if (map[i+m[k][0]][j+m[k][1]] === 1 && dis === 0)
						q.push([i+m[k][0], j+m[k][1], 1, cur+1]);
				}
			}
		}
		
		if(ans === Infinity)
			console.log(-1)
		else
			console.log(ans);
}







// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let N, M;
// let map, ans;
// let visited;

// let input = [];

// rl.on("line", (line) => {
//   input.push(line);
// });

// rl.on("close", () => {

// 	const [n, m] = input[0].split(" ").map(Number);
// 	N = n;
// 	M = m;
// 	map = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
// 	visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));
// 	ans = Infinity;

// 	for(let i = 1; i <= N; i++){
// 		for(let j = 1; j <= M; j++){
// 			map[i][j] = Number(input[i].split('')[j-1]);
// 		}
// 	}

//     dfs(1, 1, true, 1);
//     if (ans === Infinity) {
//         console.log(-1);
//     } else {
//         console.log(ans);
//     }
// });

// function dfs(i, j, dis, cur) {
//     if (i === N && j === M) {
//         if (ans > cur) {
//             ans = cur;
//         }
//         return;
//     }

//     visited[i][j] = true;

//     if (i + 1 <= N && !visited[i + 1][j]) {
//         if (map[i + 1][j] === 0) {
//             dfs(i + 1, j, dis, cur + 1);
//         }
//         if (map[i + 1][j] === 1 && dis) {
//             dfs(i + 1, j, false, cur + 1);
//         }
//     }

//     if (i - 1 >= 1 && !visited[i - 1][j]) {
//         if (map[i - 1][j] === 0) {
//             dfs(i - 1, j, dis, cur + 1);
//         }
//         if (map[i - 1][j] === 1 && dis) {
//             dfs(i - 1, j, false, cur + 1);
//         }
//     }

//     if (j + 1 <= M && !visited[i][j + 1]) {
//         if (map[i][j + 1] === 0) {
//             dfs(i, j + 1, dis, cur + 1);
//         }
//         if (map[i][j + 1] === 1 && dis) {
//             dfs(i, j + 1, false, cur + 1);
//         }
//     }

//     if (j - 1 >= 1 && !visited[i][j - 1]) {
//         if (map[i][j - 1] === 0) {
//             dfs(i, j - 1, dis, cur + 1);
//         }
//         if (map[i][j - 1] === 1 && dis) {
//             dfs(i, j - 1, false, cur + 1);
//         }
//     }

//     visited[i][j] = false;
// }