import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class b1967{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        ArrayList<ArrayList<Node>> map = new ArrayList<>();
        Queue<Node> q = new LinkedList<>();
        int n = Integer.parseInt(st.nextToken());
        int []distance = new int [n+1];

        for(int i = 0; i <= n; i++)
            map.add(new ArrayList<>());

        for(int i = 0; i < n-1; i++){
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int node = Integer.parseInt(st.nextToken());
            int value = Integer.parseInt(st.nextToken());
            map.get(s).add(new Node(node, value));
            map.get(node).add(new Node(s, value));
        }

        q.offer(new Node(1, 0));
        distance[1] = 1;
        int lastNode = bfs(map, distance, q);
        distance = new int [n+1];
        distance[lastNode] = 1;
        q.offer(new Node(lastNode, 0));
        int answerNode_index = bfs(map, distance, q);
        System.out.println(distance[answerNode_index] - 1);
    }

    static int bfs(ArrayList<ArrayList<Node>> map, int[] distance, Queue<Node> q){
        while(!q.isEmpty()){
            Node node = q.poll();
            for(int i = 0; i < map.get(node.node).size(); i++){
                int distNode = map.get(node.node).get(i).node;
                int dist = map.get(node.node).get(i).value;
                if(distance[distNode] == 0){
                    distance[distNode] = dist + distance[node.node];
                    q.offer(map.get(node.node).get(i));
                }
            }
        }
        int maxindex = 0;
        int maxValue = 0;
        for(int i = 0; i < distance.length; i++){
            if(distance[i] > maxValue){
                maxValue = distance[i];
                maxindex = i;
            }
        }
        return maxindex;
    }
}

class Node {

    int node;
    int value;
    Node(int node, int value){
        this.node = node;
        this.value = value;
    }
}