class Node {
public:
    int val;
    vector<Node*> neighbors;

    // Default constructor
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }

    // Constructor with a specified value
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }

    // Constructor with a specified value and neighbors
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
