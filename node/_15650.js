const readline = require("readline");

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
	input.push(line);
}).on("close", () => {
	let N = Number(input[0].split(" ")[0]);
	let M = Number(input[0].split(" ")[1]);

	let result = [];


	const dfs = (d, arr, i) => {
		if(d === M){
			result.push(Array.from(arr));
			return ;
		}

		while(i <= N){
			arr[d] = i;
			dfs(d + 1, arr, i + 1);
			i++; 
		}
	}

	dfs(0, [], 1);
	console.log(result.map(V => V.join(' ')).join('\n'));
})
