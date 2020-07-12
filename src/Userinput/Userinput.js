import React from 'react';

const Userinput = (props) => {

    const mystyle={
        backgroundColor : "beige",  // we can also use "background-color"
        color : "red",
        border : "4px solid red",
        padding : "4rem",
        width : "70vh",
        "margin" : "auto" //this also works
    }

    return(
        <div style={mystyle}>
            <input type="text" placeholder="Enter text" onChange={props.changed} value={props.text}></input>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Userinput;

