import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p style={props.style}>I'm paragraph one from user {props.username}</p>
            <p>I'm paragraph two</p>
        </div>
    )
};

export default userOutput;