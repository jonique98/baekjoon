let readline = require("readline");

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", (line)=> {
	input.push(line);
}).on("close", () => {

	const k = Number(input[0]);
	const arr = input[1].split(' ').map(Number);

	const ans = Array(k+1);
	for(let i = 0; i <= k; i++)
		ans[i] = '';


	const make = (arr, depth) => {

		if(depth > k || arr.length === 0)
			return;

		const mid = Math.floor(arr.length / 2);
		if(ans[depth].length === 0)
			ans[depth] += arr[mid].toString();
		else
		ans[depth] += ' ' + arr[mid].toString();
		const leftarr = arr.slice(0, mid);
		const rightarr = arr.slice(mid+1, arr.length);

		make(leftarr, depth + 1);
		make(rightarr, depth + 1);
	}

	make(arr, 1);

	console.log(ans.slice(1,ans.length).join('\n'))
})