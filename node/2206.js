const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const [n,m] = input[0].split(' ').map(Number);

	const map = Array.from(Array(n), () => Array(m));
	for(let i = 0; i < n; i++){
		const arr = input[i+1].split('').map(Number);
		for(let j = 0; j < m; j++)
			map[i][j] = arr[j];
	}

	const dist = Array.from(Array(n), () => Array(m).fill(Infinity));
	const visit = Array.from(Array(n), () => Array(m).fill(0));

	class Q {
		constructor(){
			this.q = [];
		}
	
		push(v){
			this.q.push(v);
		}
	
		shif(){
			this.q.sort((a,b) => dist[a[0]][a[1]] - dist[b[0]][b[1]]);
			const ret = this.q[0];
			this.q = [...this.q.slice(1)];
			return ret;
		}
		length(){
			return this.q.length;
		}
	}


	const bfs = () => {
		const q = new Q();
		q.push([0,0,false,0]);
		dist[0][0] = 1;

		while(q.length() > 0){
			const [y_,x_,wall,v] = q.shif();
			visit[y_][x_] = 1;

			const a = [-1,1,0,0];
			const b = [0,0,-1,1];
			for(let i = 0; i < 4; i++){
				const y = y_+a[i];
				const x = x_+b[i];
				if(y < 0 || y >= n || x < 0 || x >= m)
					continue;

				if(map[y][x] === 0 && dist[y][x] > v + 1){
					dist[y][x] = v+1;
					if(visit[y][x] === 0)
						q.push([y,x,wall,v+1]);
				}
				else if (map[y][x] === 1 && !wall && dist[y][x] > v + 1){
					dist[y][x] = v+1;
					if(visit[y][x] === 0)
						q.push([y,x,true,v+1]);
				}
			}
		}
	}

	bfs();
	dist[n-1][m-1] === Infinity ? console.log(-1) : console.log(dist[n-1][m-1]+1)
})