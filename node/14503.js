const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const [n,m] = input[0].split(' ').map(Number);
	const [y,x,d] = input[1].split(' ').map(Number);

	const map = [];
	for(let i = 2; i < n+2; i++){
		const arr = input[i].split(' ').map(Number);
		map.push(arr);
	}

	class Robot{
		constructor(x,y,d){
			this.x = x;
			this.y = y;
			this.direction = d;
			this.cnt = 0;
		}

		clean(){
			if(map[this.y][this.x] === 0){
				map[this.y][this.x] = 2;
				this.cnt++;
			}
		}

		rotate(){
			this.direction--;
			if(this.direction < 0)
				this.direction = 3;
		}

		valid(){
			const a = [1,-1,0,0];
			const b = [0,0,-1,1];
			for(let i = 0; i < 4; i++){
				const y = this.y + a[i];
				const x = this.x + b[i];
				if(y < 0 || x < 0 || y >= n || x >= m)
					continue;

				if(map[y][x] === 0)
					return true;
			}
			return false;
		}

		back(){
			let x = this.x;
			let y = this.y;
			if(this.direction === 0)
				y++;
			else if(this.direction === 1)
				x--;
			else if(this.direction === 2)
				y--;
			else
				x++;
			if(y < 0 || x < 0 || y >= n || x >= m || map[y][x] === 1)
				return false;
			this.x = x;
			this.y = y;
			return true;
		}

		move(){
			let x;
			let y;
			if(this.direction === 0){
				x = this.x;
				y = this.y-1;
			}
			else if(this.direction === 1){
				x = this.x+1;
				y = this.y;
			}
			else if(this.direction === 2){
				x = this.x;
				y = this.y+1;
			}
			else{
				x = this.x-1;
				y = this.y;
			}

			if(y < 0 || x < 0 || y >= n || x >= m)
				return;
			if(map[y][x] === 0){
				this.x = x;
				this.y = y;
			}
		}
	}

	const robot = new Robot(x,y,d);

	let cnt = 0;
	while(true){
		robot.clean();
		if(robot.valid()){
			robot.rotate();
			robot.move();
		}
		else if(!robot.back())
			break;
	}

	console.log(robot.cnt);
})