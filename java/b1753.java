// import java.util.*;
// import java.io.*;


// public class b1753 {
//     static int nodeNum;
//     public static void main(String[] args) throws IOException{
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         StringTokenizer st = new StringTokenizer(br.readLine());
//         nodeNum = Integer.parseInt(st.nextToken());
//         int n = Integer.parseInt(st.nextToken());

//         int startNode = Integer.parseInt(br.readLine());

//         PriorityQueue<Node> q = new PriorityQueue<>();
//         ArrayList<ArrayList<Node>> edge = new ArrayList<>();
//         boolean[] visited = new boolean [nodeNum+1];
//         int []distance = new int[nodeNum+1];

//         for(int i = 1; i <= nodeNum; i++)
//             distance[i] = Integer.MAX_VALUE;
//         for(int i = 0; i <= nodeNum; i++)
//             edge.add(new ArrayList<>());

//         for(int i = 0; i < n; i++){
//             st = new StringTokenizer(br.readLine());
//             int w = Integer.parseInt(st.nextToken());
//             int d = Integer.parseInt(st.nextToken());
//             int v = Integer.parseInt(st.nextToken());
//             edge.get(w).add(new Node(d, v));
//         }
//         q.add(new Node(startNode, 0));
//         distance[startNode] = 0;
//         Dijkstra(edge, distance, visited, q);
//         for(int i = 1; i <= nodeNum; i++){
//             if(!visited[i])
//                 System.out.println("INF");
//             else
//                 System.out.println(distance[i]);
//         }
//     }

//     static void Dijkstra(ArrayList<ArrayList<Node>> edge, int[]distance, boolean[] visited, PriorityQueue<Node> q){

//         while(!q.isEmpty()){        
//             int node = q.poll().vertex;
//             if(!visited[node]){
//                 visited[node] = true;
//                 for(int j = 1; j <= edge.get(node).size(); j++){
//                     if(distance[node] + edge.get(node).get(j-1).value < distance[edge.get(node).get(j-1).vertex]){
//                         distance[edge.get(node).get(j-1).vertex] = distance[node] + edge.get(node).get(j-1).value;
//                         q.add(edge.get(node).get(j-1));
//                     }
//                 }
//             }
//         }
//     }
    
// }


// class Node implements Comparable<Node> {
//     int vertex;
//     int value;

//     public Node(int v, int w) {
//         this.vertex = v;
//         this.value = w;
//     }

//     @Override
//     public int compareTo(Node p) {
//         return this.value - p.value; //오름차순 정렬
//     }
// }