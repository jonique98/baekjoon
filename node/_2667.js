const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
	input.push(line)}
).on("close", function(){
	let N = Number(input[0]);

	let map = [];
	for(let i =1; i <=N; i++)
		map.push(input[i].split('').map(Number));

	let ans1 = 0;
	let ans2 = [];

	const bfs = (r, c) => {

		let m1 = [-1, 1, 0, 0];
		let m2 = [0, 0, -1, 1];
		let q = [];
		q.push([r, c]);
		map[r][c] = 0;

		let n = 1;

		while(q.length > 0){
			let cur = q.shift();

			for(let k = 0; k < 4; k++){
				let i = cur[0] + m1[k];
				let j = cur[1] + m2[k];
				if(i >= 0 && i < N && j >= 0 && j < N){
					if(map[i][j] === 1){
						map[i][j] = 0;
						n++;
						q.push([i, j]);
					}
				}
			}
		}

		ans2.push(n);
	}

	for(let i = 0; i < N; i++){
		for(let j = 0; j < N; j++){
			if(map[i][j] === 1){
				ans1++;
				bfs(i, j);
			}
		}
	}

	console.log(ans1);
	if(ans2.length === 0)
		console.log(0);
	else
		console.log(ans2.sort((a,b) => a-b).join('\n'));

})
