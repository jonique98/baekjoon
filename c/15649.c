 #include <stdio.h>
#include<stdlib.h>


int check(int n, int *answer, int depth){
    for(int i = 0; i < depth; i++){
        if(answer[i] == n)
            return 1;
    }
    return 0;
}


void dfs(int depth, int len, int numbers_len, int *arr, int *answer){
    if(depth == len){
        for(int i = 0; i < len; i++)
            printf("%d ", answer[i]);
        printf("\n");
        return;
    }
    for(int i = 0; i < numbers_len; i++){
        if(!check(arr[i], answer, depth)){
            answer[depth] = arr[i];
            dfs(depth+1, len, numbers_len, arr, answer);
        }
    }
    return;
}

int compare(const void *a, const void *b) {
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 < num2)
        return -1;
    else if (num1 > num2)
        return 1;
    else
        return 0;
}

int main(){

    int numbers_len;
    int len;

    scanf("%d", &numbers_len);
    scanf("%d", &len);

    int arr[numbers_len+1];
    int answer[len];

    for(int i = 0; i<numbers_len; i++){
        arr[i] = i+1;
    }

    qsort(arr, numbers_len, sizeof(int), compare);
    dfs(0, len, numbers_len, arr, answer);
}