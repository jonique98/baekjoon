import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class b1920 {
        public static void main(String[] args) throws IOException {

            StringBuilder answer = new StringBuilder();
                
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int cardNum = Integer.parseInt(br.readLine());
            int [] defaultCard = new int[cardNum];
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            for(int i = 0; i < cardNum; i++)
                defaultCard[i] = Integer.parseInt(st.nextToken());
            int findNum = Integer.parseInt(br.readLine());
            int [] findCard = new int[findNum];
            st = new StringTokenizer(br.readLine(), " ");
            for(int i = 0; i < findNum; i++)
                findCard[i] = Integer.parseInt(st.nextToken());
            Arrays.sort(defaultCard);
            for(int i = 0; i < findNum; i++){
                if(binarySearch(defaultCard, 0, cardNum, findCard[i]))
                    answer.append(1 + "\n");
                else
                    answer.append(0 + "\n");
            }
            System.out.println(answer);
    }

        static boolean binarySearch(int []arr, int low, int high, int value){
            int mid = (low + high) / 2;

            if(low == high)
                return false;
            if(arr[mid] == value)
                return true;
            else if(arr[mid] > value)
                return binarySearch(arr, low, mid - 1, value);
            else
                return binarySearch(arr, mid + 1, high, value);
        }
}