const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const x = Number(input[0].split(" ")[0]);
const y = Number(input[0].split(" ")[1]);


const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

let i = 1; let j = 1;
let d = 0;
while (1) {
	if (i === x && j === y)
		break;
	if(i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
		if (j === 31) {
			i += 1;
			j = 0;
		}
	}
	else if(i === 4 || i === 6 || i === 9 || i === 11) {
		if (j === 30) {
			i += 1;
			j = 0;
		}
	}
	else if (i === 2) {
		if (j === 28) {
			i += 1;
			j = 0;
		}
	}
	j+=1;
	d = (d + 1) % 7;
}
console.log(day[d]);


