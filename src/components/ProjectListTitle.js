import React, { useState } from 'react'
import Dots from '../images/dots-vertical.svg'
import ProjectMenuIcon from '../images/project-menu.svg'
import ProjectOptionsMenu from './ProjectOptionsMenu'
import EditProjectForm from './EditProjectForm'


const ProjectListTitle = (props) => {
  const [isOptionsDisplayed, setIsOptionsDisplayed] = useState(false)
  const [isEditDisplayed, setIsEditDisplayed] = useState(false);

  const changeEdit = (proj) => {
    setIsEditDisplayed(isEditDisplayed ? false : true)
    //props.onEdit(proj)
  }

  return (
    <div>
    <div className="project-list-title item" key={props.proj.projectName}>
          <img src={ProjectMenuIcon} className="project-menu-icon small-icon"/>
          <h5>{props.proj.projectName}</h5>
          <div className="dots-container" onClick={() => setIsOptionsDisplayed(isOptionsDisplayed ? false : true)}>
            <img src={Dots} className="small-icon"/>
            {isOptionsDisplayed && <ProjectOptionsMenu proj={props.proj} onEdit={changeEdit} onDelete={props.onDelete}/>}
          </div>
    </div>
    {
      isEditDisplayed && 
      <div className="center-col">
      <EditProjectForm changeEdit={() => changeEdit(props.proj)} addProject={props.addProject} editProject={props.editProject} proj={props.proj}/>
      </div>
    }
    </div>
  )
}

export default ProjectListTitle