function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    
    
    const map = Array.from(Array(102), () => Array(102).fill(0));
	const visited = Array.from(Array(102), () => Array(102).fill(0));
    
    for(let k = 0; k < rectangle.length; k++){
        const arr = rectangle[k];
        for(let i = arr[1]*2; i <= arr[3]*2; i++){
            for(let j = arr[0]*2; j <= arr[2]*2; j++){
                if(map[i][j] !== 2){
                    if(i === arr[1]*2 || j === arr[0]*2 || i === arr[3]*2 || j === arr[2]*2)
                        map[i][j] = 1;
                    else
                        map[i][j] = 2;
                }
            }
        }
    }

    
   const bfs = () => {
	let cnt = 0;
    const q = [];
    q.push([characterX*2, characterY*2, 0]);
	visited[characterX*2][characterY*2] = 1;
    while(q.length !== 0) {
        const [x_, y_, v] = q.shift();
        if(x_ === itemX*2 && y_ === itemY*2) {
            answer = v;
            return;
        }
        const a = [1,-1,0,0];
        const b = [0,0,1,-1];
        for(let i = 0; i < 4; i++){
            const x = x_ + a[i];
            const y = y_ + b[i];
            if(x > 0 && x < map[0].length && y > 0 && y < map.length && map[x][y] === 1 && visited[x][y] === 0){
                q.push([x, y, v+1]);
				visited[x][y] = 1;
			}
        }
    }
}

   
//    for(let i = 0; i < 50; i++){
//        let a = '';
//        for(let j = 0; j < 50; j++)
//            a+=map[i][j];
//        console.log(a)
//    }
   
    bfs();
    return answer / 2;
}

solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8)