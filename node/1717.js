const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	const [n,m] = input[0].split(' ').map(Number);

	const arr = Array.from(Array(n+1), (_, index) => index);

	const find = (a) => {
		if(arr[a] !== a)
			arr[a] = find(arr[a]);
		return arr[a];
	}

	const union = (a,b) => {
		const rootA = find(a);
		const rootB = find(b);

		if(rootA < rootB)
			arr[rootB] = rootA;
		else
			arr[rootA] = rootB;
	}

	let answer = '';

	for(let i = 0; i < m; i++){
		const [op, a, b] = input[i+1].split(' ').map(Number);
		if(op === 0)
			union(a,b);
		else{
			if(find(a) === find(b))
				answer += 'YES\n'
			else
				answer += 'NO\n'
		}
	}

	console.log(answer.trim('\n'));
})



