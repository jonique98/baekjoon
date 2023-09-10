import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class b1874 {

    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int cnt = sc.nextInt();
    int [] array = new int[cnt];
    stack stack = new stack(cnt);
    List<String> pm = new ArrayList<String>();
    for(int i = 0; i < cnt; i++){
        array[i] = sc.nextInt();
    }
    int j = 1;
    int flag = 0;
    for(int i = 0; i < cnt; i++){
        if (stack.isIn(array[i])){
                stack.pop();
                pm.add("-");
                continue;
            }
        else {
            if (array[i] < j){
                System.out.println("NO");
                flag = 1;
                break;
            }
            while(j != array[i]){
                stack.push(j);
                pm.add("+");
                j++;
            }
            stack.push(j);
            pm.add("+");
            j++;
            stack.pop();
            pm.add("-");
        }
    }
    if (flag == 0){
        for(int i = 0; i < pm.size(); i++){
            System.out.println(pm.get(i));
        }
    }
}

}

class stack{
    int [] stack;
    int top;
    int size;
    
    stack(){}    
    stack(int num){
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
