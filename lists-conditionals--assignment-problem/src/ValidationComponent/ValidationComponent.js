import React from 'react';

const validationComponent = (props) => {
    let message = "";

    if(props.length<5){
        message = "Text too short";
    }else if(props.length>15){
        message = "Text too long";
    }

    return <p>{message}</p>
}

export default validationComponent;