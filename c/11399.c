#include <stdio.h>

#include <stdio.h>
#include <stdlib.h>

// 비교 함수 (오름차순으로 정렬하기 위해 사용)
int compare(const void* a, const void* b) {
    int num1 = *(int*)a;
    int num2 = *(int*)b;

    if (num1 < num2)
        return -1;
    else if (num1 > num2)
        return 1;
    else
        return 0;
}

int main() {
    int num;
    scanf("%d", &num);
    int arr[num];
    int a;
    for(int i = 0; i < num; i++){
        scanf("%d", &a);
        arr[i] = a;
    }
    int n = sizeof(arr) / sizeof(arr[0]);

    qsort(arr, n, sizeof(int), compare);

    int sum = 0;
    int k = num;
    for(int i = 0; i < num; i++) {
        sum += (arr[i]*k);
        k--;
    }
    printf("%d", sum);
    return 0;
}