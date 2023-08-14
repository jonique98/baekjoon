#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
    int dn;
    scanf("%d", &dn);
    int bn;
    scanf("%d", &bn);

    char **answer; 
    answer = malloc(500000 * sizeof(char *));
    for(int i = 0; i < 500000; i++)
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
                strcpy(answer[k], darr[j]);
                k++;
                break;
            }
    }
    }
    printf("%d\n", cnt);
    for(int i = 0; i < k; i++)
        printf("%s\n", answer[i]);

}