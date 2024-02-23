const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{



	const h = input[0].split(' ').map(Number)[0];
	const w = input[0].split(' ').map(Number)[1];

	
	const map = Array.from(Array(h), ()=>Array(w).fill(0));

	const arr = input[1].split(' ').map(Number);
	for(let i = 0; i < w; i++){
		let j = h - arr[i];
		while(j < h){
			map[j][i] = 1;
			j++;
		}
	}

	let ans = 0;

	for(let i = 0; i < h; i++){
		let flag = -1;
		let sum = 0;
		for(let j = 0; j < w; j++){
			if(map[i][j] === 0)
				sum++;
			else if(map[i][j] === 1){
				if(flag !== -1){
					ans += sum;
				}
				sum = 0;
				flag = j;
			}
		}
	}


	console.log(ans);


})