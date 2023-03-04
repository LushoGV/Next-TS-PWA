import { iTask } from '@/interfaces'
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

interface context {
  tasks: iTask[]
  getTask: (id:number) => iTask 
  addTask: (newTaskContent:newTask) => void
  updateTask: (updatedContent:iTask) => void
  removeTask: (id:number) => void
  changeTaskState: (id:number, stateType:string) =>void
}

interface newTask {
  title: string;
  short_description: string;
  description: string;
  status: boolean;
  favorite: boolean;
  date: Date;
}

const TaskContext = createContext<context>({} as context)

export const TaskProvider = ({children}:PropsWithChildren) => {
  const [tasks, setTasks] = useState<iTask[]>([])

  const getTask = (id:number):iTask => {
    const foundTask = tasks.filter(element => element.id === id) 
    return foundTask[0]
  }

  const addTask = (newTaskContent:newTask) => {
    setTasks([...tasks, {...newTaskContent, id: tasks.length+1}])
    localStorage.setItem("tasksArr", JSON.stringify([...tasks, {...newTaskContent, id: tasks.length+1}]))
  }

  const updateTask = (updatedContent:iTask) => {
    const newTasksArr = tasks.filter(element => element.id != updatedContent.id)
    setTasks([...newTasksArr, updatedContent])
    localStorage.setItem("tasksArr", JSON.stringify([...newTasksArr, updatedContent]))
  }

  const removeTask = (id:number) => {
    setTasks(task => task.filter(element => element.id != id))
    localStorage.setItem("tasksArr", JSON.stringify(tasks.filter(element => element.id != id)))
  }

  const changeTaskState = (id:number, stateType:string) => {
    let foundTask = tasks.filter(element => element.id == id)

    if(stateType === "favorite"){
      foundTask[0].favorite = !foundTask[0].favorite
    }else{
      foundTask[0].status = !foundTask[0].status
    }
    
    updateTask(foundTask[0])
  }

  useEffect(()=>{
    if(localStorage.tasksArr){
      setTasks(JSON.parse(localStorage.tasksArr))
    }
  },[])

  return(
    <TaskContext.Provider value={{tasks, getTask, addTask, updateTask, removeTask, changeTaskState}}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const {tasks, getTask, addTask, updateTask, removeTask, changeTaskState} = useContext(TaskContext)
  return {tasks, getTask, addTask, updateTask, removeTask, changeTaskState}
}
