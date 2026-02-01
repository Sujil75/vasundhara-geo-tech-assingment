import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function UserForm(props) {
  const {onAddTodo} = props
  const [heading, setHeading] = useState("")
  const [description, setDesc] = useState("")
  const [priority, setPriority] = useState("All")
  const [error, setError] = useState("")

  const onHandleSubmit = e => {
    e.preventDefault()

    if (!heading || !description) {
        setError("Please enter values")
        return 
    }

    const newTodo = {
        id: uuidv4(),
        taskHeading: heading,
        taskDescription: description,
        priority
    }

    onAddTodo(newTodo)
    
    setHeading("")
    setDesc("")
    setPriority("All")
  }

  return (
    <div className='box-border w-[50%] p-10 rounded-[10px] shadow-xl'>
        <h1 className='font-bold text-[20px]'>Task Form</h1>

        <form onSubmit={onHandleSubmit} className='flex flex-col gap-5'>
            <div className='p-4 shadow-md flex flex-col items-start gap-3'>
                <label htmlFor='taskHeading' className='font-[600]'>Todo Heading</label>
                <input 
                    type='text'
                    id='taskHeading' 
                    placeholder='Enter your task heading here...' 
                    className='box-border border rounded-[10px] pl-4 p-2 w-full outline-none' 
                    value={heading}
                    onChange={e => setHeading(e.target.value)}
                    onClick={() => setError("")}
                />
            </div>

            <div className='p-4 shadow-md flex flex-col items-start gap-3'>
                <label htmlFor='taskDesc' className='font-[600]'>Todo Description</label>
                <textarea 
                    id='taskDesc' 
                    placeholder='Enter your task details here...' 
                    className='box-border border rounded-[10px] pl-4 p-2 w-full outline-none' 
                    value={description}
                    onChange={e => setDesc(e.target.value)}
                    onClick={() => setError("")}
                />
            </div>

            <div className='w-full flex items-center gap-6'>
                <h1>Priority:</h1>

                <label htmlFor='all' className='flex items-center justify-center gap-1 text-[15px]'>
                    <input 
                        type='radio' 
                        id="all" 
                        name="priority" 
                        value="All" 
                        checked={priority === "All"}
                        onChange={e => setPriority(e.target.value)}
                    />
                    All
                </label>

                <label htmlFor='active' className='flex items-center justify-center gap-1 text-[15px]'>
                    <input 
                        type='radio' 
                        id="active" 
                        name="priority" 
                        value="Active" 
                        checked={priority === "Active"}
                        onChange={e => setPriority(e.target.value)}
                    />
                    Active
                </label>

                <label htmlFor='completed' className='flex items-center justify-center gap-1 text-[15px]'>
                    <input 
                        type='radio' 
                        id="completed" 
                        name="priority"
                        value="Completed"
                        checked={priority === "Completed"}
                        onChange={e => setPriority(e.target.value)}
                    />
                    Completed
                </label>
            </div>

            <p className='text-red-400 text-[20px]'>{error}</p>

            <div className='flex justify-end'>
                <button type='submit' className='box-border p-2 pr-4 pl-4 rounded-[8px] text-white bg-blue-700 hover:bg-blue-900 cursor-pointer'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm