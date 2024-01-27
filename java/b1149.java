import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class b1149{
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num = Integer.parseInt(st.nextToken());
        int [][]color = new int [3][num];
        for(int i = 0; i < num; i++){
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < 3; j++)
                color[j][i] = Integer.parseInt(st.nextToken());
        }
        int [][]dp = new int[3][num];
        dp[0][0] = color[0][0];
        dp[1][0] = color[1][0];
        dp[2][0] = color[2][0];
        for(int i = 1 ; i < num; i++){
            for(int j = 0; j < 3; j++){
            if (j == 0)
                dp[j][i] = color[j][i] + Math.min(dp[j+1][i-1], dp[j+2][i-1]);
            else if(j == 1)
                dp[j][i] = color[j][i] + Math.min(dp[j-1][i-1], dp[j+1][i-1]);
            else if(j == 2)
                dp[j][i] = color[j][i] + Math.min(dp[j-2][i-1], dp[j-1][i-1]);
            }
        }
        System.out.println(min_3(dp[0][num-1], dp[1][num-1], dp[2][num-1]));
    }

    static int min_3(int a, int b, int c){
        int value;
        if(a < b)
            value = a;
        else 
            value = b;
        if(value > c)
            value = c;

        return value;        
    }
}