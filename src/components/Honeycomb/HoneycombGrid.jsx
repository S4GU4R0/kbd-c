import React, { useEffect, useState } from 'react';
import { defineHex, Grid, rectangle } from 'honeycomb-grid';
import { ResponsiveHoneycomb, Hexagon } from '.';
import KbdCHelper from '../../assets/trees/reddit-bwf/helpers';
import nodes from "../../assets/trees/reddit-bwf/nodes.json"
import edges from "../../assets/trees/reddit-bwf/edges.json"

const HoneycombGrid = () => {
    const processedNodes = nodes.map(item => {
        item.data.type = "disabled"
        return item;
    });
    const processor = new KbdCHelper();
    console.log(processor)
    const [gridNodes, setGridNodes] = useState(processor.getBranch(processedNodes, edges, "pulling"));




    return (
        <div className=''>
            {/* Honeycomb Grid */}
            <ResponsiveHoneycomb
                defaultWidth={1000}
                size={70}
                items={gridNodes}
                renderItem={(item) => {
                    let classes = "text-center flex justify-center items-center glass "
                    if (item.data.type === "disabled") {
                        classes += " bg-base-100 text-secondary "
                    }
                    if (item.data.type === "available") {
                        classes += " bg-base-secondary text-secondary-content "
                    }
                    return (
                        <Hexagon className="bg-secondary p-2 drop-shadow-xl">
                            <Hexagon className={classes}>
                                <div className='text-xs font-bold uppercase'>
                                    {item.data.label}
                                </div>
                            </Hexagon>
                        </Hexagon>
                    )
                }}
            />
        </div>
    );
};

export default HoneycombGrid;