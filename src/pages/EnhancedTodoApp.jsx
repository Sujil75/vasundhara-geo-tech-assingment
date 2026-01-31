import React from 'react'
import UserForm from '../components/enhancedTodo/UserForm'
import UserTaskList from '../components/enhancedTodo/UserTaskList'

function EnhancedTodoApp() {
  return (
    <div className='p-8 text-center'>
      <h1 className='font-bold text-[50px] mb-15'>Todo App</h1>

      <div className='w-full h-130 flex items-center gap-10'>
        <UserForm />

        <UserTaskList />
      </div>
    </div>
  )
}

export default EnhancedTodoApp