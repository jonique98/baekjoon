import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b1932{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int [][]dp = new int [n+1][n+1];
        dp[1][1] = Integer.parseInt(br.readLine());
        StringTokenizer st;
        if(n > 1){
            st = new StringTokenizer(br.readLine());
            dp[2][1] = dp[1][1] + Integer.parseInt(st.nextToken());
            dp[2][2] = dp[1][1] + Integer.parseInt(st.nextToken());
        }
        for(int i = 3; i <= n; i++){
            st = new StringTokenizer(br.readLine());
            for(int j = 1 ; j <= i; j++){
                if(j == 1)
                    dp[i][j] = dp[i-1][j] + Integer.parseInt(st.nextToken());
                else if (j == i)
                    dp[i][j] = dp[i-1][j-1] + Integer.parseInt(st.nextToken());
                else
                    dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + Integer.parseInt(st.nextToken());
            }
        }
        int max = 0;
        for(int i = 1; i <= n; i++){
            if(dp[n][i] > max)
                max = dp[n][i];
        }
        System.out.println(max);
    }
}