let readline = require("readline")

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) =>{
	input.push(line);
}).on("close", () => {

	const map = Array(101).fill(0);

	for(let i = 0; i < 101; i++)
		map[i] = i;

	const [n, m] = input[0].split(' ').map(Number);


	let i = 1;
	let len = input[0].split(' ').map(Number).reduce((p, c) => p+c);


	while(i <= len){
		const arr = input[i].split(' ').map(Number);
		map[arr[0]] = arr[1];
		i++;
	}

	const q = [];
	const visited = [];
	const bfs = () => {
		const move = [1,2,3,4,5,6];
		while(q.length !== 0){
			let[node,cnt] = q.shift();
			while(node !== map[node]){
				node = map[node];
				visited.push(node);
			}
			if(node === 100)
				return cnt;
			for(let i = 0; i < 6; i++){
				const newn = node + move[i];
				if(newn > 100 || visited.includes(newn))
					continue;
				visited.push(newn);
				q.push([newn, cnt+1]);
			}
	}
}

	q.push([1,0]);
	visited.push(1);
	answer = bfs();

	console.log(answer);


})
	