import java.util.*;
class Node {
    int data;
    Node left, right;
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}
public class Main {
    static Boolean Root(Node root) {
        return (root.left == null) && (root.right == null);
    }

    static void addLeftBoundary(Node root, ArrayList < Integer > res) {
        Node current = root.left;
        while (current != null) {
            if (Root(current) == false) res.add(current.data);
            if (current.left != null) current = current.left;
            else current = current.right;
        }
    }
    static void addRightBoundary(Node root, ArrayList < Integer > res) {
        Node current = root.right;
        ArrayList < Integer > as = new ArrayList < Integer > ();
        while (current != null) {
            if (Root(current) == false) as.add(current.data);
            if (current.right != null) current = current.right;
            else current = current.left;
        }
        int i;
        for (i = as.size() - 1; i >= 0; --i) {
            res.add (as.get(i));
        }
    }

    static void addLeaves(Node root, ArrayList < Integer > res) {
        if (Root(root)) {
            res.add(root.data);
            return;
        }
        if (root.left != null) addLeaves(root.left, res);
        if (root.right != null) addLeaves(root.right, res);
    }
    static ArrayList < Integer > printBoundary(Node node) {
        ArrayList < Integer > ans = new ArrayList < Integer > ();
        if (Root(node) == false) ans.add(node.data);
        addLeftBoundary(node, ans);
        addLeaves(node, ans);
        addRightBoundary(node, ans);
        return ans;
    }

    public static void main(String args[])
    {
        Node root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.left.right.right = new Node(8);
        root.right = new Node(3);
        root.right.right = new Node(7);
        root.right.left = new Node(6);
        root.right.left.left = new Node(9);
        ArrayList < Integer > bt;
        bt = printBoundary(root);
        System.out.println("The Boundary Traversal is : ");
        for (int i = 0; i < bt.size(); i++) {
            System.out.print(bt.get(i) + " ");
        }
    }
}

