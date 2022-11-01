// Graph Class - Undirected & Unweighted & Acyclic Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // O(E) (With Adjacency List) & O(1) (With Adjacency Matrix)
  hasEdge(vertex1, vertex2) {
    // for undirected graph, we need to check edge in both vertex adjacency list
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  // O(1) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  // O(1) (With Adjacency List) & O(1) (With Adjacency Matrix)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    // for undirected graph, we need to add edge in both vertex adjacency list
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  // O(E) (With Adjacency List) & O(1) (With Adjacency Matrix)
  removeEdge(vertex1, vertex2) {
    if (this.hasEdge(vertex1, vertex2)) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  // O(V+E) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log("Vertex doesn't exists");
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // O(V+E) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  breadthFirst(startVertex) {
    const result = [];
    const queue = [startVertex];
    const visited = {};

    while (queue.length > 0) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        // exploring adjacent vertices of vertex
        queue.push(...this.adjacencyList[vertex]);
      }
    }

    console.log(result);
  }

  // O(V+E) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  depthFirstRecursive(startVertex) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((adjacentVertex) => {
        // exploring adjacent vertices of vertex
        if (!visited[adjacentVertex]) return dfs(adjacentVertex);
      });
    };

    dfs(startVertex);
    console.log(result);
  }

  // O(V+E) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  depthFirstIterative(startVertex) {
    const result = [];
    const visited = {};
    const stack = [startVertex];

    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        // exploring adjacent vertices of vertex
        stack.push(...this.adjacencyList[vertex]);
      }
    }

    console.log(result);
  }

  // O(V+E) (With Adjacency List) & O(V^2) (With Adjacency Matrix)
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
// graph 1
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");

// graph 2
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// graph 3
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addVertex("7");
graph.addEdge("1", "2");
graph.addEdge("1", "3");
graph.addEdge("1", "4");
graph.addEdge("2", "3");
graph.addEdge("3", "4");
graph.addEdge("3", "5");
graph.addEdge("4", "5");
graph.addEdge("5", "6");
graph.addEdge("5", "7");
graph.display();
// console.log(graph.hasEdge("A", "B"));
// console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
// graph.removeVertex("A");
// graph.removeVertex("C");
// graph.display();
graph.breadthFirst("5");
graph.depthFirstIterative("1");
graph.depthFirstRecursive("1");
