import React from 'react'
import TaskListItem from './TaskListItem'

const Important = (props) => {
  return (
    <div>
      {
        props.projectList &&
          props.projectList.map(proj => (
            proj.taskList.map(task => (
              task.important &&
                <div key={task.title}>
                  <TaskListItem task={task}/>  
                </div>
            ))
          ))
      }
    </div>
  )
}

export default Important