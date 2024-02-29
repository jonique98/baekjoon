let readline = require("readline")

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) =>{
	input.push(line);
}).on("close", () => {

	const [n,m] = input[0].split(' ').map(Number);

	const arr = Array(n);
	for(let i = 0; i < n; i++)
		arr[i] = i;

	const find = (a) => {
		if (arr[a] !== a) {
			arr[a] = find(arr[a]);
		}
		return arr[a];
	};

	const union = (a, b) => {
		const rootA = find(a);
		const rootB = find(b);
		if (rootA < rootB)
			arr[rootB] = rootA;
		else
			arr[rootA] = rootB;
	};

	for(let i = 0; i < m; i++){
		const arr = input[i+1].split(' ').map(Number);
		if(find(arr[0]) === find(arr[1])){
			return console.log(i+1);
		}
		union(arr[0], arr[1]);
	}
	console.log(0);
})