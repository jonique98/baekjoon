#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
	int num;
	char name[6];
	char enter_or_out[6];
	int j = 0;
	scanf("%d", &num);

	char **arr = malloc(num * sizeof(char *));
	for(int i = 0; i < num; i++)
		arr[i] = malloc(6);

	for (int i = 0; i < num; i++)
	{
		scanf("%s", name);
		scanf("%s", enter_or_out);
		if (strcmp("enter", enter_or_out))
		{
			strcpy(arr[j] , name);
			j++;
		}
		else if (strcmp("leave", enter_or_out) == 0)
		{
			int k = 0;
			while (k < j)
			{
				if (strcmp(arr[k], name) == 0)
				arr[k] = 0;
			}
		}
	}
	for (int i = 0; i < j; i++)
		printf("%s", arr[i]);
}
