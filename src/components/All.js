import React from 'react'
import TaskListItem from './TaskListItem'

const All = (props) => {
  return (
    <div>
      {
        props.projectList &&
          props.projectList.map(proj => (
            proj.taskList.map(task => (
            <div key={task.title}>
              <TaskListItem task={task}/>  
            </div>
            ))
          ))
      }
    </div>
  )
}

export default All