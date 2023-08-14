#include <stdio.h>

int main(){

    int a;
    scanf("%d", &a);

    int n = 2;

    for(int i = 1; i < a; i++)
        n *= 2;

    int y, x;
    scanf("%d", &y);
    scanf("%d", &x);

    int answer = 0;
    while(n >= 1){
        if (y >= n/2 && x >= n/2)
            answer += n*n - (n/2)*(n/2);
        else if (y >= n/2 && x < n/2)
            answer += n*n - 2*(n/2)*(n/2);
        else if (y < n/2 && x >= n/2)
            answer += n*n - 3*(n/2)*(n/2);
        else if (y < n/2 && x < n/2)
            answer += n*n - 4*(n/2)*(n/2);
        if (n == 1)
            break;
        y = y % (n/2);
        x = x % (n/2);
        n /= 2;
    }
    printf("%d", answer - 1);


}