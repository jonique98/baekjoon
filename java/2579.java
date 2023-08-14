import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class b2579 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int []dp = new int[num];
        int []ans = new int [num];
        for(int i = 0; i < num; i++){
            ans[i] = Integer.parseInt(br.readLine());
        }
        dp[0] = ans[0];
        dp[1] = ans[0] + ans[1];
        if(num > 2)
            dp[2] = max(ans[0] + ans[2], ans[1]+ans[2]);
        // int answer = find(dp, ans, num - 1) ;
        for(int i = 3; i <= num-1; i++){
            dp[i] = ans[i] + max(ans[i-1] + dp[i-3], dp[i-2]);
        }
        System.out.println(dp[num-1]);
    }
    static int max(int a, int b){
        int max;
        if(a > b)
            max = a;
        else
            max = b;
        return max;
    }

    // static int find(int []dp, int []ans, int i){
    //     if (i == 0)
    //         return dp[0];
    //     else if (i == 1)
    //         return dp[1];
    //     else if (i == 2)
    //         return dp[2] ;
    //     else if (i < 0)
    //         return 0;
    //     dp[i] = ans[i] + max(ans[i-1] + find(dp, ans, i-3), find(dp, ans, i-2));
    //     return dp[i];
    // }
}
