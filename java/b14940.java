// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.util.LinkedList;
// import java.util.Queue;
// import java.util.StringTokenizer;

// public class b14940 {
//     static int sero;
//     static int garo;
//     public static void main(String[] args) throws IOException {
        
//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//     StringTokenizer st = new StringTokenizer(br.readLine());

//     sero = Integer.parseInt(st.nextToken());
//     garo = Integer.parseInt(st.nextToken());

//     int [][]map = new int[sero][garo];
//     int [][] distance = new int [sero][garo];
//     for(int i = 0; i < sero; i++){
//         for(int j = 0; j < garo; j++){
//             distance[i][j] = -1;
//         }
//     }
//     Queue<Node> q = new LinkedList<>();

//     for(int i = 0; i < sero; i++){
//         st = new StringTokenizer(br.readLine());
//         for(int j = 0; j < garo; j++){
//             map[i][j] = Integer.parseInt(st.nextToken());
//         }
//     }

//     for(int i = 0; i < sero; i++){
//         for(int j = 0; j < garo; j++){
//             if(map[i][j] == 2){
//                 q.offer(new Node(i, j));
//                 distance[i][j] = 0;
//             }
//             else if (map[i][j] == 0)
//                 distance[i][j] = 0;
//         }
//     }

//     bfs(map, distance, q);
//     for(int i = 0; i < sero; i++){
//         for(int j = 0; j < garo; j++){
//             System.out.print(distance[i][j] + " ");
//         }
//         System.out.println("");
//         }
//     }  

//     static void bfs(int [][]map, int [][]distance, Queue<Node> q){

//         int []a = {1, -1, 0, 0};    
//         int []b = {0,0, 1, -1};    
    
//         while(!q.isEmpty()){
//             Node node = q.poll();
//             for(int i = 0; i < 4; i++){
//                 int y = node.sero + a[i];
//                 int x = node.garo + b[i];
//                 if(y >= 0 && x >= 0 && y < sero && x < garo){
//                     if(distance[y][x] == -1 && map[y][x] == 1){
//                         distance[y][x] = distance[node.sero][node.garo] + 1;
//                         q.offer(new Node(y, x));
//                     }
//                 }
//             }
//         }

//     }
// }

// class Node{
//     int sero;
//     int garo;
//     Node(int a, int b){
//         sero = a;
//         garo = b;
//     }
// }
