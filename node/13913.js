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
	const visited = Array(200001).fill(-1);

	const q = [];
	q.push(n);
	visited[n] = n;

	const answer = [];

	const bfs = () => {
		while(q.length !== 0){
			const x = q.shift();
			if(x === k){
				let tmp = x;
				while(tmp !== visited[tmp]){
					answer.push(tmp);
					tmp = visited[tmp];
				}
				answer.push(n);
				return ;
			}

			if(x+1 <= 100000 && visited[x+1] === -1){
				visited[x+1] = x;
				q.push(x+1);
			}
			if(x-1 >= 0 && visited[x-1] === -1){
				visited[x-1] = x;
				q.push(x-1);
			}

			if(x*2 <= 200000 && visited[x*2] === -1){
				visited[x*2] = x;
				q.push(x*2);
			}
		}
	}

	bfs();
	console.log(answer.length-1);
	console.log(answer.reverse().join(' '));
})