import java.util.Scanner;

public class b2164 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        queue q = new queue(num);
        for(int i = 1; i <= num; i++){
            q.enqueue(i);
        }
        while (q.size() != 1) {
            q.dequeue();
            int a = q.dequeue();
            q.enqueue(a);
        }
        System.out.println(q.get());
    }
}

class queue{
    int front;
    int rear;
    int size;
    int [] queue;
    queue(){
    }
    queue(int size){
       front = rear = 0;
        queue = new int[size];
    }

    boolean isFull(){
        return size == queue.length;
    }
    boolean isEmpty(){
        return size == 0;
    }
    int size(){
        return size;
    }
    void enqueue(int value){
        queue[rear] = value;
        rear = (rear + 1) % queue.length;
        size++;
    }

    int dequeue(){
        int value = queue[front];
        front = (front + 1) % queue.length;
        size--;
        return value;
    }

    int get(){
        return queue[front];
    }

}