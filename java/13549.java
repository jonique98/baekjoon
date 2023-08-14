import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Scanner;

class b13549{
    static int []distance = new int[100001];
    static boolean []visited = new boolean[100001];
    static PriorityQueue<Node1> q = new PriorityQueue<>();

    public static void main(String[] args) {
        Arrays.fill(distance, Integer.MAX_VALUE);

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        distance[a] = 0;
        q.add(new Node1(a, distance[a]));
        bfs();
        System.out.println(distance[b]);
    }

    static void bfs(){
        while(!q.isEmpty()){
            Node1 node1 = q.poll();
            int node = node1.node;
            int dst = node1.distance;
            if(!visited[node]){
                visited[node] = true;
                if(node - 1 >= 0){
                    if(distance[node - 1] > dst + 1)
                        distance[node - 1] = dst + 1;
                    q.add(new Node1(node-1, distance[node-1]));
                }
                if(node + 1 <= 100000){
                    if(distance[node + 1] > dst + 1)
                        distance[node + 1] = dst + 1;
                    q.add(new Node1(node+1, distance[node +1]));
                }
                if(node * 2 <= 100000){
                    if(distance[node * 2] > dst)
                        distance[node * 2] = dst;
                    q.add(new Node1(node*2, distance[node * 2]));
            }
        }
    }
    }
}

class Node1 implements Comparable<Node1>{
    int node;
    int distance;
    Node1(int node, int distance){
        this.node = node;
        this.distance = distance;
    }
    @Override
    public int compareTo(Node1 n){
        return this.distance - n.distance;
    }
}