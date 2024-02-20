class pq{
    
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
                tmp = Math.floor(tmp/2);
            }
        }
        this.idx++;
        this.length++;
    }
    
    pop(){
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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let t = Number(input[0]);
	let n = 0;
	for(let i = 0; i < t; i++){
		
	}

})