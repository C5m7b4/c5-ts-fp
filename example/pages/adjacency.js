import { AdjacencyGraph } from "../../src";

// this is the structure this test is using
// 1: [2,5]
// 2: [1,5,3,4]
// 3: [2,4]
// 4: [2,5,3]
// 5: [4,1,2]
const graph = new AdjacencyGraph();
graph.addVertex(1);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 1);
graph.addEdge(2, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 2);
graph.addEdge(3, 4);
graph.addEdge(4, 2);
graph.addEdge(4, 5);
graph.addEdge(4, 3);
graph.addEdge(5, 4);
graph.addEdge(5, 1);
graph.addEdge(5, 2);

console.log(graph);

const dfs = graph.depthFirstTraversal(1, console.log);
console.log("dfs", dfs);
const bfs = graph.depthFirstTraversal(1, console.log);
console.log("bfs", bfs);

// 1: [2,5]
// 2: [1,5,3,4]
// 3: [2,4]
// 4: [2,5,3]
// 5: [4,1,2]
const graph1 = new AdjacencyGraph("id");
const node1 = { id: 1 };
const node2 = { id: 2 };
const node3 = { id: 3 };
const node4 = { id: 4 };
const node5 = { id: 5 };

graph1.addVertex(node1);
graph1.addEdge(node1, node2);
graph1.addEdge(node1, node5);
graph1.addEdge(node2, node1);
graph1.addEdge(node2, node5);
graph1.addEdge(node2, node3);
graph1.addEdge(node2, node4);
graph1.addEdge(node3, node2);
graph1.addEdge(node3, node4);
graph1.addEdge(node4, node2);
graph1.addEdge(node4, node5);
graph1.addEdge(node4, node3);
graph1.addEdge(node5, node4);
graph1.addEdge(node5, node1);
graph1.addEdge(node5, node2);

const dfs1 = graph1.depthFirstTraversal(node1);
console.log("dfs1", dfs1);
const bfs1 = graph1.breadthFirstTraversal(node1);
console.log("bfs1", bfs1);
