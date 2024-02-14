const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let a = Number(input[0].split(" ")[0]);
  let b = Number(input[0].split(" ")[1]);

  let arr = new Array(a + 1).fill(null).map(() => new Array(b + 1).fill(0));
  for (let i = 1; i <= a; i++) {
    let temp = input[i].split(" ");
    for (let j = 1; j <= b; j++) {
      arr[i][j] = Number(temp[j - 1]);
    }
  }

  let visited = new Array(a + 1).fill(null).map(() => new Array(b + 1).fill(false)); // 방문 여부를 기록할 배열
  let ans = [0];

	const h = (i, j) => {
		let max = 0;
		if (i - 2 >= 1 && j - 1 >= 1) 
			max = Math.max(max, arr[i][j] + arr[i - 1][j] + arr[i - 2] [j] + arr[i - 1][j - 1])
		if (i - 2 >= 1 && j + 1 <= b)
			max = Math.max(max, arr[i][j] + arr[i - 1][j] + arr[i - 2][j] + arr[i - 1][j + 1])
		if (i + 2 <= a && j - 1 >= 1)
			max = Math.max(max, arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 1][j - 1])
		if (i + 2 <= a && j + 1 <= b)
			max = Math.max(max, arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 1][j + 1])
		if (i - 1 >= 1 && j - 2 >= 1)
			max = Math.max(max, arr[i][j] + arr[i][j - 1] + arr[i][j - 2] + arr[i - 1][j - 1])
		if (i - 1 >= 1 && j + 2 <= b)
			max = Math.max(max, arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i - 1][j + 1])
		if (i + 1 <= a && j - 2 >= 1)
			max = Math.max(max, arr[i][j] + arr[i][j - 1] + arr[i][j - 2] + arr[i + 1][j - 1])
		if (i + 1 <= a && j + 2 <= b)
			max = Math.max(max, arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1])
		return max;
	}

  const dfs = (temp, i, j, cur) => {
    if (cur === 4) {
      if (temp > ans[0]) ans[0] = temp;
      return;
    }

    temp += arr[i][j];
    visited[i][j] = true; // 현재 위치를 방문했음을 표시

    if (j - 1 >= 1 && !visited[i][j - 1]) dfs(temp, i, j - 1, cur + 1);
    if (j + 1 <= b && !visited[i][j + 1]) dfs(temp, i, j + 1, cur + 1);
    if (i - 1 >= 1 && !visited[i - 1][j]) dfs(temp, i - 1, j, cur + 1);
    if (i + 1 <= a && !visited[i + 1][j]) dfs(temp, i + 1, j, cur + 1);

    visited[i][j] = false; // DFS가 종료되면 다른 경로에서 현재 위치를 방문할 수 있도록 방문 여부 초기화
  };

  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      dfs(0, i, j, 0);
			ans[0] = Math.max(ans[0], h(i, j));
    }
  }

  console.log(ans[0]);
});