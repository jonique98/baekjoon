const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = input.slice(1).map((row) => row.split(' ').map(Number));

const house = [];
const chicken = [];

for(let i = 0; i < N; i++){
	for(let j = 0; j < N; j++){
		if(map[i][j] === 1) house.push([i, j]);
		if(map[i][j] === 2) chicken.push([i, j]);
	}
}

const distance = (house, chicken) => {
	return Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
}

const combination = (arr, selectNum, i) => {
	if(selectNum.length === M){
		arr.push(selectNum);
		return;
	}
	while(i < chicken.length){
		combination(arr, [...selectNum, i], i + 1);
		i++;
	}
}

const sum = (distanceArr, arr) => {
	let res = 0

	for(let i = 0; i < distanceArr[0].length; i++){
		let min = Infinity;
		for(let j = 0; j < arr.length; j++){
			if(min > distanceArr[arr[j]][i])
				min = distanceArr[arr[j]][i];
		}
		res += min;
	}
	return res;
}

let distanceArr = [];
for(let i = 0; i < chicken.length; i++){
	let dis = [];
	for(let j = 0; j < house.length; j++){
		dis[j] = distance(house[j], chicken[i]);
	}
	distanceArr.push(dis);
}

let arr = [];
combination(arr, [], 0);

let min = Infinity;

for(let i = 0; i < arr.length; i++){
	temp = sum(distanceArr, arr[i]);
	if(min > temp)
		min = temp;
}

console.log(min);
