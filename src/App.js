import './App.css';
import React from 'react';



function App() {
  const [userEnteredToDo, setUserEnederedToDo] = React.useState([]);
  const [listItems, setListItems] = React.useState([]);
  console.log(userEnteredToDo)

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
          console.log(event.target.value)
        }}
        />
        <button
        onClick={()=>{
          console.log("here")
          setListItems([
            ...listItems,
            userEnteredToDo
          ])

        }}>Add</button>
    </div>
  );
}

export default App;
