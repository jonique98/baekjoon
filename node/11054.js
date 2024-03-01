const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {


	const n = Number(input[0]);
	const arr = input[1].split(' ').map(Number);

	const asc = Array(n).fill(1);
	const desc =  Array(n).fill(1);

	for(let i = 0; i < n; i++){
		const v = arr[i];
		for(let j = 0; j < i; j++){
			if(arr[j] < v)
				asc[i] = Math.max(asc[i], asc[j]+1);
		}
	}


	for(let i = n-1; i >= 0; i--){
		const v = arr[i];
		for(let j = n-1; j > i; j--){
			if(arr[j] < v)
				desc[i] = Math.max(desc[i], desc[j]+1);
		}
	}

	let ans = -Infinity;
	for(let i = 0; i < n; i++){
		let tmp = asc[i]+desc[i];
		if(tmp > ans)
			ans=tmp;
	}

	console.log(ans-1);

})