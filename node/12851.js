const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });

  class queue{
	constructor(){
		this.q = [];
		this.size = 0;
		this.first = -1;
		this.last = -1;
	}
	size() {return this.size;}
	enq(k){
		this.q.push(k)
		this.last++;
		this.size++;
	};
	pop(){
		if(this.size === 0)
			return;
		this.size--;
		return this.q[++this.first];
	}

  }

  let input = [];
  rl.on("line", (line) => {
	input.push(line);
  }).on('close', () => {
	const N = Number(input[0].split(' ')[0])
	const K = Number(input[0].split(' ')[1])

	const visited = Array(200001).fill(0);

	const q = new queue();

	const bfs = () =>{

		let e = -1;
		let cnt = 0;
		while(q.size !== 0){
			const [a, v] = q.pop();
			visited[v] = 1;
			if(e === -1 && v === K){
				e = a;
				cnt++;
				continue;
			}
			else if (v === K && e === a){
				cnt++;
				continue;
			}
			else if (e !== -1 && a > e)
				break;
			if(v * 2 <= 200000){
				if(visited[v*2] === 0)
					q.enq([a+1, v*2]);
			}
			if(v + 1 <= K){
				if(visited[v+1] === 0)
					q.enq([a+1, v+1]);
			}
			if(v - 1 >= 0){
				if(visited[v-1] === 0)
					q.enq([a+1, v-1]);
			}
		}

		return [e, cnt];
	}

	q.enq([0,N]);
	const answer = bfs();
	console.log(answer.join('\n'));

  });