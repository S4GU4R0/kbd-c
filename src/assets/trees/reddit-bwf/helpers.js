class KbdCHelper {
  //     sample node:
  //       {
  //     "id": "pulling",
  //     "type": "disabled",
  //     "position": {
  //       "x": 100,
  //       "y": 120
  //     },
  //     "data": {
  //       "label": "Pulling Skills"
  //        "progress": 0.2
  //     }
  //   }

  //     sample edge:
  //       {
  //     "id": "e-root-pulling",
  //     "source": "root",
  //     "target": "pulling"
  //   },

  sortNodes(nodes, edges) {
    const nodeMap = new Map(nodes.map(node => [node.id, node]));
    const adjacencyList = new Map();
    const inDegree = new Map();

    nodes.forEach(node => {
      adjacencyList.set(node.id, []);
      inDegree.set(node.id, 0);
    });

    edges.forEach(edge => {
      const { source, target } = edge;
      adjacencyList.get(source).push(target);
      inDegree.set(target, inDegree.get(target) + 1);
    });

    const result = [];
    const queue = [];

    inDegree.forEach((degree, nodeId) => {
      if (degree === 0) queue.push(nodeId);
    });

    while (queue.length > 0) {
      queue.sort();
      const currentLevelSize = queue.length;

      for (let i = 0; i < currentLevelSize; i++) {
        const currentId = queue.shift();
        const currentNode = nodeMap.get(currentId);
        result.push(currentNode);

        adjacencyList.get(currentId).forEach(neighborId => {
          inDegree.set(neighborId, inDegree.get(neighborId) - 1);
          if (inDegree.get(neighborId) === 0) queue.push(neighborId);
        });
      }
    }

    if (result.length !== nodes.length) {
      throw new Error('Cycle detected in graph');
    }

    return result;
  }
  
  getBranch(nodes, edges, nodeId) {
    const nodeMap = new Map(nodes.map(node => [node.id, node]));
    const branchNodes = new Set([nodeId]);
    const queue = [nodeId];

    // BFS to find all descendants
    while (queue.length > 0) {
      const currentId = queue.shift();

      // Find all children of current node
      const children = edges
        .filter(edge => edge.source === currentId)
        .map(edge => edge.target);

      children.forEach(childId => {
        if (!branchNodes.has(childId)) {
          branchNodes.add(childId);
          queue.push(childId);
        }
      });
    }

    // Return array of node objects in the branch
    return Array.from(branchNodes).map(id => nodeMap.get(id));
  }
}

export default KbdCHelper;