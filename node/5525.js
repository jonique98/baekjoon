let readline = require("readline");

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", (line)=> {
	input.push(line);
}).on("close", () => {

	let flag = false;
	let i_flag = false;
	let o_flag = false;
	let cnt = 0;
	let ans = 0;

	const str = input[2];
	for(let i = 0; i < str.length; i++){
		if(!flag && str[i] === 'I'){
			flag = true;
			continue;
		}

		if(o_flag && str[i] === 'O'){
				flag = false;
				o_flag = false;
				i_flag = false;
				cnt = 0;
				continue;
			}
		if(i_flag && str[i] === 'I'){
				i_flag = false;
				o_flag = false;
				cnt = 0;
				continue;
			}

		if(flag && str[i] === 'O')
			o_flag = true;
		if(str[i] === 'I'){
			if(o_flag)
				i_flag = true;
			else
				cnt = 0;
		}
		if(o_flag && i_flag){
			cnt++;
			if(cnt === Number(input[0])){
				ans++;
				cnt--;
			}
			i_flag = false;
			o_flag = false;
		}
	}

	console.log(ans);
})