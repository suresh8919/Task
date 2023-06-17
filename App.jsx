import React, { useState } from "react";

import List1 from "./components/List1";


const App = () =>{

  const[input,set] = useState("");
  const [items,setitems] = useState([]);
  const add = (event) =>{
    set(event.target.value);
    
  }
 
  const write = () =>{
    setitems((old) =>{
      return [...old, input];
    });
    set('');
  }
   
  
  const deleteTask =(id) => {
    setitems((old) =>{
      return old.filter((a,index) =>{
        return index !== id;
      })
    })
   
  }
const toggle = () => {
 console.log("double click");
}
 

  
  return(
  <>
  <div className="main_div">
    <div className="c_div">
      <h1>To do list</h1><br />
      <input type="text" placeholder="Add event"  onChange={add}
      value={input}/>
      <button onClick={write}>Add</button>
      <br /><br/>
     {items.length > 0 ? 
     (<List1  items={items}
      onDelete={deleteTask} onToggle={toggle} />)
       :('no events')}
   
  
    </div>

  </div>
  </>
)


};


export default App;
