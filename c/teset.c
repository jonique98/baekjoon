#include <stdio.h>

int fibonacci(int n, int *cnt0, int *cnt1) {
    if (n == 0) {
        *cnt0+= 1;
        return 0;
    } else if (n == 1) {
        *cnt1+= 1;
        return 1;
    } else {
        return fibonacci(n - 1, cnt0, cnt1) + fibonacci(n - 2, cnt0, cnt1);
    }
}


int main(){

    int num;
    int cnt0 = 0;
    int cnt1 = 0;
    scanf("%d", &num);

        for(int i = 0; i < num; i++) {
        int n;
        scanf("%d", &n);
        fibonacci(n, &cnt0, &cnt1);
        printf("%d %d\n", cnt0, cnt1);
        cnt0 = 0;
        cnt1 = 0;
        }

}

