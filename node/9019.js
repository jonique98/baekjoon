const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const t = Number(input[0]);

	const darr = Array(10001).fill(-1);
	const sarr = Array(10001).fill(-1);
	const larr = Array(10001).fill(-1);
	const rarr = Array(10001).fill(-1);


	const d = (n) => {
		if(darr[n] !== -1)
			return(darr[n]);
		let tmp = (n*2%10000);
		darr[n] = tmp;
		return tmp;
	}

	const s = (n) => {
		if(sarr[n] !== -1)
			return(sarr[n]);
		let tmp =  n === 0 ? 9999 : (n-1);
		sarr[n] = tmp;
		return tmp;
	}

	const l = (n) => {
		if(larr[n] !== -1)
			return larr[n];
		return Math.floor(n % 1000 * 10 + n / 1000);
	}

	const r = (n) => {
		if(rarr[n] !== -1)
			return rarr[n];
		return Math.floor(n / 10 + n % 10 * 1000)
	}

	const ans = [];

	const bfs = (num, final) => {
		let visited = Array(10001).fill(0);
		visited[num] = 1;
		const q = [];
		q.push(['',num]);
		while(q.length !== 0){
			const [arr,n] = q.shift();
			if(n === final){
				ans.push(arr);
				return;
			}
			if(d(n) === final){
				ans.push(arr+'D')
				return;
			}
			if(s(n) === final){
				ans.push(arr+'S')
				return;
			}
			if(l(n) === final){
				ans.push(arr+'L')
				return;
			}
			if(r(n) === final){
				ans.push(arr+'R')
				return;
			}
			if(visited[d(n)] === 0){
				visited[d(n)] = 1;
				q.push([arr+'D', d(n)]);
			}
			if(visited[s(n)] === 0){
				visited[s(n)] = 1;
				q.push([arr+'S', s(n)]);
			}
			if(visited[l(n)] === 0){
				visited[l(n)] = 1;
				q.push([arr+'L', l(n)]);
			}
			if(visited[r(n)] === 0){
				visited[r(n)] = 1;
				q.push([arr+'R', r(n)]);
			}
		}
	}

	for(let i = 1; i <= t; i++){
		const arr = input[i].split(' ').map(Number);
		bfs(arr[0], arr[1]);
	}

	console.log(ans.join('\n'));
});