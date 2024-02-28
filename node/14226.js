const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input = [];
rl.on('line', (line)=>{
	input.push(line);
}).on('close', ()=>{


	const n = Number(input[0]);
	const visited = Array.from(Array(1025), () => Array(1025).fill(0));

	const q = [];
	q.push([1, 0, 0]);
	visited[1][0] = 1;

	const bfs = () => {
		while(q.length > 0){
			const [emoji, clip, second] = q.shift();
			if(emoji === n)
				return console.log(second);

			if(clip !== 0 && emoji+clip <= 1024 && visited[emoji+clip][clip] === 0){
				q.push([emoji+clip, clip, second+1]);
				visited[emoji+clip][clip] = 1;
			}
			if(emoji - 1 >= 2 && visited[emoji - 1][clip] === 0){
				q.push([emoji-1, clip, second+1]);
				visited[emoji-1][clip] = 1;
			}
			if(clip !== emoji && visited[emoji][emoji] === 0){
				q.push([emoji, emoji, second+1]);
				visited[emoji][emoji] = 1;
			}
		}
	}

	bfs();
})