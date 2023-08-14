// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.nio.Buffer;
// import java.util.HashMap;
// import java.util.Hashtable;
// import java.util.Scanner;


// public class b1620 {
//     public static void main(String[] args) throws IOException{
//         Scanner sc = new Scanner(System.in);
//         StringBuilder sb = new StringBuilder();
//         int num = sc.nextInt();
//         int ansNum = sc.nextInt();
//         HashMap<Integer, String> hm = new HashMap<>();
//         for(int i = 1; i <= num; i++){
//             hm.put(i, sc.nextLine());
//         }
//         for(int j = 0; j < ansNum; j++){
//             String a = sc.nextLine();
//             try{
//                 int n = Integer.parseInt(a);
//                 sb.append(hm.get(n) + "\n");
//                 }catch(NumberFormatException e){
//                 for (HashMap.Entry<Integer, String> entry : hm.entrySet()) {
//                     if (entry.getValue().equals(a)) {
//                         sb.append(Integer.toString(entry.getKey()) + "\n");
//                         break;
//                     }
//                 }
//             }
//     }
//     System.out.println(sb);
//     sc.close();
// }
// }

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class b1620 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inputs = br.readLine().split(" ");
        int n = Integer.parseInt(inputs[0]);
        int m = Integer.parseInt(inputs[1]);

        HashMap<Integer, String> map_int = new HashMap<>();
        HashMap<String, Integer> map_str = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            String name = br.readLine();
            map_int.put(i, name);
            map_str.put(name, i);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= m; i++) {
            String tmp = br.readLine();
            if(isNum(tmp)){
                sb.append(map_int.get(Integer.parseInt(tmp))+"\n");
            }else{
                sb.append(map_str.get(tmp)+"\n");
            }
        }

        System.out.println(sb);
    }

    public static boolean isNum(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (!Character.isDigit(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}