const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{
	let t = Number(input[0]);
	let e = input.slice(1, t*2+1);

	const f = (string, n) => {
		const dp = Array.from({length:string.length+1}, () => Array.from({length:string.length+1}).fill(0));

		for(let i = 0; i < string.length; i++) {
			for(let j = i; j < string.length; j++){
				if(string[i] === string[j])
					dp[i+1][j+1] = dp[i+1][j] + 1;
				else
					dp[i+1][j+1] = dp[i+1][j];
			}
		}

		let a = Infinity;
		let b = 0;
		for(let i = 1; i <= string.length; i++){
			let tmp = 0;
			for(let j = i; j <= string.length; j++){
				if (dp[i][j] > dp[i][j-1] && dp[i][j] <= n)
					tmp = j - i + 1;
				if (dp[i][j] === n) {
					if (j - i + 1 < a)
						a = j - i + 1;
					if (tmp > b)
						b = tmp;
					break;
				}
			}
		}
		if (a === Infinity || b === 0)
			return(console.log(-1));
		console.log(`${a} ${b}`);
	}

	for(let i = 0; i < e.length; i+=2) {		
		f(e[i], Number(e[i+1]));
	}
})