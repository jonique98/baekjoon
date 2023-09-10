import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class b10866 {
    public static void main(String[] args) throws IOException{

    StringBuilder sb = new StringBuilder();
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    int num = Integer.parseInt(reader.readLine());
    deque d = new deque(num);
    for(int i = 0; i < num; i++){
        StringTokenizer st = new StringTokenizer(reader.readLine());
        String a = st.nextToken();
        switch(a){
            case "push_front" :
                d.push_front(Integer.parseInt(st.nextToken()));
                break;
            case "push_back" :
                d.push_back(Integer.parseInt(st.nextToken()));
                break;
            case "pop_front" :
                sb.append(d.pop_front() + "\n");
                break;
            case "pop_back" :
            sb.append(d.pop_back() + "\n");
                break;
            case "size" :
            sb.append(d.get_size() + "\n");
                break;
            case "empty" :
                if(d.isEmpty())
                sb.append("1" + "\n");
                else 
                sb.append("0" + "\n");
                break;
            case "front" :
                sb.append(d.get_front() + "\n");
                break;
            case "back" :
                sb.append(d.get_back() + "\n");
                break;
        }
    }
    System.out.println(sb.deleteCharAt(sb.length() - 1));
    }


}

class deque{
    int []deque;
    int front;
    int rear;
    int size;

    deque(int len){
        deque = new int[len];
        front = rear = -1;
        size = 0;
    }

    void push_front(int x){
        if(isEmpty()){
            front = 0;
            rear = 0;
        }
        else if(front == 0)
            front = deque.length - 1;
        else 
            front--;
        deque[front] = x;
        size++;
    }

    void push_back(int x){
        if(isEmpty()){
            front = 0;
            rear = 0;
        }
        else if (rear == deque.length - 1)
            rear = 0;
        else 
            rear++;
        deque[rear] = x;
        size++;
    }

    int pop_front(){
        if(isEmpty())
            return -1;
        int value = deque[front];
        if(front == deque.length - 1)
            front = 0;
        else
            front++;
        size--;
        return value;
    }

    int pop_back(){
        if(isEmpty())
            return -1;
        int value = deque[rear];
        if(rear == 0)
            rear = deque.length - 1;
        else
            rear--;
        size--;
        return value;
    }

    
    int get_size(){
        return size;
    }
    
    boolean isEmpty(){
        return size == 0;
    }

    int get_front(){
        if(isEmpty())
            return -1;
        int value = deque[front];
        return value;
    }

    int get_back(){
        if(isEmpty())
            return -1;
        int value = deque[rear];
        return value;
    }

}




