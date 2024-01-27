import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class b14002{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int []dp = new int[n+1];
        int []num = new int [n+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= n; i++)
            num[i] = Integer.parseInt(st.nextToken());

        int len = n;
        int result = 0;
        int maxindex = 0;
        for(int i = 1; i <= len; i++){
            dp[i] = 1;
            for(int j = 1; j <= i; j++){
                if(num[j] < num[i]){
                    if(dp[i] < dp[j]+1)
                        dp[i] = dp[j]+1;
                }
                if(dp[i] > result){
                    result = dp[i];
                    maxindex = i;
                }
            }
    }
    int maxvalue = num[maxindex];
    int k = 0;
    StringBuilder sb = new StringBuilder();
    for(int i = result; i > 0; i--){
        if(num[k] <= maxvalue){
            
        }
        maxindex--;
    }
    System.out.println(sb);
}
}

