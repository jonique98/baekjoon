import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;


public class b10828 {

    public static void main(String[] args) throws IOException{
        
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder answer = new StringBuilder();
    int num = Integer.parseInt(reader.readLine());
    Stack<Integer> s = new Stack<Integer>();
    for(int i = 0; i < num; i++){
        StringTokenizer st = new StringTokenizer(reader.readLine());
        String a = st.nextToken();
        switch(a){
            case "push" :
                int n = Integer.parseInt(st.nextToken());
                s.push(n);
                break;
            case "pop" :
                if (s.isEmpty()){
                    answer.append("-1" + "\n");
                    break;
                }
                answer.append(s.pop() + "\n");
                break;
            case "size" :
                answer.append(s.size() + "\n");
                break;
            case "empty" :
            if(s.isEmpty())
                answer.append("1" + "\n");
            else 
                answer.append("0" + "\n");
                break;
            case "top" :
            if (s.isEmpty()){
                answer.append("-1" + "\n");
                break;
            }
                answer.append(s.peek() + "\n");
                break;
        }
    }
    System.out.println(answer);
    }
}
