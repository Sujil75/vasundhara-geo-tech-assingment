import React from 'react'
import UserTaskCard from './UserTaskCard'

function UserTaskList() {
  return (
    <div className='box-border h-full w-[50%] p-8 rounded-[10px] shadow-xl'>
        <h1 className='font-bold text-[20px] mb-8'>Tasks</h1>

        <ul className='h-[85%] flex gap-6 pl-5 p-3 overflow-auto no-scrollbar flex-wrap'>
            <UserTaskCard />
            <UserTaskCard />
            <UserTaskCard />
            <UserTaskCard />
            <UserTaskCard />
        </ul>
    </div>
  )
}

export default UserTaskList