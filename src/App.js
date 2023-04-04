import './App.css';
import React from 'react';
import ListItem from './listItem';




function App() {
  const [userEnteredToDo, setUserEnederedToDo] = React.useState("");
  const [listItems, setListItems] = React.useState([]);
  const saveItemAnDClearInput = () =>{
        setListItems([
          ...listItems,
          userEnteredToDo
        ])

      setUserEnederedToDo("");
  }
 

  return (
    <div>
      <ul>
        {
          //can do js here 
          listItems.map((item, index)=>{
            return (
                <ListItem
                  key={index}
                  item={item}
            
            />)
          })
        }
      </ul>
     <input
        onChange={(event) => {
          setUserEnederedToDo(event.target.value)
        }}
        onKeyDown={(event) => {
          if(event.key === "Enter"){
            saveItemAnDClearInput()
          }
        }}
        value={userEnteredToDo}
        />
        <button
        onClick={()=>{
          saveItemAnDClearInput()
        }}
        >Add</button>
    </div>
  );
}

export default App;
