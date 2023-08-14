// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.util.LinkedList;
// import java.util.Queue;
// import java.util.StringTokenizer;

// public class b7569 {
//     static int m;
//     static int n;
//     static int h;
//     public static void main(String[] args) throws IOException{
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         StringTokenizer st = new StringTokenizer(br.readLine());
//         m = Integer.parseInt(st.nextToken());
//         n = Integer.parseInt(st.nextToken());
//         h = Integer.parseInt(st.nextToken());
//         int [][][]distance = new int[h+1][n+1][m+1];
//         Queue<Node> q = new LinkedList<>();
//         for(int i = 1; i<=h; i++) {
//             for(int j = 1; j<=n; j++) {
//                 st = new StringTokenizer(br.readLine());
//                 for(int k = 1; k<=m; k++){
//                     int a = Integer.parseInt(st.nextToken());
//                     if(a == -1)
//                         distance[i][j][k] = -1;
//                     else if (a == 1){
//                         distance[i][j][k] = 1;
//                         q.offer(new Node(i, j, k));
//                     }
//                 }
//             }
//         }
//         bfs(distance,q);
//         int max = 0;
//         for(int i = 1; i<=h; i++){
//             for(int j = 1; j<=n; j++){
//                 for(int k = 1; k<=m; k++){
//                     if(distance[i][j][k] == 0){
//                         System.out.println("-1");
//                         System.exit(0);
//                     }
//                     if (distance[i][j][k] > max)
//                         max = distance[i][j][k];
//                 }
//             }
//     }
//     System.out.println(max - 1);
//     }

//     static void bfs(int[][][]distance, Queue<Node> q){
//         int []a = {-1, 1, 0, 0, 0, 0};
//         int []b = {0, 0, -1, 1, 0, 0};
//         int []c = {0, 0, 0, 0, -1, 1};

//         while(!q.isEmpty()){
//             Node node = q.poll();
//             for(int l = 0; l < 6; l++){
//                 int i = node.i + a[l];
//                 int j = node.j + b[l];
//                 int k = node.k + c[l];
//                 // System.out.println("i : " + i + " j : " + j + " k :" + k);
//                 if(i > 0 && i < h + 1 && j > 0 && j < n + 1 && k > 0 && k < m + 1){
//                    if(distance[i][j][k] == 0){
//                     distance[i][j][k] = distance[node.i][node.j][node.k] + 1;
//                     q.offer(new Node(i, j, k));
//                 }   
//             }
//             }
//         }
//     }
// }

// class Node {
//     int i;
//     int j;
//     int k;
//     Node(int i, int j, int k){
//         this.i = i;
//         this.j = j;
//         this.k = k;
//     }
// }
