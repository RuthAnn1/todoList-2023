import './App.css';
import React from 'react';



function App() {
  const [listItems, setListItems] = React.useState([]);
 


  let toDoListItems =[
  ];

  return (
    <div>
      <ul>
        {
          //can do js here 
          toDoListItems.map((item, index)=>{
            return (<li key = {index}>{item}</li>)
          })
        }
      </ul>
     <input
        onChange={(event) => {
          setListItems([event.target.value])
          console.log(event.target.value)
        }}
        />
    </div>
  );
}

export default App;
