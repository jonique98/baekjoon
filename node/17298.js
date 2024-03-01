const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

class PQ {

	constructor(){
		this.q = []
		this.length = 1;
	}

	value(){
		return this.q[1];
	}

	push([i, v]){
		if(this.length === 1){
			this.q[this.length] = [i,v];
			this.length++;
			return ;
		}

		this.q[this.length] = [i,v];
		let curI = this.length;
		this.length++;
		while(curI > 1){
			let compareI = Math.floor(curI/2);
			if(this.q[curI][1] < this.q[compareI][1]){
				this.swap(curI, compareI);
				curI = compareI;
			}
			else
				return;
		}
	}

	shift(){
		if(this.length === 1)
			return;
		const ret = this.q[1];
		this.length--;

		this.q[1] = this.q[this.length]
		let curI = 1;
		while(curI < this.length){
			let compareI1 = curI*2;
			let compareI2 = curI*2+1;
			if(compareI1 >= this.length)
				break;
			if(compareI2 >= this.length){
				if(this.q[curI][1] > this.q[compareI1][1]){
					this.swap(curI, compareI1);
					break;
				}
			}
			let compareI;
			if(this.q[compareI1][1] < this.q[compareI2][1])
				compareI = compareI1;
			else
				compareI = compareI2;

			if(this.q[curI][1] > this.q[compareI][1]){
				this.swap(curI, compareI);
				curI = compareI;
			}
			else
				break;
		}
		this.q.pop();
		return ret;
	}


		swap(a,b){
			let tmp = this.q[a];
			this.q[a] = this.q[b];
			this.q[b] = tmp;
		}


}

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', () =>{

	const n = Number(input[0]);
	const arr = input[1].split(' ').map(Number);
	const ans = Array(n).fill(0);
	const q = new PQ();


	for(let i = 0; i < n; i++){
		const j = i+1;
		if(j === n)
			break;
		if(arr[j] <= arr[i]){
			q.push([i, arr[i]]);
		}
		else{
			ans[i] = arr[j];
			while(q.length > 1){
				const [idx, v] = q.value();
				if(arr[j] > v){
					ans[idx] = arr[j];
					q.shift();
				}
				else
					break;
			}

		}
	}

	for(let i = 0; i < ans.length; i++){
		if(ans[i] === 0)
			ans[i] = -1;
	}


	console.log(ans.join(' '));

})