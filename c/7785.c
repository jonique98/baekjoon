#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct log_manage
{
	char *name;
	struct log_manage *next;
}s_log;

void remove_node(s_log *head, s_log *p)
{
	while (head->next)
	{
		if (head->next == p)
		{
			if (p->next)
				head->next= p->next;
			else
				head->next = 0;
			break;
		}
		head = head->next;
	}
	free(p->name);
	free (p);
}

void bubble_sort(s_log *p)
{
	char temp[6];
	s_log *len = p;
	s_log *compare;
	int cnt = 0;

while (len->next != 0)
{
	len = len->next;
	cnt++;
}

for(int i = cnt - 1; i > 0; i--)
{
	compare = p;
	while (compare->next && compare->next->next)
	{
		if(strcmp(compare->next->name , compare->next->next->name) < 0)
		{
			strcpy(temp, compare->next->name);
			strcpy(compare->next->name, compare->next->next->name);
			strcpy(compare->next->next->name, temp);
		}
		compare = compare->next;
	}
}
}


s_log *insert_log(s_log *p, char *name)
{
	s_log *temp;
	s_log *new_node_front;

	while (p->next)
	{
		if (p->next->name)
		{
			if (strcmp(name, p->next->name) > 0)
			{
				temp = p->next;
				s_log *new_node_front = calloc(1, sizeof(s_log));
				p->next = new_node_front;
				new_node_front->next = temp;
				return (new_node_front);
			}
		}
		p = p->next;
	}
	p->next = calloc(1, sizeof(s_log));
	return (p->next);
}

s_log *remove_log(s_log *head, char *name)
{
	s_log *p = head->next;
	while (p)
	{
		if(strcmp(p->name, name) == 0)
			return(p);
		p = p->next;
	}
	return (0);
}

int main()
{
	char name[6];
	char enter_or_out[6];
	int num;
	s_log *head = calloc(1, sizeof(s_log));

	scanf("%d", &num);
	getchar();
	for (int i = 0; i < num; i++)
	{
		s_log *p = 0;
		scanf("%s", name);
		scanf("%s", enter_or_out);
		getchar();
		if (strcmp("enter", enter_or_out) == 0)
		{
			p = insert_log(head, name);
			if (!p)
				continue ;
			p->name = malloc(6);
			strcpy(p->name , name);
		}
		else if (strcmp("leave", enter_or_out) == 0)
		{
			p = remove_log(head, name);
			if(!p)
				continue;
			remove_node(head, p);
		}
	}
	// bubble_sort(head);
	while (head->next)
	{
		printf("%s\n", head->next->name);
		head = head->next;
	}
}
