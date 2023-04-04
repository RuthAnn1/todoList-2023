import React from 'react';
import "./listItem.css";

const listItem = (props) => {
    const {item} = props;
    return(
        <>
            <li>
                <div>{item}</div>
                <button>delete</button>
            </li>
        </>
    )
}
export default listItem