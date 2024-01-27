// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.util.LinkedList;
// import java.util.Queue;
// import java.util.StringTokenizer;

// public class b7576 {

//     static int m;
//     static int n;
//     static int h;
//     public static void main(String[] args) throws IOException{
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         StringTokenizer st = new StringTokenizer(br.readLine());
//         n = Integer.parseInt(st.nextToken());
//         m = Integer.parseInt(st.nextToken());
//         int [][]distance = new int[m+1][n+1];
//         Queue<Node> q = new LinkedList<>();
//             for(int i = 1; i<=m; i++) {
//                 st = new StringTokenizer(br.readLine());
//                 for(int j = 1; j<=n; j++) {
//                     int a = Integer.parseInt(st.nextToken());
//                     if(a == -1)
//                         distance[i][j] = -1;
//                     else if (a == 1){
//                         distance[i][j] = 1;
//                         q.offer(new Node(i, j));
//                     }
//                 }
//             }
//             bfs(distance,q);
//             int max = 0;
//                 for(int i = 1; i<=m; i++){
//                     for(int j = 1; j<=n; j++){
//                         if(distance[i][j] == 0){
//                             System.out.println("-1");
//                             System.exit(0);
//                         }
//                         if (distance[i][j] > max)
//                             max = distance[i][j];
//                     }
//                 }
//         System.out.println(max - 1);
//         }

//     static void bfs(int[][]distance, Queue<Node> q){
//         int []a = {-1, 1, 0, 0};
//         int []b = {0, 0, -1, 1};

//         while(!q.isEmpty()){
//             Node node = q.poll();
//             for(int l = 0; l < 4; l++){
//                 int i = node.i + a[l];
//                 int j = node.j + b[l];

//                 if(i > 0 && i < m + 1 && j > 0 && j < n + 1){
//                    if(distance[i][j] == 0){
//                     distance[i][j] = distance[node.i][node.j] + 1;
//                     q.offer(new Node(i, j));
//                 }   
//             }
//             }
//         }
//     }
// }

// class Node {
//     int i;
//     int j;
//     Node(int i, int j){
//         this.i = i;
//         this.j = j;
//     }
// }

