import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class b2751 {
    public static void main(String[] args) throws IOException{

    StringBuilder sb = new StringBuilder();
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int num = Integer.parseInt(br.readLine());
    int [] arr = new int[num];
    for(int i = 0; i < num; i++)
        arr[i] = Integer.parseInt(br.readLine());
    int []temp = new int[arr.length];
    mergeSort(arr, 0, num - 1, temp);
    for(int i = 0; i < num; i++)
        sb.append(arr[i] + "\n");
    System.out.println(sb);
    }

    static void merge(int []arr, int left, int mid, int right, int []temp){
        int i, j;
        int k = left;

        i = left;
        j = mid + 1;
        while(i <= mid && j <= right){
            if(arr[i] <= arr[j])
                temp[k++] = arr[i++];
            else
                temp[k++] = arr[j++];
        }

        if(i > mid){
            while(j <= right)
                temp[k++] = arr[j++];
        }
        else{
            while (i <= mid)
                temp[k++] = arr[i++];
        }
        while (left <= right){
            arr[left] = temp[left];
            left++;
        }
    }
    
    
    static void mergeSort(int []arr, int left, int right, int []temp){
        int mid;

        if (left < right){
            mid = (left + right) / 2;
            mergeSort(arr, left, mid, temp);
            mergeSort(arr, mid + 1, right, temp);
            merge(arr, left, mid, right, temp);
        }
    }
}


