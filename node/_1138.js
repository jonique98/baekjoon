const readline=require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', ()=>{
	const N = Number(input[0]);

	const arr = input[1].split(" ").map(Number);
	const res = Array(N).fill(0);

	res[arr[0]] = 1;
	for(let i = 2; i <= N; i++) {
		let k = 0;
		for(let j = 0; j < N; j++){
			if(arr[i-1] === k && res[j] === 0) {
				res[j] = i;
				break;
			}
			if(res[j] === 0)
				k++;
		}
	}

	console.log(res.join(' '));
})