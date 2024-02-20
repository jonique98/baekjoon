const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// class PQ{

// 	constructor(){
// 		this.q = [];
// 	}

// 	push(n){
// 		this.q.push(n)
// 	}

// 	pop(){
// 		if(this.q.length === 0)
// 			return 0;
// 		this.q.sort(this.compare);
// 		let tmp = this.q.shift();
// 		return tmp;
// 	}

// 	compare(a,b){
// 		if(Math.abs(a) === Math.abs(b))
// 			return a - b
// 		return Math.abs(a) - Math.abs(b);
// 	}
// }

class PQ{
    
    constructor(compareFunc){
        this.q = [];
        this.idx = 1;
        this.length = 0;
        this.compare = compareFunc;
    }
    
    swap(i,j){
        let tmp = this.q[i];
        this.q[i] = this.q[j];
        this.q[j]=tmp;
    }
    
    push(n){
        if(this.idx === 1)
            this.q[this.idx] = n;
        else{
            this.q[this.idx] = n;
            let tmp = this.idx;
            while(tmp !== 1){
                let tmp2 = Math.floor(tmp/2);
                if(this.compare(this.q[tmp],this.q[tmp2]) > 0)
                    this.swap(tmp,tmp2);
                else{
                    this.q[tmp] = n;
                    break;
                }
                tmp = tmp2;
            }
        }
        this.idx++;
        this.length++;
    }
    
    pop(){
		if(this.length === 0)
			return 0;
        if(this.length !== 0){

            let ret = this.q[1];
            this.idx--;
            this.length--;

            this.q[1] = this.q[this.idx];
            let tmp = 1;
            while(this.idx !== 0 && tmp < this.length){
                let first = tmp*2;
                let second = tmp*2 + 1;
                if(first > this.length)
                    break;
                if(first === this.length){
                    if(this.compare(this.q[first],this.q[tmp]) > 0)
                        this.swap(first, tmp);
                    break;
                }
                let tmp2;
                if(this.compare(this.q[first],this.q[second]) > 0)
                    tmp2 = first;
                else
                    tmp2 = second;
                if(this.compare(this.q[tmp2],this.q[tmp]) > 0)
                    this.swap(tmp2, tmp);
                tmp = tmp2;
            }
            this.q.pop();
            return ret;
        }
    }
    
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const compare = (a,b) => {
		if(Math.abs(a) === Math.abs(b))
			return b - a
		return Math.abs(b) - Math.abs(a);
	}

const n = Number(input[0]);
let ans = [];
const pq = new PQ(compare);

for(let i = 1; i <= n; i++){
	if(Number(input[i]) === 0){
		ans.push(pq.pop());
	}
	else
		pq.push(Number(input[i]));
}

console.log(ans.join('\n'));

})