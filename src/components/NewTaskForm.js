import React, { useState, useRef, useEffect} from 'react'
import Star from '../images/important-star.svg'
import FilledStar from '../images/filled.svg' 

const NewTaskForm = (props) => {

  const [importance, setImportance] = useState(false);
  const [newTask, setNewTask] = useState({})
  const [editTask, setEditTask] = useState({})

  const titleRef = useRef()
  const detailsRef = useRef()
  const dateRef = useRef()

  useEffect(() => {
    props.task && setImportance(props.task.important) 
  }, [])

  useEffect(() => {
    newTask.important = importance
    if(editTask) editTask.important = importance
  }, [importance])

  const onClick = () => {
    // const newTask = {}
    newTask.title = titleRef.current.value;
    newTask.details = detailsRef.current.value;
    newTask.date = dateRef.current.value;
    // newTask.important = importance
    props.handleAdd(newTask)
  }

  const onClickEdit = () => {
    editTask.title = titleRef.current.value;
    editTask.details = detailsRef.current.value;
    editTask.date = dateRef.current.value;
    props.onEdit(editTask)
  }

  const changeStar = () => {
    importance ? setImportance(false) : setImportance(true)
  }

  const handleUpdateProj = (project, newTask) => {
    props.updateProj(project, newTask);
  }
    

  return (
    <div className="new-task-form center-col">

      <div>
        <label>
          Title:
          <input type="text" ref={titleRef} defaultValue={props.task ? props.task.title : ''}></input>
        </label>
      </div>

      <div>
        <label>
          Details(optional):
          <input type="text" ref={detailsRef} defaultValue={props.task ? props.task.details : ''}></input>
        </label>
      </div>

      <div>
        <label>
        Date
          <input type="date" ref={dateRef} defaultValue={props.task ? props.task.date : ''}></input>
        </label>
      </div>

      <div>
        <p>Mark this task as important?</p>
        <div className="star-button" onClick={changeStar}>
          {importance 
          ? <img src={FilledStar} className="small-icon"/>
          : <img src={Star} className="small-icon"/>
          }
        </div>
      </div>

      <div>
      {
        props.onEdit 
        ? <button className="add edit" onClick={onClickEdit}>Edit</button>
        : <button className="add" onClick={() => {onClick()
                                        handleUpdateProj(props.proj, {
                                          title: titleRef.current.value,
                                          details: detailsRef.current.value,
                                          date: dateRef.current.value,
                                          important: importance
                                        })
                                        }
                                        }>Add</button>
      }
        
        <button className="cancel" onClick={props.handleCancel}>Cancel</button>
      </div>

    </div>
  )
}

export default NewTaskForm