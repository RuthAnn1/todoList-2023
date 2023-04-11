import React from "react";
import "./listItem.css";

const listItem = (props) => {
    const {item, index, listItems, setListItems} = props;


   const removeListItem = (index) =>{
        //const removeListITem = listItems.splice(index,1)

        setListItems([
            ...listItems.slice(1, index),
            ...listItems.slice(index + 1 )
        ])
   }
   
    return(
        <>
            <li>
                <div>{item}</div>
                <button onClick= {() => removeListItem(index)}>
                    delete</button>
            </li>
        </>
    )
}
export default listItem
