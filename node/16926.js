const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];



rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {


	const arr = input[0].split(' ').map(Number);
	const map = Array.from(Array(arr[0]),()=>Array(arr[1]));
	
	for(let i = 0; i < arr[0]; i++){
		const l = input[i+1].split(' ').map(Number);
		for(let j = 0; j < arr[1]; j++){
			map[i][j] = l[j];
		}
	}

	const rotate = (startY, endY, startX, endX) => {

		let tmp = map[startY][startX];
		let tmp2;
		for(let i = startY; i < endY; i++){
			tmp2 = map[i+1][startX];
			map[i+1][startX] = tmp;
			tmp = tmp2;
		}

		// console.log(map);

		for(let i = startX; i < endX; i++){
			tmp2 = map[endY][i+1];
			map[endY][i+1] = tmp;
			tmp = tmp2
		}
		// console.log(map);

		for(let i = endY; i > startY; i--){
			tmp2 = map[i-1][endX];
			map[i-1][endX] = tmp;
			tmp = tmp2
		}
		// console.log(map)

		for(let i = endX; i > startX; i--){
			tmp2 = map[startY][i-1];
			map[startY][i-1] = tmp;
			tmp = tmp2
		}

		// console.log(map)
	}



	


	for(let k = 0; k < arr[2]; k++){
	let startX=0;
	let endX = arr[1]-1;
	let startY = 0;
	let endY = arr[0]-1;
	while(startX < endX && startY < endY){
		rotate(startY, endY, startX, endX);
		startY++;
		startX++;
		endY--;
		endX--;
	}
}




	map.forEach(n => console.log(n.join(' ')));

})