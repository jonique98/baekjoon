import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class b11726{
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());

        int []dp = new int [a + 1];
        dp[1] = 1;
        if(a > 1)
        dp[2] = 2;
        if(a > 2)
        dp[3] = 3;
        for(int i = 4; i <= a; i++){
            dp[i] = (dp[i-1] + dp[i-2]) % 10007;
        }
        System.out.println(dp[a]);
    }
}