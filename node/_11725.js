const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", function(line) {
	input.push(line)
}).on("close", function() {
	solution(input);
	process.exit();
});

function solution(input) {
	const N = Number(input[0]);
	const tree = Array.from(Array(N + 1), () => []);
	for (let i = 1; i < N; i++) {
		const [a, b] = input[i].split(' ').map((v) => Number(v));
		tree[a].push(b);
		tree[b].push(a);
	}
	const parent = Array(N + 1).fill(0);
	const queue = [1];

	while(queue.length) {
		const now = queue.shift();
		for (let i = 0; i < tree[now].length; i++) {
			const next = tree[now][i];
			if (parent[next] === 0) {
				parent[next] = now;
				queue.push(next);
			}
		}
	}
	for (let i = 2; i <= N; i++)
		console.log(parent[i]);
}

