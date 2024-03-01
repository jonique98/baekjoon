const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {

	const k = Number(input[0]);

	let idx = 1;
	for(let i = 0; i < k; i++){
		const [v,e] = input[idx].split(' ').map(Number);
		idx++;

		const g = Array.from(Array(v+1), ()=>[]);
		const visit = Array.from(Array(v+1).fill(0));


		for(let j = idx; j < idx+e; j++){
			const tmp = input[j].split(' ').map(Number);
			g[tmp[0]].push(tmp[1]);
			g[tmp[1]].push(tmp[0]);
		}

		let flag = 0;

		const dfs = (vertex, color) => {
			for(node of g[vertex]){
				let tmp;
				if(color === 1)
					tmp = 2;
				else
					tmp = 1;

				if(visit[node] !== 0 && visit[node] !== color)
					continue;
				else if (visit[node] !== 0 && visit[node] === color){
					flag = 1;
					return ;
				}
				visit[node] = tmp;
				dfs(node, tmp);
			}
		}

		for(let i = 1; i <= v; i++){
			if(visit[i] === 0){
				visit[i] = 1;
				dfs(i, 1);
			}
			else
				dfs(i, visit[i])
		}

		if(flag === 1)
			console.log('NO')
		else
			console.log('YES')
		idx += e;
	}

})