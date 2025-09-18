import { Handle } from '@xyflow/react';

export function DisabledNode(props) {
    return (
        <div className="card card-dash bg-neutral border-base-300">
            <div className='card-title'>
                <label>{props.data.label}</label>
            </div>
            <div className="card-body"></div>
                <Handle type="source" position="top" />
                <Handle type="target" position="bottom" />
        </div>
    );
}
