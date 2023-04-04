import React from 'react';
import "./listItem.css";

const ListItem = (props) => {
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
export default ListItem