import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b2606 {
    static int a;
    static int b;
    public static void main(String[] args) throws IOException{
        int cnt = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        a = Integer.parseInt(br.readLine());
        b = Integer.parseInt(br.readLine());
        boolean [][] edge = new boolean[a+1][a+1];
        boolean[] visited = new boolean[a + 1];
        for(int i = 0; i < b; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());
            edge[n][m] = true;
            edge[m][n] = true;
        }
        dfs(1, edge, visited);
        for(int i = 0; i < visited.length; i++){
            if(visited[i])
                cnt++;
        }
        System.out.println(cnt - 1);
    }
    static void dfs(int n, boolean[][]edge, boolean[]visited){

        visited[n] = true;

        for(int i = 1; i <= a; i++){
            if(edge[n][i] && !visited[i])
                dfs(i, edge, visited);
        }
    }
}
