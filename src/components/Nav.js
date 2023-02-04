import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import ProjectMenuIcon from '../images/project-menu.svg'
import Plus from '../images/plus.svg'
import Calendar from '../images/calendar.svg'
import Calendar2 from '../images/calendar2.svg'
import Flag from '../images/flag.svg'
import StarBanner from '../images/star-banner.svg'
import Dots from '../images/dots-vertical.svg'
import ProjectOptionsMenu from './ProjectOptionsMenu'
import ProjectListTitle from './ProjectListTitle'

const Nav = (props) => {
  const inputRef = useRef('')

  const [isInputDisplayed, setIsInputDisplayed] = useState(false)
  const[isOptionsDisplayed, setIsOptionsDisplayed] = useState(false)

  const handleSubmit = () => {
    props.addProject(inputRef.current.value)
    setIsInputDisplayed(false)
  }

  const handleOptionsClick = (e) => {
    isOptionsDisplayed ? setIsOptionsDisplayed(false) : setIsOptionsDisplayed(true)
  }


  return (
    <nav>
      <h3 className="nav-sub-title">Home</h3>
      <div className="nav-section">
        <div className="item" key={1}>
        <img src={Flag} className="small-icon"/>
          <Link to="/">
            All Tasks
          </Link>
        </div>
            
          <div className="item" key={2}>
          <img src={Calendar2} className="small-icon"/>
            <Link to="/today">
              Today's Tasks
            </Link>
          </div>  
            
          <div className="item" key={3}>
          <img src={Calendar} className="small-icon"/>
            <Link to="/week">
              This Week's tasks
            </Link>
          </div>
            
          <div className="item" key={4}>
          <img src={StarBanner} className="small-icon"/>
            <Link to="/important">
              Important Tasks
            </Link>
          </div>
        </div>
        <div className="nav-section">
        <h3 className="nav-sub-title">Projects</h3>
          {props.projectList.length > 0 &&
          <div className="project-list">
            {props.projectList.map(proj => (
              
                <Link to={`${proj.projectName}`}>
                  {/* <div className="project-list-title item" key={proj.projectName}>
                    <img src={ProjectMenuIcon} className="project-menu-icon small-icon"/>
                    <h5>{proj.projectName}</h5>
                    <div className="dots-container" onClick={(e) => handleOptionsClick(e)}>
                      <img src={Dots} className="small-icon"/>
                      {isOptionsDisplayed && <ProjectOptionsMenu proj={proj} onEdit={props.onEdit} onDelete={props.onDelete}/>}
                    </div>
                  </div> */}
                    <ProjectListTitle proj={proj} editProject={props.onEdit} onEdit={props.onEdit} onDelete={props.onDelete}/>
                  
                </Link>
              
            ))}
          </div>
          }

          {isInputDisplayed && 
          <div className="new-project-form">
          <div>
            <input type="text" ref={inputRef}></input>
          </div>
          <div>
            <button className="add"type="text" onClick={handleSubmit}>Add</button>
            <button className="cancel" type="text" onClick={() => {setIsInputDisplayed(false)}}>Cancel</button>
          </div>
            
            
          </div>
          }

          {!isInputDisplayed &&
            <div className="div-button"
            onClick={() => {
              setIsInputDisplayed(isInputDisplayed ? false : true);}}>
            <img src={Plus} className="small-icon"/>
            Add Project    
          </div>
          }

        </div>
    </nav>
  )
}

export default Nav