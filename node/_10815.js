const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });


  let input = [];
  rl.on("line", (line) => {
	input.push(line);
  }).on('close', () => {

	const N = Number(input[0]);
	const M = Number(input[2]);

	const arr1 = input[1].split(" ").map(Number).sort((a, b) => a - b);
	const arr2 = input[3].split(" ").map(Number);

	const ans = new Map();
	arr2.forEach(n => {
		ans.set(n, 0);
	})

	arr2.forEach(n => {
		let flag = 0
		let l = 0;
		let r = arr1.length - 1;
		while (l <= r)
		{
			let mid = Math.floor((l + r) / 2);
			if (arr1[mid] === n) {
				ans.set(n, 1);
				flag = 1;
				break;
			}
			if (arr1[mid] < n)
				l = mid + 1;
			else if (arr1[mid] > n)
				r = mid - 1;
		}
		if (flag === 0)
			ans.set(n, 0);
	})

	let res = '';
	ans.forEach((v, k) => {
		res += v + ' ';
	})
	console.log(res.trim());
  })