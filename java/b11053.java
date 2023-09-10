import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b11053{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int []arr = new int[n+1];
        int []dp = new int[n+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= n; i++)
            arr[i] = Integer.parseInt(st.nextToken());
        int answer = 0;
        for(int i =1; i <=n; i++){
            for(int j = 1; j <= i; j++){
                if(arr[j] < arr[i] && dp[j]+1 > dp[i])
                    dp[i] = dp[j] + 1;
                    if(dp[i] > answer)
                        answer = dp[i];
            }
        }
        System.out.println(answer+1);
    }
}