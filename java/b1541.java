import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class b1541{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String a = br.readLine();

        int i = 0;
        int sum = 0;
        int flag = 0;
        while (i < a.length()){
            int num = 0;
            while(i < a.length() && a.charAt(i) != '+' && a.charAt(i) != '-'){
                num = num * 10 + Character.getNumericValue(a.charAt(i));
                i++;
            }
            if (flag == 1)
                sum -= num;
            else
                sum += num;
            if(i < a.length() && a.charAt(i) == '-'){
                flag = 1;
            }
            i++;
        }
        System.out.println(sum);
    }
}