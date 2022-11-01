/*  Graph (undirected graph)
        B
       / \
      A   C
*/

/*  Adjacency Matrix
    | A | B | C
   A| 0   1   0
   B| 1   0   1
   C| 0   1   0

*/
const adjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(adjacencyMatrix[0][1]);
console.log(adjacencyMatrix[0][0]);
console.log(adjacencyMatrix[1][0]);

/*  Adjacency List
    A -> B
    B -> A, C
    C -> B
*/

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(adjacencyList["A"]);
console.log(adjacencyList["B"]);
console.log(adjacencyList["C"]);

/* ****************************** */

/*  Graph (directed graph)
        B
       / \
      A   C
    Directions:  A -> B & B -> C
*/

/*  Adjacency Matrix
    | A | B | C
   A| 0   1   0
   B| 0   0   1
   C| 0   0   0

*/
const adjacencyMatrix1 = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0],
];
console.log(adjacencyMatrix1[0][1]);
console.log(adjacencyMatrix1[0][0]);
console.log(adjacencyMatrix1[1][0]);

/*  Adjacency List
    A -> B
    B -> C
    C -> null
*/

const adjacencyList1 = {
  A: ["B"],
  B: ["C"],
  C: [],
};
console.log(adjacencyList1["A"]);
console.log(adjacencyList1["B"]);
console.log(adjacencyList1["C"]);
