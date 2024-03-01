const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', ()=>{



	const [n,m] = input[0].split(' ').map(Number);
	const map = [];
	for(let i = 0; i < n; i++){
		const arr = input[i+1].split(' ').map(Number);
		map.push(arr);
	}

	visited = Array.from(Array(n), () => Array(m).fill(0));

	const bfs = (y_,x_, newmap) => {
		const q = [];
		q.push([y_,x_]);

		while(q.length > 0){
			const [i, j] = q.shift();
			const a = [-1,1,0,0];
			const b = [0,0,1,-1];
			for(let k = 0; k < 4; k++){
				const y = i + a[k];
				const x = j + b[k];
				if(y < 0 || y >= n || x < 0 || x >= m)
					continue;

				if(newmap[y][x] === 0){
					newmap[y][x] = 2;
					q.push([y,x]);
				}
			}
		}
	}

	const calc = (map) => {

		const newmap = Array.from(map, inArray => Array.from(inArray));


		for(let i = 0; i < n; i++){
			for(let j = 0; j < m; j++){
				if(newmap[i][j] === 2)
					bfs(i,j, newmap);
			}
		}

		let cnt = 0;
		for(let i = 0; i < n; i++){
			for(let j = 0; j < m; j++){
				if(newmap[i][j] === 0)
					cnt++;
			}
		}

		return cnt;

	}

	let answer = -Infinity;
	const dfs = (y,x, depth) => {

		if(depth === 3){
			let tmp = calc(map);
			if(tmp > answer)
				answer = tmp;
			return ;
		}

		for(let i = 0; i < n; i++){
			for(let j = 0; j < m; j++){
				if(map[i][j] === 0){
					map[i][j] = 1;
					dfs(i,j,depth+1)
					map[i][j] = 0;
				}
			}
		}

	}

	dfs(0,0,0);
	console.log(answer);
})