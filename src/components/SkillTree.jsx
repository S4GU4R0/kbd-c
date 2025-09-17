import { useState, useCallback } from 'react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import { } from "./SkillNodes"
import redditBWFNodes from "../assets/trees/reddit-bwf/nodes.json";
import redditBWFEdges from "../assets/trees/reddit-bwf/edges.json";

const nodeTypes = {
  // textUpdater: TextUpdaterNode,
};
const initialNodes = [
  // {
  //   id: 'n1',
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   data: {
  //     label: 'Skills'
  //   }
  // },
  // {
  //   id: 'n2',
  //   position: {
  //     x: 0,
  //     y: 100
  //   },
  //   data: {
  //     label: 'Node 2',
  //   }
  // },
  ...redditBWFNodes
];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2' }, ...redditBWFEdges
];

export default function SkillTree() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodesDraggable={false}
      />
    </div>
  );
}