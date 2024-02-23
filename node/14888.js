let readline = require("readline")

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) =>{
	input.push(line);
}).on("close", () => {



	const n = Number(input[0]);

	const arr = input[1].split(' ').map(Number);
	const op = input[2].split(' ').map(Number);

	let max = -Infinity;
	let min = Infinity;

	const dfs = (value, depth) => {
		if(depth === arr.length){
			if(value > max)
				max = value;
			if (value < min)
				min = value;
			return ;
		}

		for(let i = 0; i < 4; i++){
			if(op[i] > 0){
				op[i]--;
				if(i === 0)
					dfs(value + arr[depth], depth +1)
				if(i === 1)
					dfs(value - arr[depth], depth +1)
				if(i === 2)
					dfs(value * arr[depth], depth+1);
				if(i === 3){
					if(value < 0)
						dfs(Math.floor((value*-1) / arr[depth])*-1, depth+1);
					else
						dfs(Math.floor(value / arr[depth]), depth+1);
				}
				op[i]++;
			}
		}

	}
	dfs(arr[0], 1);
	console.log(max);
	console.log(min);
})