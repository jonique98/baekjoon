const readline=require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})
const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', ()=>{
	const N = Number(input[0])
	const arr = input[1].split(' ').map(Number);

	for(let i = arr.length - 1; i >=0; i--){
		if(i === 0)
			break;
		if(arr[i] > arr[i-1]){
			let tmp = i-1;
			let max = N+1;
			let idx = 0;
			for(let j = arr.length - 1; j > tmp; j--){
				if(arr[j] > arr[tmp] && arr[j] < max){
					max = arr[j];
					idx = j
				}
			}
			let a = arr[tmp];
			arr[tmp] = arr[idx];
			arr[idx] = a;

			// let answer = [
			// 	...arr.slice(0,tmp+1),
			// 	...arr.slice(tmp+1,arr.length).sort((a,b) => a - b)
			// ]
			let answer = arr.slice(0,tmp+1).concat(arr.slice(tmp+1,arr.length).sort((a,b) => a - b));
			return(console.log(answer.join(' ')));
		}
	}
	console.log(-1);
})