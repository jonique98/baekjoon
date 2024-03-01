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

	const arr = [];
	for(let i = 1; i <=n; i++){
		arr.push(Number(input[i]));
	}


	const check = (arr) => {
		let tmp = arr[0];
		for(let i = 0; i < n; i++){
			if(arr[i] !== tmp){
				return false;
			}
		}
		return true;
	}

	const remake = (arr) =>{
		const arr = [];
		let tmp = arr[0];
		arr.push(tmp);
		for(let i = 1; i < arr.length; i++){
			if(arr[i] !== tmp){
				arr.push(arr[i]);
				tmp = arr[i];
			}
		}
	}

	const find = (arr) => {

		let min = Infinity;
		let idx1;
		let idx2;
		for(let i = 0; i < arr.length; i++){
			const j = i+1
			if(j === arr.length)
				break;
			if(Math.abs(arr[j] - arr[i]) < min){
				min = Math.abs(arr[j] - arr[i]);
				idx1 = i;
				idx2 = j
			}
		}

		console.log(min, idx1, idx2)
		return [min, idx1, idx2];
	}


	let cnt = 0;
	while(!check(arr)){
		arr = remake(arr);
	}


});