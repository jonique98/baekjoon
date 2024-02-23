const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{

	map = Array.from(Array(19), ()=>Array(19));
	for(let i = 0; i < 19; i++){
		const arr = input[i].split(' ').map(Number)
		for(let j = 0; j < 19; j++){
			map[i][j] = arr[j];
		}
	}

	let ans = [];
	let flag = 0
	let six = 0;

	const right = (v, i, j) =>{
		if(j + 5 > 18)
			return false;
		if(j-1 >= 0){
			if(map[i][j-1] === v)
				return false;
		}
		for(let k = 0; k < 4; k++){
			if(map[i][++j] !== v)
				return false;
		}
		if(j+1 <= 18){
			if(map[i][++j] === v){
				six = 1
				return false;
			}
		}
		return true;
	}

	const down = (v, i, j) => {
		if(i + 5 > 18)
		return false;
		if(i-1 >= 0){
			if(map[i-1][j] === v)
				return false;
		}
	for(let k = 0; k < 4; k++){
		if(map[++i][j] !== v)
			return false;
	}
	if(i+1 <= 18){
		if(map[++i][j] === v){
			six = 1;
			return false
		}
	}
		return true;
	}

	const right_diagonal = (v, i, j) => {
	if(i + 5 > 18 || j + 5 > 18)
		return false;
	if(j-1 >= 0 && i-1 >= 0){
			if(map[i-1][j-1] === v)
				return false;
		}
	for(let k = 0; k < 4; k++){
			if(map[++i][++j] !== v)
				return false;
		}
	if(i+1 <= 18 && j+1 <= 18){
		if(map[++i][++j] === v){
			six = 1;
			return false
		}
	}
		return true;
	}

	const left_diagonal = (v, i, j) => {
		if(i - 5 < 0 || j - 5 < 0)
			return false;
		if(j+1 <= 18 && j+1 <= 18){
				if(map[i+1][j+1] === v)
					return false;
			}
		for(let k = 0; k < 4; k++){
				if(map[--i][--j] !== v)
					return false;
			}
		if(i-1 >= 0 && j-1 >= 0){
			if(map[--i][--j] === v){
				six = 1;
				return false
			}
		}
			return true;
		}


	for(let i = 0; i < 19; i++){
		for(let j = 0; j < 19; j++){
			if(map[i][j] !== 0){
				if(right(map[i][j], i, j)){
					flag = 1;
				}
				else if(down(map[i][j], i, j)){
					flag = 1;
				}
				else if(right_diagonal(map[i][j], i, j)){
					flag = 1;
				}
				else if(left_diagonal(map[i][j], i, j)){
					flag = 1;
				}
			}
			if(flag === 1){
				ans.push([i+1,j+1]);
				break;
			}
			flag = 0;
			six = 0;
		}
		if(flag === 1 && six === 0)
			break;
		six = 0;
		flag = 0;
	}

	if(ans.length > 0){
		console.log(1);
		console.log(ans[0].join(' '));
	}
	else{
		console.log(0);
	}

})