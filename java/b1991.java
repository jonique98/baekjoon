// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStreamReader;
// import java.util.StringTokenizer;

// public class b1991 {
//     public static void main(String[] args) throws IOException{
//         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

//         Node head = new Node('A', null, null);
//         int n = Integer.parseInt(br.readLine());

//         for(int i = 0; i < n; i++){
//             StringTokenizer st = new StringTokenizer(br.readLine());
//             char root = st.nextToken().charAt(0);
//             char left = st.nextToken().charAt(0);
//             char right = st.nextToken().charAt(0);
//             insertNode(head, root, left, right);
//         }
//         preorder(head);
//         System.out.println();
//         inorder(head);
//         System.out.println();
//         postorder(head);
//     }

//     static void insertNode(Node node, char head, char left, char right){
//         if(node == null)
//             return;
//         if(node.value == head){
//             node.left = new Node(left, null, null);
//             node.right = new Node(right, null, null);
//         }
//         else{
//             insertNode(node.left, head, left, right);
//             insertNode(node.right, head, left, right);
//         }
//     }

//     static void preorder(Node node){
//         if(node == null || node.value == '.')
//             return;
//         System.out.print(node.value);
//         preorder(node.left);
//         preorder(node.right);
//     }

//     static void inorder(Node node){
//         if(node == null || node.value == '.')
//             return;
//         inorder(node.left);
//         System.out.print(node.value);
//         inorder(node.right);
//     }
//     static void postorder(Node node){
//         if(node == null || node.value == '.')
//             return;
//         postorder(node.left);
//         postorder(node.right);
//         System.out.print(node.value);
//     }

// }

// class Node{
//     char value;
//     Node left;
//     Node right;
    
//     Node(char value, Node left, Node right){
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }

// }

