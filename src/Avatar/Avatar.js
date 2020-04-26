import React from 'react';
import './Avatar.css';

export function Avatar(props) {
    return (<div className="Avatar">
        <h1>My Avatar</h1>
        <img src={props.url} width={props.width} shape={props.shape} alt=""/>
    </div>
    )
}