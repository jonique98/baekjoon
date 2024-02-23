const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {

	const v = input[0].split(' ').map(Number)[0];
	const e = input[0].split(' ').map(Number)[1];

	const map = Array.from(Array(v+1), ()=>Array(v+1).fill(Infinity));

	for(let i = 0; i < e; i++){
		const arr = input[i+1].split(' ').map(Number);
		map[arr[0]][arr[1]] = arr[2];
		map[arr[1]][arr[2]] = arr[2];
	}

	let ans = 0;
	const dist = Array(v+1).fill(Infinity);
	const visited = [];

	for(let i = 1; i <= v; i++){
		if(map[1][i] !== Infinity)
			dist[i] = map[1][i];
	}
	visited.push(1);

	for(let k = 0; k < v-1; k++){
		let min = Infinity;
		let idx = 0;
		for(let i = 1; i <= v; i++){
			if(dist[i] < min && !visited.includes(i)){
				visited.push(i);
				min = dist[i];
				idx = i;
			}
		}
		ans += min;
		for(let i = 1; i <= v; i++){
			if(map[idx][i] < dist[i])
				dist[i] = map[idx][i];
		}
	}

	console.log(ans);

})