const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
	const brr = Array.from(arr);

	arr.sort((a, b) => a - b);
	// let obj = {};
	let map = new Map();

	let j = 0;
	let min = arr[0];
	arr.forEach((num) => {
		if(num === min)
			map.set(num, j);
		else if (num > min){
			min = num;
			j++;
			map.set(num, j);
		}
	})

	brr.forEach((num,index) => {
		brr[index] = map.get(num);
	})

	console.log(brr.join(' '));
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   const N = Number(input[0]);
//   const arr = input[1].split(' ').map(Number);
//   const brr = Array.from(arr);

//   // 합병 정렬 함수 호출
//   mergeSort(arr, 0, N - 1);

//   let map = new Map();

//   let j = 0;
//   let min = arr[0];
//   arr.forEach((num) => {
//     if (num === min)
//       map.set(num, j);
//     else if (num > min) {
//       min = num;
//       j++;
//       map.set(num, j);
//     }
//   });

//   brr.forEach((num, index) => {
//     brr[index] = map.get(num);
//   });

//   brr.forEach((num) => process.stdout.write(num + ' '));
// });

// // 합병 정렬 구현
// function mergeSort(arr, left, right) {
//   if (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);

//     merge(arr, left, mid, right);
//   }
// }

// function merge(arr, left, mid, right) {
//   const n1 = mid - left + 1;
//   const n2 = right - mid;

//   const leftArray = new Array(n1);
//   const rightArray = new Array(n2);

//   for (let i = 0; i < n1; i++) {
//     leftArray[i] = arr[left + i];
//   }
//   for (let j = 0; j < n2; j++) {
//     rightArray[j] = arr[mid + 1 + j];
//   }

//   let i = 0;
//   let j = 0;
//   let k = left;

//   while (i < n1 && j < n2) {
//     if (leftArray[i] <= rightArray[j]) {
//       arr[k] = leftArray[i];
//       i++;
//     } else {
//       arr[k] = rightArray[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < n1) {
//     arr[k] = leftArray[i];
//     i++;
//     k++;
//   }

//   while (j < n2) {
//     arr[k] = rightArray[j];
//     j++;
//     k++;
//   }
// }

