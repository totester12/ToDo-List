import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const[currTask,setCurrTask] = useState('')

  function addNewTask(taskText){
    
    //Create new Object

    let newTaskToAdd = {
      id: tasks.length + 1,
      text: taskText
    }
    
    //Set new tasks to be spread of current tasks and new task
    setTasks([...tasks, newTaskToAdd])

  }

  function deleteTask(taskId){
    //Delete task with id passed in
    let newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <>

      <div>
        <h1>To Do List</h1>
        <input type='text' onChange={e=>setCurrTask(e.target.value)}></input>
        <br/>
        <button onClick={()=>addNewTask(currTask)}>Add Task</button>
        {tasks.map(task => (
          <div key={task.id}>
            {task.text}
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
          </div>
        ))}
        
      </div>
      
    </>
  )
}

export default App
