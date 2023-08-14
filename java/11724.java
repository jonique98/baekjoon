import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.io.IOException;


public class b11724 {
    public static void main(String[] args) throws IOException{
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int nodeNum = Integer.parseInt(st.nextToken()); 
        int edgeNum = Integer.parseInt(st.nextToken());
        
        boolean []visited = new boolean[nodeNum+1];
        boolean [][] edge = new boolean[nodeNum+1][nodeNum+1];

        for(int i = 0; i < edgeNum; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            edge[a][b] = true;
            edge[b][a] = true;
        }
        Stack stack = new Stack(nodeNum);
        int cnt = 0;
        for(int i = 1; i < visited.length; i++){
            if(visited[i] == false){
                stack.push(i);
                visited[i] = true ;
                dfs(edge, visited, stack);
                cnt++;
            }
        }
        System.out.println(cnt) ;
    }

    static void dfs(boolean [][]edge, boolean []visited, Stack stack){

        while(!stack.isEmpty()){
            int node = stack.pop();
            for(int i = 1; i < visited.length; i++){
                if(visited[i] == false && edge[node][i] == true){
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
    }
}

class Stack{
    int []arr;
    int index;
    int size;
    
    Stack(int n){
        arr = new int[n];
        index = -1;
        size = 0;
    }

    boolean isEmpty(){
        return size == 0;
    }

    void push(int value){
        arr[++index] = value;
        size++;
    }

    int pop(){
        int value = arr[index];
        --index;
        --size;
        return value;
    }

}