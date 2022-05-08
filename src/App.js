import React, { useState } from 'react';

import './App.css';
import Form from './components/Form'
import ToDoList2 from './components/ToDoList2'




function App() {
  

    const [taskHolder, setTaskHolder] = useState([])
    const [isCompleted, setIsCompleted] = useState(null)
      
  
  
  return (
    <div className="App">
      <div className="d-flex flex-column align-items-center">
        <header className="mt-8">
          <h1 style={{marginTop:"20"}}> To Do List App: </h1>
        </header>
        <Form taskHolder={taskHolder} setTaskHolder={setTaskHolder} setIsCompleted={setIsCompleted}/>
      </div>
      <ToDoList2 taskHolder={taskHolder} setTaskHolder={setTaskHolder} isCompleted={isCompleted}/>
        
    </div>
  );
}

export default App;
