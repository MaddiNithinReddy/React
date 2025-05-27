import './App.css';
import { useState , useRef} from 'react';

function App() {
  let counter=useRef(0);
  let [todoInp,updateInp]=useState("")
  let [todoList,updateList]=useState([])
  function addnewToDo(){
    if(todoInp==="")
        alert("Add some task")
    else{
      counter.current += 1;
      let newToDo=[
        ...todoList,
        {
          id:counter.current,
          task:todoInp
        }
      ]
      updateList(newToDo)
      updateInp("")
    }
  }
  function deleteToDo(id){
    let updatedtodos=todoList.filter((todo)=>{
      return todo.id!==id
    })
    updateList(updatedtodos)
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className='text-center'>Todo App Using React</h3>
      <div className='input-group'>
        <input className='form-control' type='text' 
        onChange={(e)=>{
          let task=e.target.value
          updateInp(task)
        }} value={todoInp}></input>
        <button className='btn btn-primary ms-2' onClick={()=>{
          addnewToDo()
        }}>Add Task</button>
      </div>
      <ul className='list-group mt-4' >
        {
          todoList.map((todo)=>{
            return(
              <li className='list-group-item' key={todo.id}>
                <p>{todo.task}</p>
                <button className='btn' onClick={()=>{
                    deleteToDo(todo.id)
                  }}>❌</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
