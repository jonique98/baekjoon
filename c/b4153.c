#include <stdio.h>

int main(){
    int i, j, k;


    while(1){
        scanf("%d", &i);
        scanf("%d", &j);
        scanf("%d", &k);
        if(i==0 && j==0 && k==0)
            break;
        if(i!=0 && j!=0 && k!=0 && (i*i + j*j == k*k ||j*j + k*k == i*i ||k*k + i*i == j*j)) {
            printf("right\n");
        }
        else
            printf("wrong\n");
    }
}
