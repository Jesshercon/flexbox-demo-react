//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const initialStyles={

    "flex-direction":"row",
    "justify-content":"center",
    "align-items":"stretch"

  }

  const [values, setValues]= useState(initialStyles)
  const updateProperties=(e, property)=>{
    const newValues={...values}
    newValues[property]=e.target.value
    console.log(newValues)
    setValues(newValues)
  }

  const resetButton=()=>{
setValues(initialStyles)

  }

  const [showAxis, setShowAxis]=useState(true);
 

  return (
    <div className="App">
       <h1>Flexbox magic</h1>
    <div className="demo-wrapper">
        <div style={values} className="demo-container">
            <div className="item one" id="one">one</div>
            <div className="item two" id="two">two</div>
            <div className="item three" id="three">three</div>
            <div className="item four" id="four">four</div>
            <div className="item five" id="five">five</div>
           
              <div className="y axis">cross axis</div>
            <div  className="x axis">primary axis</div>
        </div>
    </div>


    <button onClick={resetButton} style={{backgroundColor: 'black', color:'white'}}>Reset</button>
    <input type="checkbox" id="showAxis" checked={showAxis} onChange={(e)=>setShowAxis(e.target.checked)}/>Show Axis

    <div style={{padding:20, display:'flex', justifyContent:'space-evenly'}}>
    <article>
<span style={{padding:5}}>Flex direction</span>

<select onChange={(e)=>{updateProperties(e,"flex-direction")}} >
        <option value="row">Row</option>
      <option value="row-reverse">Row-reverse</option>
      <option value="column">Column</option>
      <option value="column-reverse">Column-reverse</option>
    </select>
    </article>

    <article >
    <span style={{padding:5}}>Justify content</span>
    
    <select onChange={(e)=>{updateProperties(e,"justify-content")}}>      
      <option value="start">Start</option>
      <option value="center">Center</option>
      <option value="space-between">Space-Between</option>
      <option value="space-around">Space-Around</option>
      <option value="space-evenly">Space-Evenly</option>
    </select>
    </article>

    <article>
    <span style={{padding:5}}>Align Items</span>

    <select onChange={(e)=>{updateProperties(e, "align-items")}}>      
      <option value="start">Start</option>
      <option value="center">Center</option>
      <option value="stretch">Stretch</option>
      <option value="end">End</option>
    </select>
    </article>
      
</div>

  </div>
  );
}

export default App;
