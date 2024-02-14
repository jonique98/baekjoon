
const readline = require('readline');

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
rl.on("line", (line) => {
	input.push(line);
}).on("close", () => {

	let ans = [];
	let s = [];

	const func = (pr, op) => {
			if(s.length > 0 && pr < s[s.length-1][0]){
				while(s.length > 0 && pr < s[s.length-1][0])
					ans.push(s.pop()[1]);
			}

			if(s.length >0 && pr === s[s.length-1][0]) {
				if ((s[s.length-1][1] === '*' || s[s.length-1][1] === '/')) {
					if(op === '+' || op === '-'){
						while(s.length !== 0 && pr === s[s.length-1][0])
							ans.push(s.pop()[1]);
					}
					else
						ans.push(s.pop()[1]);
				}
				
				else if ((s[s.length-1][1] === '+' || s[s.length-1][1] === '-')) {
					if((op === '+' || op === '-'))
							ans.push(s.pop()[1]);
				}
			}


		s.push([pr,op]);
	}

	let string = input[0];
	let pr = 0;

	for(let i = 0; i < string.length; i++){
		if('A' <= string[i] && string[i] <= 'Z')
			ans.push(string[i]);
		else if (string[i] === '(')
			++pr;
		else if (string[i] === ')')
			--pr;
		else
			func(pr, string[i]);
	}

	while(s.length !== 0)
			ans.push(s.pop()[1]);

	console.log(ans.join('').trim());

})

