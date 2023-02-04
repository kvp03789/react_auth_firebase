import React from 'react'

const ProjectOptionsMeny = (props) => {

  const handleEdit = () => {
    props.onEdit(props.proj)
  }

  const handleDelete = () => {
    props.onDelete(props.proj)
  }

  return (
    <div className="options-menu">
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  )
}

export default ProjectOptionsMeny