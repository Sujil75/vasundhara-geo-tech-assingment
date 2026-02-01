import React from 'react'
import UserTaskCard from './UserTaskCard'

function UserTaskList(props) {
  const {sendTodo, completedTaskList} = props

  const handleTasks = taskId => {
    const updatedList = sendTodo.map(eachTask => eachTask.id === taskId ? {...eachTask, priority: "Completed"} : eachTask)

    completedTaskList(updatedList)
  }

  return (
    <div className='box-border h-full w-[50%] p-5 flex flex-col gap-2 rounded-[10px] shadow-xl'>
        <h1 className='font-bold text-[20px] m-0 p-0'>Tasks</h1>

        <ul className='h-full flex gap-6 pl-5 p-3 overflow-auto flex-wrap'>
            {sendTodo.map(eachItem => <UserTaskCard key={eachItem.id} resource={eachItem} completedTask={handleTasks} />)}
        </ul>
    </div>
  )
}

export default UserTaskList