const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', ()=>{
	const n = Number(input[0].split(" ")[0]);
	const x = Number(input[0].split(" ")[1]);

	const arr = input[1].split(" ").map(Number);

	let max = 0;
	let prev = 0;
	let day = 1;
	
	for(let i = 0; i <= n-x; i++) {
		let tmp = 0;
		if (i === 0)
		{
			for(let k = 0; k < x; k++)
				max += arr[k]
			prev = max;
		}
		else 
		{
			tmp = prev - arr[i-1] + arr[i+x-1];
			if (tmp === max)
				day+= 1;
			else if (tmp > max) {
				max = tmp;
				day = 1;
			}
			prev = tmp;
		}
	}
	if (max === 0)
		return (console.log('SAD'));
	console.log(max);
	console.log(day);
})