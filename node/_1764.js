const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", function(line) {
	input.push(line)
}).on("close", function() {
	let a = Number(input[0].split(' ')[0]);
	let b = Number(input[0].split(' ')[1]);

	let set = new Set();
	let pq = new PriorityQueue();

	let i = 1;
	while(i <= a)
		set.add(input[i++]);
	while(i <= a+b){
		if(set.has(input[i])){
			pq.enqueue(input[i]);
		}
		i++;
	}
	console.log(pq.queue.length);
	console.log(pq.queue.join('\n'));
});



class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => a.localeCompare(b));
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
