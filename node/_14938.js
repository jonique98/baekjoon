const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const firstLine = input[0].split(" ").map((v) => Number(v));
const n = firstLine[0];
const m = firstLine[1];
const r = firstLine[2];

const items = input[1].split(" ").map((v) => Number(v));
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

for(let i = 0; i < n + 1; i++)
	graph[i][i] = 0;

for(let i = 2; i < input.length; i++) {
	const [a, b, c] = input[i].split(" ").map((v) => Number(v));
	graph[a][b] = c;
	graph[b][a] = c;
}

for(let k = 1; k <= n; k++) {
	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= n; j++)
			graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
	}
}

let max = 0;
for(let cur = 1; cur <= n; cur++) {
	let sum = 0;
	for(let i = 1; i <= n; i++) {
		if(graph[cur][i] <= m)
			sum += items[i - 1];
	}
	if(sum > max)
		max = sum;
}

console.log(max);
