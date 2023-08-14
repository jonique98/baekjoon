// import java.util.Scanner;

// public class b1018 {
//     public static void main(String[] args) {
//         Scanner s = new Scanner(System.in);
//         String a = s.nextLine();
//         String [] numbers = a.split(" ");
//         int cnt = 0;
//         int [] length= new int[2];
//         length[0] = Integer.parseInt(numbers[0]);
//         length[1] = Integer.parseInt(numbers[1]);

//         String[][] chess = new String[length[0]][];
//         for(int i = 0; i < length[0]; i++){
//             chess[i] =
//         }
//         char alp = chess.charAt(0);
//         for(int j = 1; j < 8; j++){
//             if (j % length[1] == 0){
//                 if (alp == 'W')
//                     alp = 'B';
//                 else
//                     alp = 'W';
//             }
//             if (j % length[1] == 0){
//                 if (alp != chess.charAt(j)) {
//                     cnt++;
//                 }
//             }
//             else if(j % 2 == 1){
//                 if (alp == chess.charAt(j))
//                     cnt++;
//             }
//         }
//         System.out.println(cnt);
//     }
// }
