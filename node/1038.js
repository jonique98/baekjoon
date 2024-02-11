const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let N = Number(input[0]);

	let i = 0;
	let cnt = 0;
	while(1){
		if(cnt === N)
			return (console.log(i));
		const tmp = i.toString();
		console.log(tmp);
		if(tmp.length > 10){
			return console.log(-1);
		}
		if(Number(i[0]) < tmp.length){
			i++;
			continue;
		}
		let flag = 0;
		for(let j = 0; j < tmp.length-1; j++){
			if(Number(tmp[j]) <= Number(tmp[j+1])){
				let k = tmp.length - j - 1;
				k = 10*k;
				i = i + (k - Number(tmp.slice(j+1, tmp.length))) - 1;
				flag = 1;
				break;
			}
		}
		if(flag === 1)
			continue;
		cnt++;
		i++;
	}
});