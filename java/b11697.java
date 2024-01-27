import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class b11697 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());
        int [] distance = new int [100001];
        Queue<Integer> q = new LinkedList<Integer>();
        q.offer(x);
        bfs(y, distance, q);
        System.out.println(distance[y]);
    }

    static void bfs(int y, int[]distance, Queue<Integer> q){

        while(!q.isEmpty()){
            int x = q.poll();
            if(x == y)
                return;
            if(x - 1 >= 0 && distance[x - 1] == 0){
                distance[x - 1] = distance[x] + 1;
                q.offer(x - 1);
            }
            if(x + 1 <= 100000 && distance[x + 1] == 0){
                distance[x + 1] = distance[x] + 1;
                q.offer(x + 1);
            }
            if(x * 2 <= 100000 && distance[x * 2] == 0){
                distance[x * 2] = distance[x] + 1;
                q.offer(x * 2);
            }
        }
    }
}
