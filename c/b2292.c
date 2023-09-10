#include<stdio.h>

int main(){

    int num;

    scanf("%d", &num);
    int a = 1;
    int i = 1;
    while(num > a){
        a += 6*i;
        i++;
    }
    printf("%d", i);
}
