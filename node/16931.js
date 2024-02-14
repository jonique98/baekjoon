const readline = require('readline')
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [N,M] = input[0].split(' ').map(Number);

	const map = Array.from({length:N+2}, ()=>Array(M+2).fill(0));

	for(let i = 1; i <= N; i++){
		const tmp = input[i].split(' ').map(Number);
		for(let j = 1; j <= M; j++){
			map[i][j] = tmp[j-1];
		}
	}


	const a = [-1,1,0,0];
	const b = [0,0,-1,1];

	let ans = 0;
	for(let i = 1; i <= N; i++){
		for(let j = 1; j <= M; j++){
			for(let k = 0; k <4; k++){
				let i_ = i+a[k];
				let j_ = j+b[k];
				if(i_ >= 0 && i_ <= N+1 && j_ >= 0 && j_ <= M+1){
					if(map[i][j] < map[i_][j_])
						continue;
					ans = ans + map[i][j] - map[i_][j_];
				}
			}
			if(map[i][j] !== 0)
				ans+=2;
		}
	}

	console.log(ans);
})