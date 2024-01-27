import java.util.Scanner;

public class b1676 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = 0;
        int a = sc.nextInt();
        while (a >= 5){
            cnt += a / 5;
            a /= 5;
        }
        System.out.println(cnt);
    }
}
