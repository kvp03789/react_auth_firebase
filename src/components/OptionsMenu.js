import React from 'react'

const Menu = (props) => {

  const handleEdit = (proj, newTask) => {
    //props.updateTask(proj, newTask)
    props.onEdit()
  }

  const handleDelete = () => {
    props.onDelete(props.proj)
  }

  const deleteTask = (proj, task) => {
    props.deleteTask(proj, task)
    console.log(proj, task)
  }

  return (
    <div className="options-menu">
      <div onClick={() => {handleEdit(props.proj, props.task)}}>Edit</div>
      <div onClick={() => {deleteTask(props.proj, props.task)}}>Delete</div>
    </div>
  )
}

export default Menu