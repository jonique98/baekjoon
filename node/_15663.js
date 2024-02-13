let readline = require("readline")

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) =>{
	input.push(line);
}).on("close", () => {
	
	let set = new Set();
	let N = Number(input[0].split(' ')[0]);
	let M = Number(input[0].split(' ')[1]);
	
	let num = input[1].split(' ').map(Number);
	let result = [];
	let visited = Array(N).fill(false);

	const dfs = (d, arr) => {
		if(d === M){
			if(!set.has(JSON.stringify(arr))){
				set.add(JSON.stringify(arr));
				result.push(Array.from(arr));
			}
			return ;
		}

		let i = 0;
		while(i < N){
			if(!visited[i])
			{
				visited[i] = true
				arr[d] = num[i];
				dfs(d + 1, arr);
				visited[i] = false
			}
			i++;
		}
	}

	const sf = (a, b) => {
		for(let i = 0; i < M; i++)
			if(a[i] !== b[i])
				return a[i] - b[i];
		return 0;
	}

	dfs(0, []);
	console.log(result.sort(sf).map((v) => v.join(' ')).join('\n'));
	
})