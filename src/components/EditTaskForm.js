import React, { useState, useRef, useEffect} from 'react'
import Star from '../images/important-star.svg'
import FilledStar from '../images/filled.svg' 

const EditTaskForm = (props) => {

  const [importance, setImportance] = useState(props.task.important ? props.task.important : false);
  const [newTask, setNewTask] = useState({})
  const [editTask, setEditTask] = useState(props.task)

  const titleRef = useRef()
  const detailsRef = useRef()
  const dateRef = useRef()

  // useEffect(() => {
  //   props.task && setImportance(props.task.important) 
  //   setEditTask({title: editTask.title, details:editTask.details, date:editTask.date, importance: importance});
    
  // }, [])

  useEffect(() => {
    // props.task && setImportance(props.task.important) 
    setEditTask({title: editTask.title, details:editTask.details, date:editTask.date, important: importance});
    
  }, [importance])

  const onClickEdit = () => {
    editTask.title = titleRef.current.value;
    editTask.details = detailsRef.current.value;
    editTask.date = dateRef.current.value;
    editTask.important = importance
    props.onEdit(editTask, props.task)
    //props.updateTask(props.proj, editTask, props.proj.taskList.indexOf(props.task))
    props.onSubmit()
  }

  const changeStar = () => {
    importance ? setImportance(false) : setImportance(true)
  }

  return (
    <div className="new-task-form center-col">

      <div>
        <label>
          Title:
          <input type="text" ref={titleRef} defaultValue={props.task.title}></input>
        </label>
      </div>

      <div>
        <label>
          Details(optional):
          <input type="text" ref={detailsRef} defaultValue={props.task.details}></input>
        </label>
      </div>

      <div>
        <label>
        Date
          <input type="date" ref={dateRef} defaultValue={props.task.date}></input>
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
        <button className="add edit" onClick={onClickEdit}>Edit</button>
        <button className="cancel" onClick={props.handleCancel}>Cancel</button>
      </div>

    </div>
  )
}

export default EditTaskForm