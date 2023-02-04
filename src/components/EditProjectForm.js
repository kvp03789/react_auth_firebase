import React, { useRef } from 'react'

const EditProjectForm = (props) => {

  const inputEditRef = useRef('')

  const handleSubmit = (proj, newName) => {
    props.editProject(proj, newName)
    props.changeEdit()
  }

  const handleOnChange = () => {

  }

  return (
    <div className="new-project-form">
      <div>
        <input type="text" onChange={() => {handleOnChange()}} defaultValue={props.proj.projectName} ref={inputEditRef}></input>
      </div>
      <div>
        <button className="add"type="text" onClick={() => {handleSubmit(props.proj, inputEditRef.current.value)}}>Add</button>
        <button className="cancel" type="text" onClick={() => {props.changeEdit()}}>Cancel</button>
      </div>
    </div>
)
}

export default EditProjectForm