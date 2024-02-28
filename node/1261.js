const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', ()=>{

	const [m,n] = input[0].split(' ').map(Number);

	const map = Array.from(Array(n), () => Array(m).fill(0));

	for(let i = 0; i < n; i++){
		const arr = input[i+1].split('').map(Number);
		for(let j = 0; j < m; j++)
			map[i][j] = arr[j];
	}

	const dist = Array.from(Array(n), () => Array(m).fill(Infinity));
	const bfs = () => {
		const q = [];
		q.push([0,0,0]);

		while(q.length > 0){
			const [y_,x_,v] = q.shift();

			const a = [1,-1,0,0];
			const b = [0,0,-1,1];

			for(let i = 0; i < 4; i++){
				const y = y_ + a[i];
				const x = x_ + b[i];
				if(x >= 0 && x < m && y >= 0 && y < n){
					if(map[y][x] === 0 && dist[y][x] > v){
						dist[y][x] = v;
						q.push([y,x,v]);
					}
					else if (map[y][x] === 1 && dist[y][x] > v + 1){
						dist[y][x] = v + 1;
						q.push([y,x,v+1]);
					}
				}
			}
		}
	}

	bfs();
	if(dist[n-1][m-1] === Infinity)
		console.log(0)
	else
		console.log(dist[n-1][m-1]);

})