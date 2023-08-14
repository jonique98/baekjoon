import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Queue;
import java.util.StringTokenizer;
import java.util.LinkedList;

public class b1260 {
    public static void main(String[] args) throws IOException {

        Queue<Integer> queue = new LinkedList<>();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());

        boolean[] visited = new boolean[N + 1];
        boolean [][] edge = new boolean[N + 1][N + 1];
        for(int i = 0; i < M; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            edge[a][b] = true;
            edge[b][a] = true;
        }
        visited[V] = true;
        System.out.print(V + " ");
        dfs(visited, edge, V);
        System.out.println("");

        visited = new boolean[N + 1];
        queue.add(V);
        bfs(visited, edge, queue);
        System.out.println(" ");
    }

    static void dfs(boolean[] visited, boolean[][] edge, int V){

        for(int i = 1; i < visited.length; i++){
            if(!visited[i] && edge[V][i]){
                System.out.print(i + " ");
                visited[i] = true;
                dfs(visited, edge, i);
            }
        }
    }

    static void bfs(boolean[] visited, boolean[][] edge, Queue<Integer> queue){
        
        while (!queue.isEmpty()){
            int V = queue.poll();
            if(!visited[V])
                System.out.print(V + " ");
            visited[V] = true;

        for(int i = 1; i < visited.length; i++){
            if(!visited[i] && edge[V][i] == true)
                queue.offer(i);
        }
    }

    }

}
