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

class Solution {
public:
    // DFS function to clone the graph
    Node* dfs(Node* cur, unordered_map<Node*, Node*>& mp) {
        vector<Node*> neighbour;
        Node* clone = new Node(cur->val);  // Create a new node with the current node's value
        mp[cur] = clone;  // Store the mapping between original and cloned nodes in the map

        // Iterate through the neighbors of the current node
        for (auto it : cur->neighbors) {
            if (mp.find(it) != mp.end()) {
                // If the neighbor is already cloned, retrieve it from the map
                neighbour.push_back(mp[it]);
            } else {
                // If the neighbor is not cloned yet, recursively clone it
                neighbour.push_back(dfs(it, mp));
            }
        }

        clone->neighbors = neighbour;  // Set the cloned node's neighbors to the cloned neighbors
        return clone;
    }

    // Main function to clone the entire graph
    Node* cloneGraph(Node* node) {
        unordered_map<Node*, Node*> mp;  // Map to store the mapping between original and cloned nodes

        if (node == NULL) {
            return NULL;
        }

        if (node->neighbors.size() == 0) {
            // If only one node is present and has no neighbors
            Node* clone = new Node(node->val);
            return clone;
        }

        return dfs(node, mp);  // Perform DFS to clone the graph
    }
};
