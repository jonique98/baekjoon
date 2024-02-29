let readline = require("readline")

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) =>{
	input.push(line);
}).on("close", () => {

	const [n,m,x,y,k] = input[0].split(' ').map(Number);

	const map = Array.from(Array(n),()=>Array(m));

	for(let i = 0; i < n; i++){
		const arr = input[i+1].split(' ').map(Number);
		for(let j = 0; j < m; j++)
			map[i][j] = arr[j];
	}

	const ins = input[n+1].split(' ').map(Number);

	for(let i = 0; i < ins.length; i++){
		if(!dice.move(ins[i]))
			continue;
		dice.print();
	}


})