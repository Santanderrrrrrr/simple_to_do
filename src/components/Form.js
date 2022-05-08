
import React, { useState } from 'react'

const Form = ({taskHolder, setTaskHolder, setIsCompleted}) => {
    const [ inputText, setInputText] = useState("");

   
    
    const submitToDoHolder=(e)=> {
        e.preventDefault();
        setTaskHolder([
            ...taskHolder, {title: inputText, _id:taskHolder.length+1, completed: false}
        ]);
        
        
        setInputText("");
    }

    const isCompletedHandler = (e)=>{
        setIsCompleted(JSON.parse(e.target.value))
        
    }
    

  return (
       <form >
            <input onChange={e=>setInputText(e.target.value)} value={inputText} type="text" className="todo-input" />
            <button onClick={submitToDoHolder} className=" btn btn-dark todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={isCompletedHandler} name="todos" className="filter-todo">
                    <option value="null">All</option>
                    <option value="true">Completed</option>
                    <option value="false">Incomplete</option>
                </select>
            </div>
        </form>
  )
}

export default Form;