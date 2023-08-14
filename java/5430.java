import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class b5430 {
    public static void main(String[] args) throws IOException{
    StringBuilder sb = new StringBuilder();
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int num = Integer.parseInt(br.readLine());

    for(int i = 0; i < num; i++){
        String move = br.readLine();
        int len = Integer.parseInt(br.readLine());
        circular_queue queue = new circular_queue(len + 1);
        int k = 0;

        String arr = br.readLine();
        for(int j = 0; j < arr.length(); j++){
            int n = 0;
            if(arr.charAt(j) == ',' || arr.charAt(j) == '[')
                j++;
            while(arr.charAt(j) != ',' && arr.charAt(j) != ']'){
                n = n * 10 + Character.getNumericValue(arr.charAt(j));
                j++;
            }
            queue.arr[k] = n;
            k++;
        }
        int cnt = 0;
        for(int j = 0; j < move.length(); j++){
            if(move.charAt(j) == 'D')
                cnt++;
        }
        if(queue.size < cnt){
            sb.append("error\n");
            continue;
        }
        sb.append("[");
        for(int j = 0; j < move.length(); j++){
            switch(move.charAt(j)){
                case 'R':
                    queue.reverse();
                    break;
                case 'D':
                    queue.pop();
            }
        }
        while(!queue.isEmpty()){
            int a = queue.pop();
            if(a != 0)
                sb.append(a);
            if(queue.size > 0)
                sb.append(",");
        }
        sb.append("]\n");
    }
    System.out.println(sb);
    }
}


class circular_queue{
    int []arr;
    int size;
    int front;
    int rear;
    circular_queue(int n){
        arr = new int[n];
        size = n - 1;
        front = 0;
        if(n == 1)
            rear = 0;
        else
            rear = n - 2;
    }

    boolean isEmpty(){
        return size == 0;
    }

    int pop(){
        if(isEmpty())
            return -1;
        int value = arr[front];
        if(rear >= front)
            ++front;
        else
            --front;
        --size;
        return value;
    }

    void reverse(){
        int temp = front;
        front = rear;
        rear = temp;
}
}