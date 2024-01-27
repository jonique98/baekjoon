const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);


let map = Array.from(new Array(n + 1), () => []);

for(let i = 1; i <= m; i++){
	let line = input[i + 1].split(" ").map(Number);
	map[line[0]].push([line[1], line[2]]);
}

let distance = Array.from(new Array(n + 1), () => []);

for(let i = 1; i <= n; i++){
	for(let j = 1; j <= n; j++){
		distance[i][j] = Infinity;
	}
}

for(let i = 1; i <= n; i++){
		distance[i][i] = 0;
}

for(let i = 1; i <= n; i++){
	for(let j = 0; j < map[i].length; j++){
		if(map[i][j] && map[i][j][1] < distance[i][map[i][j][0]])
		distance[i][map[i][j][0]] = map[i][j][1];
	}
}

for(let k = 1; k <= n; k++){
	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= n; j++){
			distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
		}
	}
}

for(let i = 1; i <= n; i++){
	for(let j = 1; j <= n; j++){
		if(distance[i][j] === Infinity)
			distance[i][j] = 0;
	}
	let res = distance[i].join(' ');
	console.log(res.trim());
}