const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let T = parseInt(input[0]);
  let result = [];

  for (let i = 1; i <= T * 2; i += 2) { // 수정된 부분: 입력 배열을 올바르게 순회하기 위한 변경
    let N = parseInt(input[i]);

    if (N >= 33) {
      result.push(0);
    } else {
      let arr = input[i + 1].split(' ');

      let mem = new Set();

      for (let j = 0; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
          for (let l = k + 1; l < N; l++) {
            let tmp = 0;
            for (let m = 0; m < 4; m++) {
              if (arr[j][m] !== arr[k][m])
                tmp++;
              if (arr[j][m] !== arr[l][m])
                tmp++;
              if (arr[k][m] !== arr[l][m])
                tmp++;
            }
            mem.add(tmp);
          }
        }
      }
      result.push(Math.min(...mem));
    }
  }

  // 결과 출력
  result.forEach((r) => console.log(r));
});