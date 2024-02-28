const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})


class Belt{
	constructor(arr){
		this.arr = [...arr];
		this.robot = Array(arr.length).fill(0);
		this.idx = 0;
		this.done_idx = this.arr.length - 1;
		this.step = 0;
	}

	rotate(){
		this.idx--;
		this.done_idx--;
		if(this.idx < 0)
			this.idx = arr.length - 1;
		if(this.done_idx < 0)
			this.done_idx = arr.length - 1;
		if(this.robot[this.done_idx] === 1)
			this.robot[this.done_idx] = 0;
		this.step++;
	}

	hardness(){
		return arr[this.idx];
	}

	robot_up(){
		if(arr[this.idx] > 0){
			this.robot[this.idx] = 1;
			arr[this.idx] -= 1;
		}
	}
	
	set_first_robot(){
		this.first_robot = this.idx;
		robot[this.idx] = 1;
	}

	robot_move(){
		let i = this.first_robot;
		let cnt = 0;
		while(cnt !== this.arr.length){
			let j = i;
			if(++j > this.arr.length)
				j = 0;
			if(this.robot[j] !== 1 && this.arr[j] > 0){
				this.robot[j] = 1;
				this.robot[i] = 0;
				this.arr[j]-=1;
				
			}
			cnt++;
			if(++i > this.arr.length)
				i = 0;
		}
	}

	robot_move

	done(k){
		let tmp = 0;
		for(let i = 0; i < this.arr.length; i++){
			if(this.arr[i] === 0)
				tmp++;
		}
		if(tmp >= k)
			return true;
		return false;
	}
}

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{

	const [n,k] = input[0].split(' ').mao(Number);

	const belt = new Belt(input[1].split(' ').mao(Number));

	while(!belt.done()){
		belt.rotate();

	}

})