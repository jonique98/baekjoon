import java.util.Scanner;

public class b10773 {

    public static void main(String[] args) {
        
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    stack2 stack = new stack2(100000);
    for(int i = 0; i < num; i++){
        int value = sc.nextInt();
        stack.push(value);
        sc.nextLine();
        if(value == 0)
        {
            stack.pop();
            stack.pop();
        }
    }
    int res = 0;
    int size = stack.size;
    for(int i = 0; i < size; i++){
        res += stack.popValue();
        stack.pop();
    }
    System.out.println(res);
    sc.close();
}
    
}


class stack2{
    int [] stack;
    int top;
    int size;
    
    stack2(){}    
    stack2(int num){
        stack = new int[num];
        top = -1;
        size = 0;
    }

    boolean isEmpty(){
        return top == -1;
    }

    boolean isFull(){
        return top == size - 1;
    }

    boolean isIn(int num){
    
        if (isEmpty()){
            return false;
        }
        if (popValue() == num)
            return true;
        return false;
    }

    void push(int value){
        top++;
        stack[top] = value;
        size++;
    }

    void pop(){
        top--;
        size--;
    }

    int popValue(){
        int a = stack[top];
        return a;
    }
}
