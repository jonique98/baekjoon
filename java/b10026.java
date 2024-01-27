import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class b10026 {

    static int n;
    static Integer cnt = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = new String(br.readLine());
        n = Integer.parseInt(s);
        char [][]map = new char[n][n];
        boolean [][]distance = new boolean[n][n];
        Queue<Node> q = new LinkedList<>();
            for(int i = 0; i<n; i++) {
                s = new String(br.readLine());
                for(int j = 0; j<n; j++) {
                    char a = s.charAt(j);
                        map[i][j] = a;
                    }
            }
            q.offer(new Node(0,0));
            bfs(map, distance, q) ;
            System.out.print(cnt + " ");
            
            cnt = 0;
            for(int i = 0; i < n; i++){
                for(int j = 0; j < n; j++){
                    if(map[i][j] == 'G')
                        map[i][j] = 'R';
                }
            }
            q.offer(new Node(0,0));
            distance = new boolean[n][n];
            bfs(map, distance, q) ;
            System.out.println(cnt);
    }

    static void bfs(char[][]map, boolean[][]distance, Queue<Node> q){
        int []a = {-1, 1, 0, 0};
        int []b = {0, 0, -1, 1};
        int flag ;

        while (true){
            while(!q.isEmpty()){
                Node node = q.poll();
                distance[node.i][node.j] = true;
                for(int l = 0; l < 4; l++){
                    int i = node.i + a[l];
                    int j = node.j + b[l];
                    if(i >= 0 && i < n && j >= 0 && j < n) {
                        if (map[i][j] == map[node.i][node.j] && distance[i][j] == false) {
                            distance[i][j] = true;
                            q.offer(new Node(i, j));
                        }
                        }
                    }
                }
                cnt++ ;
                flag = 0;
                for(int i = 0; i < n; i++){
                    for(int j = 0; j < n; j++){
                        if(distance[i][j] == false){
                            flag = 1;
                            q.offer(new Node(i, j));
                            break;
                        }
                    }
                    if(flag == 1)
                        break ;
                }
                if (flag == 0)
                    break;
        }
    }

    // static void Cbfs(char[][]map, boolean[][]distance, Queue<Node> q){
    //     int []a = {-1, 1, 0, 0};
    //     int []b = {0, 0, -1, 1};
    //     int flag ;
        
    //     while (true){
    //         while(!q.isEmpty()){
    //             Node node = q.poll();
    //             distance[node.i][node.j] = true;
    //             for(int l = 0; l < 4; l++){
    //                 int i = node.i + a[l];
    //                 int j = node.j + b[l];
    //                 if(i >= 0 && i < n && j >= 0 && j < n) {
    //                     if (map[i][j] == map[node.i][node.j] && distance[i][j] == false){
    //                         q.offer(new Node(i, j));
    //                     }
    //                     else if (map[i][j] == 'G' && map[node.i][node.j] == 'R' && distance[i][j] == false){
    //                         q.offer(new Node(i, j));
    //                     }
    //                     else if (map[i][j] == 'R' && map[node.i][node.j] == 'G' && distance[i][j] == false){
    //                         q.offer(new Node(i, j));
    //                     }
    //                 }
    //             }
    //             }
    //             cnt++ ;
    //             flag = 0;
    //             for(int i = 0; i < n; i++){
    //                 for(int j = 0; j < n; j++){
    //                     if(distance[i][j] == false){
    //                         flag = 1;
    //                         q.offer(new Node(i, j));
    //                         break;
    //                     }
    //                 }
    //                 if(flag == 1)
    //                     break ;
    //             }
    //             if (flag == 0)
    //                 break;
    //     }
    // }

}

// class Node {
//     int i;
//     int j;
//     Node(int i, int j){
//         this.i = i;
//         this.j = j;
//     }
// }

