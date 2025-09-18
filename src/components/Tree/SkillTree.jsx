import { useState, useCallback } from 'react';
// import {
//   ReactFlow,
//   applyNodeChanges,
//   applyEdgeChanges,
//   addEdge,
// } from '@xyflow/react';
import Tree from 'react-d3-tree';
import { DisabledNode } from "./SkillNodes"
import redditBWFNodes from "../../assets/trees/reddit-bwf/nodes.json";
import redditBWFEdges from "../../assets/trees/reddit-bwf/edges.json";
// import '@xyflow/react/dist/style.css';

// const nodeTypes = {
//   // textUpdater: TextUpdaterNode,
//   disabled: DisabledNode
// };
// const initialNodes = [
//   // {
//   //   id: 'n1',
//   //   position: {
//   //     x: 0,
//   //     y: 0
//   //   },
//   //   data: {
//   //     label: 'Skills'
//   //   }
//   // },
//   // {
//   //   id: 'n2',
//   //   position: {
//   //     x: 0,
//   //     y: 100
//   //   },
//   //   data: {
//   //     label: 'Node 2',
//   //   }
//   // },
//   ...redditBWFNodes
// ];

// const initialEdges = [
//   // { id: 'n1-n2', source: 'n1', target: 'n2' }, 
//   ...redditBWFEdges
// ];

// export default function SkillTree() {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
//     [],
//   );

//   const onEdgesChange = useCallback(
//     (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
//     [],
//   );

//   const onConnect = useCallback(
//     (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
//     [],
//   );

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         nodeTypes={nodeTypes}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//         nodesDraggable={false}
//       />
//     </div>
//   );
// }

// import React from 'react';

// import './custom-tree.css';

// ...





export default function SkillTree() {
  // This is a simplified example of an org chart with a depth of 2.
  // Note how deeper levels are defined recursively via the `children` property.
  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };


  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      {/* https://bkrem.github.io/react-d3-tree/docs/interfaces/TreeProps.html */}
      <Tree
        data={orgChart}
        //    branchNodeClassName?: string;
        branchNodeClassName="[&_circle]:fill-primary"
        // centeringTransitionDuration?: number;
        // collapsible?: boolean;
        // data: RawNodeDatum | RawNodeDatum[];
        // dataKey?: string;
        // depthFactor?: number;
        // dimensions?: { height: number; width: number };
        // draggable?: boolean;
        // enableLegacyTransitions?: boolean;
        // hasInteractiveNodes?: boolean;
        // initialDepth?: number;
        // leafNodeClassName?: string;
        // nodeSize?: { x: number; y: number };
        // onLinkClick?: TreeLinkEventCallback;
        // onLinkMouseOut?: TreeLinkEventCallback;
        // onLinkMouseOver?: TreeLinkEventCallback;
        // onNodeClick?: TreeNodeEventCallback;
        // onNodeMouseOut?: TreeNodeEventCallback;
        // onNodeMouseOver?: TreeNodeEventCallback;
        // onUpdate?: (
        //     target: { node: TreeNodeDatum; translate: Point; zoom: number },
        // ) => any;
        // orientation?: Orientation;
        orientation="horizontal"
      // pathClassFunc?: PathFunction;
      // pathFunc?: PathFunctionOption | PathFunction;
      // renderCustomNodeElement?: RenderCustomNodeElementFn;
      // rootNodeClassName?: string;
      // scaleExtent?: { max?: number; min?: number };
      // separation?: { nonSiblings?: number; siblings?: number };
      // shouldCollapseNeighborNodes?: boolean;
      // svgClassName?: string;
      // transitionDuration?: number;
      // translate?: Point;
      // zoom?: number;
      // zoomable?: boolean;
      />
    </div>
  );
}