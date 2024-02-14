const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	const T = Number(input[0]);
	let tmp = 0;
	let sum = 0;
	let asum = 0;
	const ans = [];
	for(let i = 0; i < T; i++){
		let arr = input[i * 2 + 2].split(' ').map(Number);
		sum = 0;
		asum = 0;
		tmp = 0;
		for(let j = 0; j < arr.length; j++){
			if(j === arr.length - 1){
				sum = sum + tmp*arr[arr.length -1];
				break;
			}
			if(arr[j] > arr[j+1]){
				if(tmp > 0){
					sum  = sum + tmp*arr[j] - asum;
					tmp = 0;
					asum = 0;
				}
				continue;
			}
			else if (arr[j] <= arr[j+1]){
				asum += arr[j];
				tmp++;
			}
		}
		ans.push(sum);
	}
	console.log(ans.join('\n'));
})