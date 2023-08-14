import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class b1931 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        PriorityQueue<Time> pq = new PriorityQueue<>(new MyComparator());
        for(int i = 0; i < num; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            Time time = new Time(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
            pq.offer(time);
        }
        int possibleTime = 0;
        int cnt = 0;
        while(!pq.isEmpty()){
            Time time = pq.poll();
            if(time.start >= possibleTime){
                cnt++;
                possibleTime = time.end;
            }
        }
        System.out.println( cnt );
    }
}

class MyComparator implements Comparator<Time> {
    @Override
    public int compare(Time time1, Time time2) {
        if(time1.end == time2.end)
            return(time1.start.compareTo(time2.start));

        return time1.end.compareTo(time2.end);
    }
}

class Time{
    Integer start;
    Integer end;
    Time(int start, int end){
        this.start = start;
        this.end = end;
    }
}