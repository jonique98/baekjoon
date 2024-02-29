const readline=require('readline');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})
const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', ()=>{

	class Top{

		constructor(arr){
			this.arr = Array(arr.length);
			for(let i = 0; i < arr.length; i++){
				this.arr[i] = [...arr[i]]
			}
			this.length = arr.length;
		}

		rotate_left(i, d){
			if(i === 0)
				return;
			const j = i - 1;
			if(this.arr[i][6] !== this.arr[j][2]){
				this.rotate_left(j,!d);
				this.rotate(j,!d);
			}
		}

		rotate_right(i, d){
			if(i === this.length - 1)
				return;
			const j = i + 1;
			if(this.arr[i][2] !== this.arr[j][6]){
				this.rotate_right(j,!d);
				this.rotate(j,!d);
			}
		}

		rotate(i,d){
			if(d)
				this.r_rotate(i);
			else
				this.l_rotate(i);
		}

		r_rotate(i){
			const tmp = this.arr[i].pop();
			this.arr[i].unshift(tmp);
		}

		l_rotate(i){
			const tmp = this.arr[i].shift();
			this.arr[i].push(tmp);
		}

	}

	const n = Number(input[0]);
	const arr = Array(n);

	for(let i = 0; i < n; i++){
		const tmp = input[i+1].split('').map(Number);
		arr[i] = [...tmp];
	}

	const top = new Top(arr);
	const k = Number(input[n+1]);

	for(let j = n+2; j < n+k+2; j++){
		const [i,r] = input[j].split(' ').map(Number);
		let d;
		if(r === 1)
			d = true;
		else
			d = false;
		top.rotate_left(i-1, d);
		top.rotate_right(i-1, d);
		top.rotate(i-1,d);
	}


	let answer = 0;
	top.arr.forEach(n => {if(n[0] === 1) answer++})

	console.log(answer);
	// console.log(top.arr);
})