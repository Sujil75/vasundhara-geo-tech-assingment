import React from 'react'
import { Link } from 'react-router-dom'

import EnhancedTodoApp from './EnhancedTodoApp'

function Dashboard() {
  return (
    <div className='p-10 flex flex-col items-center'>
        <h1 className='font-bold text-[30px]'>Dashboard</h1>

        <div className='flex gap-10'>
            <Link to='enhanced-todo-app' className='hover:text-blue-800 underline'>Enhanced Todo App</Link>
            <Link to='form-validation' className='hover:text-blue-800 underline'>Form Validation</Link>
            <Link to='progress-bar' className='hover:text-blue-800 underline'>Dynamic Multi-Input Progress Bar</Link>
        </div>
    </div>
  )
}

export default Dashboard