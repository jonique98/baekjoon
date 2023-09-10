import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b9466 {
    
    static int cnt = 0;
    public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int a = Integer.parseInt(br.readLine());
    for(int k = 0; k < a; k++){
        int n = Integer.parseInt(br.readLine());
        cnt = 0;
        int arr[] = new int [n+1];
        boolean visited[] = new boolean[n+1];
        boolean finalVisited[] = new boolean[n+1];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++){
            arr[i+1] = Integer.parseInt(st.nextToken());
        }
        for(int i = 1; i <= n; i++){
            if(!finalVisited[i]){
                dfs(arr, visited, finalVisited, i);
            }
        }
        System.out.println(n - cnt);
    }
    }

    static void dfs(int []arr, boolean []visited, boolean []finalVisited, int nowNode){


        if(visited[nowNode]){
            finalVisited[nowNode] = true;
            cnt++;
        }
        else
            visited[nowNode] = true;
        int nextNode = arr[nowNode];
        if(!finalVisited[nextNode])
            dfs(arr, visited, finalVisited, nextNode);
        finalVisited[nowNode] = true;
        visited[nowNode] = false;
}
}
