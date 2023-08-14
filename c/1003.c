#include <stdio.h>

int main(){
    int num;
    scanf("%d", &num);


    for(int i = 0; i < num; i++) {
        int n;
        scanf("%d", &n);
            int a[n + 1][2];
            a[0][0] = 1;
            a[0][1] = 0;
            a[1][0] = 0;
            a[1][1] = 1;
        for(int j = 2; j <= n; j++){
            a[j][0] = a[j-2][0] + a[j-1][0];
            a[j][1] = a[j-2][1] + a[j-1][1];
        }
        printf("%d %d\n", a[n][0], a[n][1]);
    }
}
