


class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = {}

  }

  addVertex(vertex) {
    if (!(vertex in this.adjList)) {
      this.adjList[vertex] = []
    }
  }

  addEdges(srcValue, destValue) {
    if (!(destValue in this.adjList)) {
      this.addVertex(destValue)
    }
    if (!(srcValue in this.adjList)) {
      this.addVertex(srcValue)
    }
    this.adjList[srcValue].push(destValue)
    this.adjList[destValue].push(srcValue)
  }

  buildGraph(edges) {
    edges.forEach(el => {
      this.addEdges(el[0], el[1])
    })
    return this.adjList
  }

  breadthFirstTraversal(startingVertex, visited = new Set()) {
    let queue = [startingVertex]
    let resultArr = []

    while (queue.length) {
      let curr = queue.shift()
      if (visited.has(curr)) continue
      visited.add(curr)
      resultArr.push(curr)
      queue.push(...this.adjList[curr])

      // this.adjList[queue[0]].forEach(neighbor => {
      //   if (!(visited.has(neighbor))) {
      //     visited.add(neighbor)
      //     queue.push(neighbor)
      //     resultArr.push(queue.shift())
      //   }
      // })

    }
    return resultArr
  }

  depthFirstTraversalIterative(startingVertex, visited = new Set()) {
    let stack = [startingVertex]
    let resultArr = []

    while (stack.length) {
      let lastEle = stack.pop()
      if (visited.has(lastEle)) continue
      visited.add(lastEle)
      resultArr.push(lastEle)

      stack.push(...this.adjList[lastEle])
    }
    return resultArr

  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {

    if (visited.has(startingVertex)) return
    vertices.push(startingVertex)
    visited.add(startingVertex)

    this.adjList[startingVertex].forEach(neighbor => {
      this.depthFirstTraversalRecursive(neighbor, visited, vertices)
    })

    return vertices
  }
}



// let newGraph = new Graph();
// //add a to newGraph

// let a = new _GraphNode('a');
// let b = new _GraphNode('b');
// let c = new _GraphNode('c');
// let d = new _GraphNode('d');
// let e = new _GraphNode('e');
// let f = new _GraphNode('f');
// a.neighbors = [b, c, e];
// c.neighbors = [b, d];
// e.neighbors = [a];
// f.neighbors = [e];

// newGraph.addVertex(a)
// newGraph.addVertex(b)
// newGraph.addVertex(a)
// newGraph.addVertex(a)
// newGraph.addVertex(a)








module.exports = {
  Graph
};
