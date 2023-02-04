import React, { useState, useEffect } from 'react'
import NewTaskForm from './NewTaskForm'
import TaskListItem from './TaskListItem'

const ProjectItem = (props) => {
  const [projectTaskList, setProjectTaskList] = useState([...props.project.taskList])
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

 

  // useEffect(() => {
  //   setProjectTaskList([...props.project.taskList])
  //   console.log(`the ${props.project.projectName} project's task list is now:`, projectTaskList)
  // }, [projectTaskList])

  const handleAdd = (newTask, proj) => {
    setIsFormDisplayed(false)
    setProjectTaskList([...projectTaskList, newTask])
    //props.updateProj(proj, newTask)
  }

  const handleDelete = (taskName) => {
    const newTaskList = projectTaskList.filter(task => {
      return task.title === taskName
    })

    setProjectTaskList([...newTaskList])
    props.editTaskList(props.project, projectTaskList)
    console.log('task deleted')
  }

  const handleEdit=(editTask, oldTask) => {
    //const newTaskList = projectTaskList.map(task, oldTask.)
    let i = projectTaskList.indexOf(oldTask); 
    const newTaskList = projectTaskList
    newTaskList[i] = {...editTask}
    setProjectTaskList([...newTaskList])
    //props.updateProj(props.project ,editTask)
    props.editTaskList(props.project, projectTaskList)
    console.log(editTask, 'task edited')
  }

  const handleClick = () => {
    isFormDisplayed ? setIsFormDisplayed(false) : setIsFormDisplayed(true)
  }

  const handleCancel = () => {
    setIsFormDisplayed(false)
  }

  return (
    <div className='project-item'>
      <div className="main-section-header center-row">
        <h3>{props.project.projectName}</h3>
      </div>

      <div className="task-list">
      {
        props.project.taskList.map((task) => (
          <TaskListItem key={task.title} task={task} onEdit={handleEdit} onDelete={handleDelete} updateProj={props.updateProj} proj={props.project} updateTask={props.updateTask} editTaskList={props.editTaskList} deleteTask={props.deleteTask}/>
        ))
      }
      </div>
      {
        isFormDisplayed && 
        <NewTaskForm handleAdd={handleAdd} handleCancel={handleCancel} updateProj={props.updateProj} proj={props.project}/>
      }
      
        <div className="add-new-task-button">
          <button onClick={handleClick}>Add Task to Project</button>
        </div>

    </div>
  )
}

export default ProjectItem