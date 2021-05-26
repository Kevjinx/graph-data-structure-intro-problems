
class _GraphNode {
  constructor(val) {
    this.val = val
    this.neighbor = []
  }
}


class Graph {
  constructor() {
    // Code goes here ...
    this.storage = [];

  }

  addVertex(vertex) {
    let newVertex = _GraphNode(vertex)
    this.storage.push(newVertex)
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}


let newGraph = new Graph();
//add a to newGraph

newGrapg.addVertex(a)






module.exports = {
  Graph
};
