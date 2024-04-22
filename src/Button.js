import React from "react";






export default function Button(props) {




    return(
        <button onClick={props.handleClick}>My Button {props.count}</button>
    )

}