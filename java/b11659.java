import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class b11659 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        int len = Integer.parseInt(st.nextToken());
        int n = Integer.parseInt(st.nextToken());

        int []numbers = new int [len+1];
        st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= len; i++)
            numbers[i] = Integer.parseInt(st.nextToken());
        int []dp = new int[len+1];
        dp[1] = numbers[1];
        for(int i = 0; i < n; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int value = sum(b, numbers, dp) - sum(a - 1, numbers, dp);
            sb.append(String.valueOf(value) + "\n");
        }
        System.out.println(sb);
    }


    static int sum(int n, int []numbers, int[] dp){
        if(n < 1)
            return 0;
        if(dp[n] != 0)
            return dp[n];
        
        dp[n] = sum(n-1, numbers, dp) + numbers[n];
        return dp[n];
    }

}
