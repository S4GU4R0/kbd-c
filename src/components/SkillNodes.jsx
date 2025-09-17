import { Handle } from '@xyflow/react';

export function DisabledNode(props) {
    return (
        <div className="card card">
            <div className='card-title'>
                <label>{props.data.label}</label>
            </div>
                <Handle type="source" position="top" />
                <Handle type="target" position="bottom" />
        </div>
    );
}
