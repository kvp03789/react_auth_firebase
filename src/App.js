import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import All from './components/All.js'
import Important from './components/Important.js'
import Today from './components/Today.js'
import Week from './components/Week.js'
import Nav from './components/Nav.js'
import ProjectItem from './components/ProjectItem.js'
import Header from './components/Header.js'

const App = () => {

  const [projectList, setProjectList] = useState([])
  const [test, setTest] = useState([])
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  const anArray = []

  // useEffect(() => {
  //   setProjectList(projectList)
  //   console.log(`project list is:`, projectList)
  // }, [projectList])

  const handleAddProject = (name) => {
    const newProject = {projectName: name, taskList: []}
    //setProjectList((current) => {return [...current, newProject]})
    setProjectList([...projectList, newProject])
  }

  const handleDeleteProject = (projectName) => {
    const newProjectList = projectList.filter(proj => {
      return proj.name === projectName
    })

    setProjectList(newProjectList)
  }

  const handleEditProject = (oldProject, newName) => {
    const newProjectList = projectList;
    let i = projectList.indexOf(oldProject)
    newProjectList[i].title = newName;
    setProjectList([...newProjectList])
    console.log(newName, 'edited')
  }

  const updateProj = (proj, newTask) => {
    let i = projectList.indexOf(proj)
    const newProjectList = projectList
    newProjectList[i].taskList = [...projectList[i].taskList, newTask]
    setProjectList(newProjectList)
    // projectList[i].taskList = [...projectList[i].taskList, newTask];
    // setProjectList([...projectList])
  }

  const updateTask = (proj, newTask, newTaskIndex) => {
    setProjectList(projectList.map(project => {
      if(project.projectName === proj.projectName){
        project.taskList.map((task, index) => {
          if(index === newTaskIndex) {
            return {...task, title: newTask.title, details: newTask.details}
          }else return task
        })
      } else return project
    }))
    
  }

  const editTaskList = (proj, newTaskList) => {
    let index = projectList.indexOf(proj)
    const newProjectList = projectList;
    newProjectList[index].taskList = newTaskList
    setProjectList([...newProjectList]) 
  }
  
  const deleteTask = (proj, task) => {
    const newProjectList = projectList;
    let index = projectList.indexOf(proj)
    const newTaskList = projectList[index].taskList.filter(i => {
      return i.title !== task.title 
    })
    console.log('new TASK LIST is:', newTaskList)
    newProjectList[index].taskList = newTaskList;
    console.log('new PROJECT LIST is:', newProjectList)
    setProjectList([...newProjectList])
  }

  const updateTaskAgain = (proj, newTask, taskIndex) => {
    const arrgs = [{projectName: "farts", taskList: [{title: 'fff', details: '1234', date: 'the date', important: true}]}]

  }

  return (
    <div className="container">
    <Header />
    <div className="App">
      <BrowserRouter>
        <Nav addProject={handleAddProject} projectList={projectList} onDelete={handleDeleteProject} onEdit={handleEditProject}/>
        <div className="main">
          <Routes> 
            <Route path="/" exact element={<All projectList={projectList}/>} />
            <Route path="/important" element={<Important projectList={projectList}/>} />
            <Route path="/today" element={<Today projectList={projectList}/>} />
            <Route path="/week" element={<Week projectList={projectList}/>} />
            {
              projectList.map(proj => (
                  <Route path={proj.projectName} element={<ProjectItem project={proj} updateProj={updateProj} key={proj.projectName} updateTask={updateTask} editTaskList={editTaskList} deleteTask={deleteTask}/>}/>
              ))
            }
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App