import React, { useEffect, useState } from 'react'
import Star from '../images/important-star.svg'
import FilledStar from '../images/filled.svg'
import Dots from '../images/dots-vertical.svg'
import OptionsMenu from './OptionsMenu.js'
import NewTaskForm from './NewTaskForm'
import EditTaskForm from './EditTaskForm'

const TaskListItem = (props) => {

  const [isCompleted, setIsCompleted] = useState(false)
  const[isOptionsDisplayed, setIsOptionsDisplayed] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const onEdit =  () => {
    setIsEdit(true)
  }

  const onSubmit = () => {
    setIsEdit(false)
    props.onEdit()
  }
  
  return (
    <div>
    <div className="task-list-item center-row">
      
        <div className="task-name">{props.task.title}</div>
        <div className="task-details">{props.task.details}</div>
        <div className="task-date">{props.task.date}</div>
        <div>{props.task.important ? <img src={FilledStar} className="small-icon"/> : <img src={Star} className="small-icon" />}</div>
        <div onClick={() => {setIsOptionsDisplayed(isOptionsDisplayed ? false : true)}} className="dots-container">
          <img src={Dots} className="dots small-icon"/>
          {isOptionsDisplayed && <OptionsMenu onEdit={onEdit} onDelete={props.onDelete} editTaskList={props.editTaskList} task={props.task} deleteTask={props.deleteTask} proj={props.proj} updateTask={props.updateTask}/>}
        </div>
      </div>
      <div>
        {
          isEdit && <EditTaskForm onEdit={props.onEdit} onSubmit={onSubmit} updateProj={props.updateProj} proj={props.proj} task={props.task} updateTask={props.updateTask}/>
        }
      </div>
    
    </div>
  )
}

export default TaskListItem