import React from 'react'

const ToDoList = ({taskHolder, setTaskHolder, isCompleted}) => {

    
    


    const onDeleteHandler = (param)=>{
        const taskas = (taskHolder.filter((task)=>(task._id !== param._id)))
        setTaskHolder(taskas)
    }

    const onCompleteHandler = (iterant)=>{
        setTaskHolder(taskHolder.map((task)=>{

            if(task._id === iterant._id){ 
                return {
                    ...task, completed:!task.completed
                }
            }
            return task;
        }))
    }
    
    
    if (taskHolder.length === 0) return (
        <div className="d-flex flex-column align-items-center">
            <h4>No tasks to do :)</h4>
            <h4>Add new task to get started</h4>
        </div>)
    
    
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="card w-75 d-flex flex-column align-items-center">  

                <div className="mb-4">
                    <h4>What needs to be done: </h4>
                </div>
                <table className="table w-75">
                    <thead> 
                        <tr>
                            <th >Title</th>
                            <th >ID</th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                        </tr>
                    </thead>

                    <tbody>
                        {(isCompleted===null?taskHolder:taskHolder.filter(task => task.completed===isCompleted)).map((t)=>(
                            <tr key={taskHolder.indexOf(t)}>
                                <td className={t.completed? "completed": ''}>{t.title}</td>
                                <td>{t._id}</td>                        
                                <td><button onClick={e=>onCompleteHandler(t)} className="btn btn-success"><i className="fas fa-check"></i></button></td>
                                <td><button onClick={e=>onDeleteHandler(t)} className="btn btn-danger"><i className="fas fa-trash"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

        </div>
    )
    
}

export default ToDoList