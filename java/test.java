import java.util.*;
import java.io.*;


public class test {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int V  = Integer.parseInt(st.nextToken());
		int E  = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(br.readLine());
		
		ArrayList<dNode>[] list;
		list = new ArrayList[V+1];
		int distance[] = new int[V+1];
		boolean[] visited = new boolean[V+1];
		
		for(int i=1; i<=V; i++) {
			list[i] = new ArrayList<>();
			distance[i] = Integer.MAX_VALUE;
		}
		
		for(int i=1; i<E; i++) {
			st = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());
			int w = Integer.parseInt(st.nextToken());
			list[u].add(new dNode(v, w));
		}
		
		PriorityQueue<dNode> q = new PriorityQueue<>();		
		distance[K] = 0;
		q.add(new dNode(K, 0));
		
		while(!q.isEmpty()) {
			dNode now = q.poll();
			int vertex = now.vertex;
			int value = now.value;
			
			if(visited[vertex] == true) continue;
			visited[vertex] = true;
			
			for(dNode next : list[vertex]) {
				if(distance[next.vertex] > distance[vertex]+ next.value) {
					distance[next.vertex] = distance[vertex]+ next.value;
					q.add(new dNode(next.vertex, distance[next.vertex]));
				}
			}
			
		} // while
		
		for(int i=1; i<=V; i++) {
			if(visited[i]) {
				System.out.println(distance[i]);
			}else {
				System.out.println("INF");
			}
		}
		
	}
	
}

class dNode implements Comparable<dNode>{
	
	int vertex;
	int value;
	dNode(int vertex, int value){
		this.vertex = vertex;
		this.value = value;
	}
	
	public int compareTo(dNode e) {
		if(this.value > e.value) return 1;
		else return -1;
	}
}
