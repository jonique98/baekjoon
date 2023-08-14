#include <stdio.h>

void swap(int *arr, int a, int b);

void mergesort(int *arr, int low, int high){

}

void merge(int *arr, int low, int high){
    
}

void swap(int *arr, int a, int b){
    int temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

int main() {
    int num;
    int value;
    scanf("%d", &num);
    int answer[num];
    for(int i = 0; i < num; i++){
        scanf("%d", &value);
        answer[i] = value;
    }
    qsort(answer, 0, num - 1);
    for(int i = 0; i < num; i++)
        printf("%d\n", answer[i]);
}
