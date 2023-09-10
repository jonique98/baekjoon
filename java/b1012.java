import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class b1012{

    static int garo;
    static int sero;
    static Integer cnt = 0;
    public static void main(String[] args) throws IOException {

        int n;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        n = Integer.parseInt(st.nextToken());
        for(int i = 0; i < n; i++){
            st = new StringTokenizer(br.readLine());
            garo = Integer.parseInt(st.nextToken());
            sero = Integer.parseInt(st.nextToken());
            int [][] map = new int [sero][garo];
            for(int j = Integer.parseInt(st.nextToken()); j > 0; j--){
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                map[b][a] = 1;
            }
            find(map, 0, 0);
            sb.append(cnt);
            if (i != n - 1)
                sb.append("\n");
            cnt = 0;
        }
        System.out.println(sb);
    }

    static void find(int arr[][], int i, int j){
        if(j > garo - 1){
            j = 0;
            i += 1;
        }
        if(i > sero - 1)
            return ;
        if(arr[i][j] == 1){
            // System.out.print("1의 위치 ");
            // System.out.print(i + " ");
            // System.out.print(j + " ");
            // System.out.println(" ");
            cnt++ ;
            makeZero(arr, i, j) ;
        }
        find(arr, i, j+1) ;
    }

    static void makeZero(int arr[][], int i, int j){

        if (i > sero - 1 || j > garo - 1 || j < 0 || i < 0)
            return;

        if (arr[i][j] == 1){
            arr[i][j] = 0;
            makeZero(arr, i + 1, j);
            makeZero(arr, i, j + 1);
            makeZero(arr, i - 1, j);
            makeZero(arr, i, j - 1);
        }
    }
}