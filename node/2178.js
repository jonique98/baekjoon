const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{

	const [n,m] = input[0].split(' ').map(Number);

	const map = Array.from(Array(n), () => Array(m).fill(0));
	for(let i = 0; i < n; i++){
		const arr = input[i+1].split('').map(Number);
		for(let j = 0; j < m; j++){
			map[i][j] = arr[j];
		}
	}


	const dist = Array.from(Array(n), () => Array(m).fill(Infinity));

	const bfs = () => {
		const q = [];
		q.push([0,0,0]);
		dist[0][0] = 0;

		while(q.length > 0){
			const [y,x,v] = q.shift();

			const a = [1,-1,0,0];
			const b = [0,0,1,-1];
			for(let i = 0; i < 4; i++){
				const y_ = y + a[i];
				const x_ = x + b[i];



				if(y_ < 0 || y_ >= n || x_ < 0 || x_ >= m)
					continue;

				if(map[y_][x_] === 1 && dist[y_][x_] > v+1){
					dist[y_][x_] = v+1;
					q.push([y_,x_,v+1]);
				}
			}
		}
	}

	bfs();
	console.log(dist[n-1][m-1]+1);
})