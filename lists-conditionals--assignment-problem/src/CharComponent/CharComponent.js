import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (<div 
        onClick={props.click}
        style={style}>{props.letter}</div>);
};

export default charComponent;