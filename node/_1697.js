const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', ()=> {
	const n = Number(input[0].split(" ")[0]);
	const m = Number(input[0].split(" ")[1]);

	const q = [];
	const visited = new Array(200001).fill(0);
	visited[n] = 1;
	q.push([n, 0]);
	while(q.length !== 0) {
		let [v, d] = q.shift();
		if(v === m) {
			console.log(d);
			break;
		}
		if (v+1 === m || v-1 === m || v*2 === m) {
			console.log(d+1);
			break;
		}
		if (v < m)
		{
			if (visited[v+1] === 0) {
				visited[v+1] = 1;
				q.push([v+1, d+1]);
			}
			if (visited[v*2] === 0) {
				visited[v*2] = 1;
				q.push([v*2, d+1]);
			}
		}
		if (v-1 >= 0)
		{
			if(visited[v-1] === 0) {
				visited[v-1] = 1;
				q.push([v-1, d+1]);
			}
		}
	}
})