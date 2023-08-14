// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.util.Queue;
// import java.util.StringTokenizer;
// import java.util.LinkedList;

// public class b2178 {
//     static int garo;
//     static int sero;
//     static int x;
//     public static void main(String[] args) throws IOException {
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         StringTokenizer st = new StringTokenizer(br.readLine());
//         sero = Integer.parseInt(st.nextToken());
//         garo = Integer.parseInt(st.nextToken());
        
//         Queue<Node> q = new LinkedList<>();
//         int [][]map = new int [sero+1][garo+1];
//         int [][]distance =new int [sero+1][garo+1];
//         for(int i = 0; i < sero; i++){
//             String a = br.readLine();
//             for(int j = 0; j < garo; j++){
//                 map[i+1][j+1] = Character.getNumericValue(a.charAt(j));
//             }
//         }
//         Node node = new Node(1, 1, map[1][1]);
//         q.offer(node);
//         bfs(map, distance, q);
//         System.out.println(distance[sero][garo] + 1);
//     }

//     static void bfs(int [][]map, int [][]distance, Queue<Node> q){

//         while(!q.isEmpty()){
//             Node node = q.poll();
//             if(node.cost == 1){
//                 if(node.n - 1 > 0 && distance[node.n - 1][node.m] == 0 && map[node.n - 1][node.m] == 1){
//                     distance[node.n - 1][node.m] = distance[node.n][node.m] + 1;
//                     q.offer(new Node(node.n - 1, node.m, 1));
//                 }
//                 if(node.n + 1 < sero + 1 && distance[node.n + 1][node.m] == 0 && map[node.n + 1][node.m] == 1){
//                     distance[node.n + 1][node.m] = distance[node.n][node.m] + 1;
//                     q.offer(new Node(node.n + 1, node.m, 1));
//                 }
//                 if(node.m - 1 > 0 && distance[node.n][node.m - 1] == 0 && map[node.n][node.m - 1] == 1){
//                     distance[node.n][node.m - 1] = distance[node.n][node.m] + 1;
//                     q.offer(new Node(node.n, node.m - 1, 1));
//                 }
//                 if(node.m + 1 < garo + 1 && distance[node.n][node.m + 1] == 0 && map[node.n][node.m + 1] == 1){
//                     distance[node.n][node.m + 1] = distance[node.n][node.m] + 1;
//                     q.offer(new Node(node.n, node.m + 1, 1));
//                 }
//             }
//         }
//     }

// }

// class Node{
//     int n;
//     int m;
//     int cost;
//     Node(int n, int m, int cost){
//         this.n = n;
//         this.m = m;
//         this.cost = cost;
//     }
// }
