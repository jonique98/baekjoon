#include<stdio.h>
#include <stdlib.h>

int main(){

    int *queue;
    int *answer;

    int N;
    int K;

    scanf("%d", &N);
    scanf("%d", &K);
    queue = malloc(N * sizeof(int));
    answer = malloc(N * sizeof(int));
    int n = N;
    for (int i = 0; i < N; i++){
        queue[i] = i + 1;
    }
    int i = -1;
    int j = 0;
    while (n > 0){
        int k = K;
        while(k > 0){
            i = (i + 1) % N;
            if(queue[i] == 0)
                continue;
            k--;
        }
        answer[j] = queue[i];
        queue[i] = 0;
        j++;
        n--;
   }
   i = 0;
   printf("<");
    while (i < N){
        if(i == N - 1)
            printf("%d", answer[i]);
        else
            printf("%d, ", answer[i]);
        i++;
    }
    printf(">");
}
