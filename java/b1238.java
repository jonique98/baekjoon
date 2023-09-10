import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;


public class b1238 {
    static ArrayList<ArrayList<Node>> map = new ArrayList<>();
    static PriorityQueue<Node> q = new PriorityQueue<>();
    static int nodeNum, edgeNum, startNode;
    static int[] distance;
    
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        nodeNum = Integer.parseInt(st.nextToken());
        edgeNum = Integer.parseInt(st.nextToken());
        startNode = Integer.parseInt(st.nextToken());


        distance = new int[nodeNum+1];

        for(int i = 0; i < distance.length; i++)
            distance[i] = Integer.MAX_VALUE;
        for(int i = 0; i <= edgeNum; i++)
            map.add(new ArrayList<>());
        for(int i = 0; i < edgeNum; i++){
            st = new StringTokenizer(br.readLine());
            int sn = Integer.parseInt(st.nextToken());
            int dn = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            map.get(sn).add(new Node(dn, v));
        }
        distance[startNode] = 0;
        q.add(new Node(startNode, 0));
        bfs();
        for(int i = 1; i <= nodeNum; i++){
            if(i == startNode)
                continue;
            q.add(new Node(i, 0));
            int d = bfs2();
            distance[i] += d;
        }
        int answer = 0;
        for(int i = 1; i <= nodeNum; i++){
            if(distance[i] >= answer)
                answer = distance[i];
        }
        System.out.println(answer);
    }

    static void bfs(){
        boolean []visited = new boolean[nodeNum+1];
        while(!q.isEmpty()){
            int node = q.poll().node;
            if(!visited[node]){
                visited[node] = true;
                for(int i = 0; i < map.get(node).size(); i++){
                    int dn = map.get(node).get(i).node;
                    int dv = map.get(node).get(i).value;
                    if(distance[node]+dv < distance[dn]){
                        distance[dn] = distance[node]+dv;
                    }
                    q.add(new Node(dn, distance[dn]));
                }
            }
        }
    }

    static int bfs2(){
        int []dist = new int[nodeNum+1];
        boolean []visited = new boolean[nodeNum+1];
        for(int i = 0; i < dist.length; i++)
            dist[i] = Integer.MAX_VALUE;
        dist[q.peek().node] = 0;
        while(!q.isEmpty()){
            int node = q.poll().node;
            if(!visited[node]){
                visited[node] = true;
                for(int i = 0; i < map.get(node).size(); i++){
                    int dn = map.get(node).get(i).node;
                    int dv = map.get(node).get(i).value;
                    if(dist[node]+dv < dist[dn]){
                        dist[dn] = dist[node]+dv;
                    }
                    q.add(new Node(dn, dist[dn]));
                }
            }
        }
        return dist[startNode];
    }

}


class Node implements Comparable<Node>{
    int node;
    int value;
    Node(int node, int value){
        this.node = node;
        this.value = value;
    }

    @Override
    public int compareTo(Node n){
        return this.value - n.value;
    }
}
