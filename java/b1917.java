// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;

// public class b1917 {
//     public static void main(String[] args) throws IOException{

//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//         StringBuilder sb = new StringBuilder();
//         int num = Integer.parseInt(br.readLine());
//         minimum_Heap h = new minimum_Heap(num);

//         for(int i = 0; i < num; i++){
//             int a = Integer.parseInt(br.readLine());
//             switch(a){
//                 case 0:
//                     sb.append(h.delete() + "\n") ;
//                     break ;
//                 default :
//                     h.insert(a);
//                     break;
//             }
//         }
//         System.out.println(sb);
//     }

// }

// class minimum_Heap{

//     int []arr;
//     int rear;
//     int size;

//     minimum_Heap(int num){
//         arr = new int [num + 1];
//         rear = 0;
//         size = 0;
//     }

//     void insert(int value){

//         if(rear == arr.length - 1)
//             arr = resize(arr);
//         arr[++rear] = value;
//         size++;
//         int temp = rear;
//         while(temp/2 > 0 && arr[temp/2] > arr[temp]){
//             swap(arr, temp/2, temp);
//             temp /= 2;
//         }
//     }

//     int delete(){

//         if(size == 0)
//             return 0;

//         int tempNum;
//         int tempIndex;
//         int compareIndex = 1;

//         int value = arr[compareIndex];
//         arr[compareIndex] = arr[rear];
//         arr[rear] = 0;
//         rear--;
//         size--;
//         while(compareIndex*2+1 < arr.length){
//             if(arr[compareIndex*2] == 0 && arr[compareIndex*2+1] == 0)
//                 break;
//             if(arr[compareIndex*2+1] == 0 || (arr[compareIndex*2] <= arr[compareIndex*2+1])){
//                 tempNum = arr[compareIndex*2];
//                 tempIndex = compareIndex*2;
//                 }
//             else{
//                 tempNum = arr[compareIndex*2+1];
//                 tempIndex = compareIndex*2+1;
//                 }
//             if(arr[compareIndex] > tempNum){
//                 swap(arr, compareIndex, tempIndex);
//                 compareIndex = tempIndex;
//             }
//             else
//                 break;
//             }
//             return value;
//     }

//     int[] resize(int []arr){
//         int []new_arr = new int[arr.length*2];
//         for(int i = 0; i < arr.length; i++)
//             new_arr[i] = arr[i];
//         return new_arr;
//     }

//     static void swap(int []arr, int i, int j){
//         int temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }

// }
