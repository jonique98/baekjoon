#include <string.h>
#include <stdlib.h>
#include <stdio.h>

int beast_num_checker(char *beast_num)
{
    int i;

    i = 0;
    while (beast_num[i])
    {
        if (beast_num[i] && beast_num[i] == '6')
        {
            if (beast_num[i + 1] && beast_num[i+1] == '6')
            {
                if (beast_num[i+2] && beast_num[i+2] == '6')
                    return (1);
            }
        }
        i++;
    }
    return (0);
}


char *itoa(int a)
{
    int num;
    int cnt;
    char *itoa_num;

    num = a;
    cnt = 0;
    while (num != 0)
    {
        num /= 10;
        cnt++;
    }

    itoa_num = malloc(cnt + 1);
    itoa_num[cnt] = '\0';
    cnt--;

    while (cnt >= 0)
    {
        itoa_num[cnt] = (a % 10) + '0';
        a /= 10;
        cnt--;
    }
    return (itoa_num);
}


int main()
{
    int a;
    int num;
    int cnt;
    int beast_num;
    
    beast_num = 666;
    cnt = 0;
    num = 0;
    while (1)
    {
        a = getc(stdin);
        if (a == '\n')
            break;
        num = num * 10 + (a - '0');
    }

    while (1)
    {
        if (beast_num_checker(itoa(beast_num)))
        {
            cnt++;
            if (cnt == num)
                break;
        }
        beast_num++;
    }
    printf("%d", beast_num);
}