import java.util.*;
import java.io.*;
public class b11660 {
	static int n;
	static int m;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());

		int [][]map = new int [n+1][n+1];
		int [][]dp = new int [n+1][n+1];
		for(int i = 1; i <= n; i++){
				st = new StringTokenizer(br.readLine());
			for(int j = 1; j <= n; j++){
				map[i][j] = Integer.parseInt(st.nextToken());
				dp[i][j] = dp[i][j - 1] + map[i][j];
			}
		}
	int x1, x2, y1, y2;
	for(int i = 0; i < m; i++){
		int res = 0;
		st = new StringTokenizer(br.readLine());
		x1 = Integer.parseInt(st.nextToken());
		y1 = Integer.parseInt(st.nextToken()) - 1;
		x2 = Integer.parseInt(st.nextToken());
		y2 = Integer.parseInt(st.nextToken());
		for(int j = x1; j <= x2; j++){
			res += (dp[j][y2] - dp[j][y1]);
		}
		sb.append(res + "\n");
	}
	System.out.println(sb);
	}
}
