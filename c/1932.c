#include<stdio.h>
#include<stdlib.h>

int main(){
    int n;
    int *arr;
    scanf("%d",& n);
    int dp[n];
    int a;

    scanf("%d", &a);
    dp[0] = a;
    int index = 0;
    for(int i = 1; i < n; i++){
        arr = malloc((i+1) * sizeof(int));
        for(int j = 0; j < i+1; j++){
            scanf("%d", &a);
            arr[j] = a;
        }
        if(arr[index] > arr[index+1]){
            dp[i] = dp[i-1] + arr[index];
            printf("%d", arr[index]);
        }
        else {
            dp[i] = dp[i-1]+arr[index+1];
            index += 1;
            printf("%d", arr[index]);
        }
    }
    printf("%d", dp[n - 1]);
}