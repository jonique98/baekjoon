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

	let ans = arr[0];
	let temp = arr[0];
	for(let i = 1; i < arr.length; i++)
	{
		temp += arr[i];
		if (temp <= 0){
			if(arr[i] > ans)
				ans = arr[i];
			temp = 0;
			continue;
		}
		if(temp > ans)
			ans = temp;
	}
	console.log(ans);
})
