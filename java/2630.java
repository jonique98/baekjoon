import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.io.IOException;

public class b2630 {

    static Integer w = 0;
    static Integer b = 0;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int [][]map = new int[num][num];
        for(int i = 0; i < num; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j = 0; j < num; j++)
                map[i][j] = Integer.parseInt(st.nextToken());
        }

        devide(map, 0, 0, num);
        System.out.println(w);
        System.out.println(b);
    }
    

    static void devide(int [][]map, int sero, int garo, int n){
        int wcnt = 0;
        int bcnt = 0;

        if (n == 0)
            return;
        for(int i = sero; i < sero+n; i++){
            for(int j = garo; j < garo+n; j++){
                if(map[i][j] == 1)
                    bcnt++;
                else
                    wcnt++;
            }
        }
        if(bcnt == n*n)
            b+= 1;
        else if(wcnt == n*n)
            w+= 1;
        else{
            int size = n/2;
            devide(map, sero, garo, size);
            devide(map, sero, garo + size, size);
            devide(map, sero + size, garo, size);
            devide(map, sero+size, garo+size, size);
            }
    }
}
