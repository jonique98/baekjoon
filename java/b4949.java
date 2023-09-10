import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class b4949 {
    public static void main(String[] args) {

    List<String> answer = new ArrayList<String>();
    Scanner sc = new Scanner(System.in);

    while (sc.hasNextLine()){

        stack1 stack = new stack1(100);
        int flag = 0;
        String line = sc.nextLine();
        if(line.length() == 1 && line.charAt(0) == '.')
            break;
        for(int i = 0; i < line.length(); i++){
            if (line.charAt(i) == '(' || line.charAt(i) == '['){
                stack.push(line.charAt(i));
            }
            else if (line.charAt(i) == ')'){
                if(stack.isEmpty() || stack.popValue() != '('){
                    flag = 1;
                    break;
                }
                stack.pop();
            }
            else if (line.charAt(i) == ']'){
                if(stack.isEmpty() || stack.popValue() != '['){
                flag = 1;
                break;
                }
                stack.pop();
            }
        }
        if (stack.isEmpty() && flag == 0)
            answer.add("yes");
        else
            answer.add("no");
        }
    sc.close();
    for(int i = 0; i < answer.size(); i++)
        System.out.println(answer.get(i));
}
}

class stack1{
    char [] stack;
    int top;
    int size;
    
    stack1(){}    
    stack1(int num){
        stack = new char[num];
        top = -1;
        size = 0;
    }

    boolean isEmpty(){
        return size == 0;
    }

    boolean isFull(){
        return top == size - 1;
    }

    boolean isIn(char num){
    
        if (isEmpty()){
            return false;
        }
        if (popValue() == num)
            return true;
        return false;
    }

    void push(char value){
        top++;
        stack[top] = value;
        size++;
    }

    void pop(){
        top--;
        size--;
    }

    char popValue(){
        char a = stack[top];
        return a;
    }
}
