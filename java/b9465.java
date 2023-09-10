import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b9465 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        for(int k = 0; k < n; k++){
            int len = Integer.parseInt(br.readLine());
            int [][]dp = new int[2][len];
            int [][]numbers = new int [2][len];
            for(int i = 0; i < 2; i++){
                StringTokenizer st = new StringTokenizer(br.readLine());
                for(int j = 0; j < len; j++)
                    numbers[i][j] = Integer.parseInt(st.nextToken());
            }
            dp[0][0] = numbers[0][0];
            dp[1][0] = numbers[1][0];
            if(len > 1){
                dp[0][1] = numbers[1][0] + numbers[0][1];
                dp[1][1] = numbers[0][0] + numbers[1][1];
            }
            for(int i = 2; i < len; i++){
                dp[0][i] = numbers[0][i] + Max(dp[0][i-2], dp[1][i-1], dp[1][i-2]);
                dp[1][i] = numbers[1][i] + Max(dp[1][i-2], dp[0][i-1], dp[0][i-2]);
            }
            System.out.println(Max(dp[0][len-1], dp[1][len-1], 0));
        }
    }
    static int Max(int a, int b, int c){
        int max;
        if(a > b)
            max = a;
        else
            max = b;

        if(c > max)
            max = c;
        return max;
    }
}

