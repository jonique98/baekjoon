#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define min(a,b)  (((a) < (b)) ? (a) : (b))

void quickSort(char **arr, int low, int high);

void swapStrings(char* str1, char* str2) {
    char temp[100];
    strcpy(temp, str1);
    strcpy(str1, str2);
    strcpy(str2, temp);
}

int partition(char **arr, int low, int high) {
    char pivot[100];
    strcpy(pivot, arr[high]);
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (strcmp(arr[j], pivot) < 0) {
            i++;
            swapStrings(arr[i], arr[j]);
        }
    }
    swapStrings(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(char **arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void sortStringArray(char **arr, int n) {
    quickSort(arr, 0, n - 1);
}


int main(){
    int dn;
    scanf("%d", &dn);
    int bn;
    scanf("%d", &bn);
    int msize = 0;

    msize = min(dn, bn);
    
    char **answer; 
    answer = malloc(msize * sizeof(char *));
    for(int i = 0; i < msize; i++)
        answer[i] = malloc(20 * sizeof(char));
    int k = 0;

    char darr[dn][20];
    char barr[bn][20];
    int cnt = 0;

    for(int i = 0; i < dn; i++){
        scanf("%s", darr[i]);
    }

    for(int i = 0; i < bn; i++){
        scanf("%s", barr[i]);
    }

    for(int i = 0; i < dn; i++){
        for(int j = 0; j < bn; j++){
            if(strcmp(darr[i], barr[j]) == 0){
                cnt++;
                strcpy(answer[k], barr[j]);
                k++;
                break;
            }
    }
    }
    quickSort(answer, 0, msize - 1);
    printf("%d\n", cnt);
    for(int i = 0; i < k; i++)
        printf("%s\n", answer[i]);
}