import java.util.Scanner;

public class b9095 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int []arr = new int [12];
        arr[1] = 1;
        arr[2] = 2;
        arr[3] = 4;

        for(int i = 0; i < n; i++){
            int a = sc.nextInt();
            for(int j =4; j<=a; j++){
                if(arr[j] == 0)
                    arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
            }
            System.out.println(arr[a]);
        }
    }
}
