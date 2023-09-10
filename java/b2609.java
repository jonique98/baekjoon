import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b2609 {
    public static void main(String[] args) throws IOException {

        int divisor = 0;
        int multiple = 0;

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String numbers = reader.readLine();
        StringTokenizer number = new StringTokenizer(numbers);
        int a = Integer.parseInt(number.nextToken());
        int b = Integer.parseInt(number.nextToken());
        for(int i = 1; i <= min(a, b); i++){
            if(a % i == 0 && b % i == 0){
                if(divisor < i)
                    divisor = i;
            }
        }
        for(int i = 1; i <= (a*b); i++){
            if(divisor*i % a == 0 && divisor*i % b == 0){
                multiple = divisor*i;
                break;
            }
        }

        System.out.println(divisor);
        System.out.println(multiple);
    }

    static int min(int a, int b){
        if (a < b)
            return a;
        else 
            return b;
    }
}
