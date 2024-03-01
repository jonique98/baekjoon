const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{


	const valid = (a,b) => {
		if(Math.abs(a - b) >= l && Math.abs(a-b) <= r)
			return true;
		return false;
	}

	const check = () => {

		for(let i = 0; i < n; i++){
			for(let j = 0; j < n; j++){
				const v = map[i][j];
				const y = i-1;
				const x = j-1;

				if(y >= 0){
					if(!valid(v, map[y][j]))
						return false;
				}
				if(x >= 0){
					if(!valid(v, map[i][x]))
						return false;
				}
			}
		}
		return true
	}


	while(!check()){
		
	}

})