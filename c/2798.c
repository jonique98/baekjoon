#include <stdio.h>
int main(){
    int len;
    int maxNum;
    int num;
    scanf("%d", &len);
    scanf("%d", &maxNum);
    int a[len];
    for(int i = 0; i < len; i++){
        scanf("%d", &num);
        a[i] = num;
    }
    int max = 0;
    for(int i = 0; i < len - 2; i++){
        for(int j = i + 1; j < len - 1; j++){
            for(int k = j + 1; k < len; k++){
                if(a[i] + a[j] + a[k] <= maxNum && max < a[i] + a[j] + a[k])
                    max = a[i] + a[j] + a[k];
            }
        }
    }
    printf("%d", max);
}