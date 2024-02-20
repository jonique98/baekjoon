const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {



	let [n, m] = input[0].split(' ').map(Number);


	const map = Array.from(Array(n+1), ()=>Array(m+1));
	const visited = Array.from(Array(n+1), ()=>Array(m+1).fill(0));

	let di;
	let dj;
	for(let i = 1; i <= n; i++){
		const arr = input[i].split('');
		for(let j = 1; j <= m; j++){
			map[i][j] = arr[j-1];
			if(arr[j-1] === 'I'){
				di = i;
				dj = j;
			}
		}
	}
	let ans = 0;
	const bfs = () => {
		const q = [];
		q.push([di,dj]);
		visited[di][dj] = 1;

		const a = [0, 0, -1, 1];
		const b = [-1,1,0,0];
		while(q.length !== 0){
			const [i_,j_] = q.shift();
			if(map[i_][j_] === 'P')
				ans++;
			for(let k = 0; k < 4; k++){
				const i = i_+a[k];
				const j = j_+b[k];
				if(i > 0 && i <= n && j > 0 && j <= m && visited[i][j] === 0 && map[i][j] !== 'X'){
					visited[i][j] = 1;
					q.push([i,j]);
				}
			}
		}

		return ans;
	}


	bfs();
	ans === 0 ? console.log('TT') : console.log(ans);
})
