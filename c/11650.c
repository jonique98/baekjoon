#include <stdio.h>
#include <stdlib.h>

typedef struct s{
    int x;
    int y;
}num1;

    void merge(num1 *num, int left, int mid, int right, num1 *temp){
        int i, j;
        int k = left;

        i = left;
        j = mid + 1;
        while (i <= mid && j <= right){
            if (num[i].x == num[j].x){
                if(num[i].y < num[j].y)
                    temp[k++] = num[i++];
                else
                    temp[k++] = num[j++];
            }
            else if(num[i].x < num[j].x)
                temp[k++] = num[i++];
            else
                temp[k++] = num[j++];
        }

        if(i > mid){
            while(j <= right)
                temp[k++] = num[j++];
        }
        else{
            while (i <= mid)
                temp[k++] = num[i++];
        }
        while (left <= right){
            num[left] = temp[left];
            left++;
        }
    }

    void mergeSort(num1 *num, int left, int right, num1 *temp){
        int mid;

        if (left < right){
            mid = (left + right) / 2;
            mergeSort(num, left, mid, temp);
            mergeSort(num, mid + 1, right, temp);
            merge(num, left, mid, right, temp);
        }
    }


int main(){

    int len; 
    scanf("%d", &len);
    num1 *num = malloc(sizeof(struct s) * len);
    num1 *temp = malloc(sizeof(struct s) * len);
    for(int i = 0; i < len; i++){
        scanf("%d %d",&num[i].x, &num[i].y);
    }
    mergeSort(num, 0, len - 1, temp);
    for(int i = 0; i < len; i++){
        printf("%d %d\n", num[i].x, num[i].y);
    }
}
