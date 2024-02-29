const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const [n,k] = input[0].split(' ').map(Number);

	const con = Array(n).fill(0);
	const arr = Array(k);

	const tmp = input[1].split(' ').map(Number);
	for(let i = 0; i < k; i++)
		arr[i] = tmp[i];

	const find_least = (idx) => {

		let tmp = -Infinity;
		let index;

		for(let i = 0; i < con.length; i++){
			let num = 0;
			for(let j = idx; j < arr.length; j++){
				if(arr[j] !== con[i])
					num++;
				else
					break;
			}
			if (tmp < num) {
					tmp = num;
					index = i;
				}
			}
			return index;
		}

	let answer = 0;
	for(let i = 0; i < k; i++){

		if(con.indexOf(arr[i]) !== -1)
			continue;

		const idx = con.indexOf(0);

		if(idx !== -1)
			con[idx] = arr[i];
		else{
			const index = find_least(i);
			con[index] = arr[i];
			answer += 1;
		}
	}

	console.log(answer);
})