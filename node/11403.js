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

	const map = Array.from(Array(n), ()=>Array(n));

	for(let i = 0; i < n; i++){
		const arr = input[i+1].split(' ').map(Number);
		for(let j = 0; j < n; j++)
			map[i][j] = arr[j];
	}

	for(let k = 0; k < n; k++){
		for(let i = 0; i < n; i++){
			for(let j = 0; j < n; j++){
				if(map[i][j] === 0 && map[i][k] === 1 && map[k][j] === 1)
					map[i][j] = 1;
			}
		}
	}

	map.forEach(n => {
		console.log(n.join(' '));
	})

})