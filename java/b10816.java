import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.StringTokenizer;

public class b10816 {

    public static void main(String[] args) throws IOException {
        
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int cardNum = Integer.parseInt(br.readLine());
    int [] defaultCard = new int[cardNum];
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    for(int i = 0; i < cardNum; i++){
        defaultCard[i] = Integer.parseInt(st.nextToken());
    }
    int findNum = Integer.parseInt(br.readLine());
    HashMap <Integer, Integer> answer = new HashMap<>();
    int [] findCard = new int[findNum];
    int [] temp = new int[findNum];
    st = new StringTokenizer(br.readLine(), " ");
    for(int i = 0; i < findNum; i++){
        findCard[i] = Integer.parseInt(st.nextToken());
        answer.put(findCard[i], 0);
    }
    temp = Arrays.copyOf(findCard, findNum);
    qsort(findCard, 0, findCard.length -1);
    for(int i = 0; i < cardNum; i++){
        int index = binarySearch(findCard, 0, findCard.length - 1, defaultCard[i]);
        if(index != -1)
            answer.put(index, answer.get(defaultCard[i]) + 1); 
    }
    for(int i = 0; i < findNum; i++){
        if(i != findNum)
            System.out.print(answer.get(temp[i]) + " ");
    }
}


    static int upperBound(int []arr, int low, int high, int value){
        int mid = (low + high) / 2;

        if(low == high)
            return low;
        if(arr[mid] <= value)
            return upperBound(arr, mid + 1, high, value);
        else
            return upperBound(arr, 0, mid - 1, value);
    }

    static int lowerBound(int []arr, int low, int high, int value){
        int mid = (low + high) / 2;

        if(low == high)
            return low + 1;
        if(arr[mid] >= value)
            return lowerBound(arr, 0, mid - 1, value);
        else
            return lowerBound(arr, mid + 1, high, value);
    }


    static int binarySearch(int []arr, int low, int high, int value){
        int mid = (low + high) / 2;

        if(low == high && arr[mid] != value)
            return -1;
        if(arr[mid] == value)
            return value;
        else if (arr[mid] > value)
            return binarySearch(arr, 0, mid - 1, value);
        else
            return binarySearch(arr, mid + 1, high, value);
    }


    static void qsort(int []arr, int low, int high){

        int left = low;
        int right = high;
        int pivot = arr[(left + right) / 2];

        while(left <= right){
            while(arr[left] < pivot)
                ++left;
            while(arr[right] > pivot)
                --right;
            if(left <= right){
                    swap(arr, left, right);
                    left++;
                    right--;
            }
            if(left > right){
                if(left < high)
                    qsort(arr, left, high);
                if(right > low)
                    qsort(arr, low, right);
            }
    }
    }
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
