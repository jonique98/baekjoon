import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class b1966 {
    public static void main(String[] args) {

        List<Integer> answer = new ArrayList<Integer>();

        Scanner sc = new Scanner(System.in);
        int reapt = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < reapt; i++){
            String [] a= sc.nextLine().split(" ");
            queue q = new queue(Integer.parseInt(a[0]), Integer.parseInt(a[1]));
            String importances[] = sc.nextLine().split(" ");
            for(int j = 0; j < importances.length; j++){
                q.enqueue(Integer.parseInt(importances[j]));
            }
            int cnt = 0;
            while (true){
                while (q.getMax() != q.getDequeueValue()){
                    if (q.getDequeueIndex() == q.getTarget())
                        q.setTarget(q.getNextEnqueIndex());
                    q.enqueue(q.dequeue());
                }
                if (q.getMax() == q.getDequeueValue()){
                    if (q.getDequeueIndex() == q.getTarget())
                        break;
                    q.dequeue();
                    cnt++;
                    }
                }
                answer.add(++cnt);
            }
            for(int i = 0; i < answer.size(); i++){
                System.out.println(answer.get(i));
            }
        }
        
    }

class queue{
    private int [] queue;
    private int front;
    private int rear;
    private int target;

    queue(){}
    queue(int size, int target){
        queue = new int[size];
        front = rear = 0;
        size = 0;
        this.target = target;
    }

    void enqueue(int value){
        queue[rear] = value;
        rear = (rear + 1) % queue.length;
    }

    int dequeue(){
        int value = queue[front];
        queue[front] = -1;
        front = (front + 1) % queue.length;
        return value;
    }

    int getDequeueValue(){
        return queue[front];
    }

    int getDequeueIndex(){
        return front;
    }

    int getNextEnqueIndex(){
        return rear;
    }

    void setTarget(int target){
        this.target = target;
    }

    int getMax(){
        int max = 0;
        for(int i = 0; i < queue.length; i++){
            if(queue[i] > max){
                max = queue[i];
            }
        }
        return max;
    }

    int getTarget(){
        return target;
    }
}