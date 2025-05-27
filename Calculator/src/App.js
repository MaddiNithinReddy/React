import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';
function App() {
  let [inp,setInp]=useState("");
  function handleClick(value){
    setInp(inp+value)
  }
  function calculate(){
    let outputval=eval(inp)
    setInp(outputval)
  }
  function handleClear(){
    setInp("")
  }
  return (
    <div className="container">
      <div className='calculator'>
        <input type='text' className='output' value={inp}></input>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
      </div>
    </div>
  );
}

export default App;
