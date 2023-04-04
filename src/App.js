import './App.css';
import React from 'react';



function App() {
  const [userEnteredToDo, setUserEnederedToDo] = React.useState("");
  const [listItems, setListItems] = React.useState([]);
 

  return (
    <div>
      <ul>
        {
          //can do js here 
          listItems.map((item, index)=>{
            return (<li key = {index}>{item}</li>)
          })
        }
      </ul>
     <input
        onChange={(event) => {
          setUserEnederedToDo(event.target.value)
        }}
        onKeyDown={(event) => {
          if(event.key === "Enter"){
            setListItems([
              ...listItems,
              userEnteredToDo
            ])
  
          setUserEnederedToDo("");
          }
        }}
        value={userEnteredToDo}
        />
        <button
        onClick={()=>{
          setListItems([
            ...listItems,
            userEnteredToDo
          ])

        setUserEnederedToDo("");
        }}
        >Add</button>
    </div>
  );
}

export default App;
