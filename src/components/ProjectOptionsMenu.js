import React from 'react'

const ProjectOptionsMenu = (props) => {

  const handleEdit = () => {
    props.onEdit()
  }

  const handleDelete = () => {
    props.onDelete(props.proj.projectName)
  }

  return (
    <div className="options-menu">
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  )
}

export default ProjectOptionsMenu