import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material';

import React from 'react'

const ToDoList2 = ({taskHolder, setTaskHolder, isCompleted}) => {

    
    


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
                <Paper sx={{width: '75%'}} >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(isCompleted===null?taskHolder:taskHolder.filter(task => task.completed===isCompleted)).map((t)=>(
                        <TableRow key={taskHolder.indexOf(t)}>
                            <TableCell align="left" className={t.completed? "completed": ''}>{t.title}</TableCell>
                            <TableCell align="right">{t._id}</TableCell>
                            <TableCell align="right"><button onClick={e=>onCompleteHandler(t)} className="btn btn-success"><i className="fas fa-check"></i></button></TableCell>
                            <TableCell align="left"><button onClick={e=>onDeleteHandler(t)} className="btn btn-danger"><i className="fas fa-trash"></i></button></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

        </div>

        
    )
    
}

export default ToDoList2