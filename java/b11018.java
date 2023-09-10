import java.util.Scanner;

public class b11018 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        String numbers[] = a.split(" ");
        int row = Integer.parseInt(numbers[0]);
        int column = Integer.parseInt(numbers[1]);
        int cnt = 0;

        String [] chess = new String [row];
        for(int i = 0; i < row; i++){
            chess[i] = sc.nextLine();
        }
        for (int i = 0; i < row - 7; i ++){
            for (int j = 0; j < column - 7; j++){
                int temp = 0;
                char alp = 'W';
                    for (int k = i; k < i + 8; k++){
                        for(int l = j; l < j + 8; l++){
                            if (alp != chess[k].charAt(l))
                                temp++;
                            alp = change(alp);
                        }
                        alp = change(alp);
                    }
                    if ((i == 0 && j == 0) || temp < cnt)
                        cnt = temp;
                temp = 0;
                alp = 'B';
                     for (int k = i; k < i + 8; k++){
                         for(int l = j; l < j + 8; l++){
                            if (alp != chess[k].charAt(l))
                                    temp++;
                            alp = change(alp);
                        }
                         alp = change(alp);
                    }
                    if (temp < cnt)
                        cnt = temp;
                }
            }
            System.out.println(cnt);
            sc.close();
    }

    static char change(char alp){
        if (alp == 'W')
            return 'B';
        else
            return 'W';
    }
}
