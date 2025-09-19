import { useState, useCallback } from 'react';
import Tree from 'react-d3-tree';
import { DisabledNode } from "./SkillNodes"
import redditBWFNodes from "../../assets/trees/reddit-bwf/nodes.json";
import redditBWFEdges from "../../assets/trees/reddit-bwf/edges.json";

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


  // Here we're using `renderCustomNodeElement` render a component that uses
  // both SVG and HTML tags side-by-side.
  // This is made possible by `foreignObject`, which wraps the HTML tags to
  // allow for them to be injected into the SVG namespace.
  const nodeSize = { x: 100, y: 50 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y };
  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps
  }) => (
    <g>
      {/* <circle r={nodeSize.radius}></circle> */}
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div className="badge badge-secondary badge-xl badge-dash drop-shaow-xs drop-shadow-secondary">
          {nodeDatum.name}
        </div>
      </foreignObject>
    </g>
  );

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" className="w-full">
      {/* https://bkrem.github.io/react-d3-tree/docs/interfaces/TreeProps.html */}
      <Tree
        data={orgChart}
        //    branchNodeClassName?: string;
        // centeringTransitionDuration?: number;
        // collapsible?: boolean;
        // data: RawNodeDatum | RawNodeDatum[];
        // dataKey?: string;
        // depthFactor?: number;
        // dimensions?: { height: number; width: number };
        // draggable?: boolean;
        draggable={false}
        // enableLegacyTransitions?: boolean;
        // hasInteractiveNodes?: boolean;
        // initialDepth?: number;
        // leafNodeClassName?: string;
        // nodeSize?: { x: number; y: number };
        // nodeSize={{ x: 50, y: 50 }}
        // onLinkClick?: TreeLinkEventCallback;
        // onLinkMouseOut?: TreeLinkEventCallback;
        // onLinkMouseOver?: TreeLinkEventCallback;
        // onNodeClick?: TreeNodeEventCallback;
        // onNodeMouseOut?: TreeNodeEventCallback;
        // onNodeMouseOver?: TreeNodeEventCallback;
        // onUpdate?: (
        //     target: {node: TreeNodeDatum; translate: Point; zoom: number },
        // ) => any;
        // orientation?: Orientation;
        orientation="horizontal"
        // pathClassFunc?: PathFunction;
        pathClassFunc={() => ['!stroke-secondary'].join(' ')}
        // pathFunc?: PathFunctionOption | PathFunction;
        pathFunc={"step"}
        // renderCustomNodeElement?: RenderCustomNodeElementFn;
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
      // rootNodeClassName?: string;
      // scaleExtent?: {max ?: number; min?: number };
      // separation?: {nonSiblings ?: number; siblings?: number };
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









