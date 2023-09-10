import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class b10845 {

    public static void main(String[] args) throws IOException{
        
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    int num = Integer.parseInt(reader.readLine());
    queue1 q = new queue1(num);
    // List<Integer> answer = new ArrayList<Integer>();
    for(int i = 0; i < num; i++){
        StringTokenizer st = new StringTokenizer(reader.readLine());
        String a = st.nextToken();
        switch(a){
            case "push" :
                int n = Integer.parseInt(st.nextToken());
                q.push(n);
                break;
            case "pop" :
                q.pop();
                break;
            case "size" :
                q.getSize();
                break;
            case "empty" :
                q.isEmpty();
                break;
            case "front" :
                q.front();
                break;
            case "back" :
                q.back();
                break;
        }
    }
    }
}

class queue1{
    private int [] queue;
    private int front;
    private int rear;
    int size;

    queue1(){}
    queue1(int size){
        queue = new int[size];
        front = rear = 0;
        size = 0;
    }

    void isEmpty(){
        if(size == 0){
            System.out.println(1);
            return ;
        }
        System.out.println(0);
    }

    void push(int x){
        queue[rear] = x;
        rear += 1;
        size++;
    }

    void pop(){
        if(size == 0){
            System.out.println("-1");
            return ;
        }
        int value = queue[front];
        queue[front] = -1;
        front += 1;
        size--;
        System.out.println(value);
    }

    void getSize(){
        System.out.println(size);
    }

    void front(){
        if(size == 0){
            System.out.println("-1");
            return ;
        }
        System.out.println(queue[front]);
    }

    void back(){
        if(size == 0){
            System.out.println("-1");
            return ;
        }
        System.out.println(queue[rear - 1]);
    }

}