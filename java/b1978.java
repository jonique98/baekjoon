
import java.util.Scanner;

public class b1978 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int cnt = 0;

        scanner.nextLine();

        // 입력된 값을 공백을 기준으로 나누어 배열에 저장합니다.
        String[] inputValues = scanner.nextLine().split(" ");

        // 정수 배열을 생성합니다.
        int[] numbers = new int[inputValues.length];

        // 문자열을 정수로 변환하여 배열에 저장합니다.
        for (int i = 0; i < inputValues.length; i++) {
            numbers[i] = Integer.parseInt(inputValues[i]);
        }

        for(int i = 0; i < numbers.length; i++){
            int flag = 0;
            for(int j =1 ; j < numbers[i]; j++){
                if(numbers[i] % j == 0){
                    flag++;
                }
            }
            if (flag == 1)
                cnt++;
        }
        System.out.println(cnt);
    }
    
}

