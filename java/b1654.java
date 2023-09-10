import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b1654 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int n = Integer.parseInt(st.nextToken());

        int []num = new int[a];
        long low = 1;
        long max = 1;
        for(int i = 0; i < a; i++){
            num[i] = Integer.parseInt(br.readLine());
            if(num[i] >= max)
                max = num[i];
        }
        int answer = (int)binary(low, max+1, n, num);
        System.out.println(answer);
    }
    static long binary(long low, long high, int n, int[]num){

        while (low < high){
            int cnt = 0;
            long mid = (low + high) / 2;
            for(int i = 0; i < num.length; i++){
                cnt += num[i] / mid;
            }
            if(cnt >= n){
                low = mid + 1;
            }
            else
                high = mid;
        }
        return low - 1;
    }
}
