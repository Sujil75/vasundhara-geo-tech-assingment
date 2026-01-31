import React, { useReducer, useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

const initialState = []

function reducer(state, action) {
    switch(action.type) {
        case "ADD_OBJ":
            return [...state, action.todoObj]
        case "GET_OBJ":
            return action.todoObj
        default:
            return state
    }
}

function UserForm() {
  const [heading, setHeading] = useState("")
  const [description, setDesc] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
        const response = JSON.parse(localStorage.getItem("todoList"))
        if (response) dispatch({type: "GET_OBJ", todoObj: response})
    }catch(err) {
        console.log(err)
    }
  }, [])

  useEffect(() => {
    try {
        localStorage.setItem("todoList", JSON.stringify(state))
    } catch(err) {
        console.log(err)
    }
  }, [state])

  const onHandleSubmit = e => {
    e.preventDefault()

    const newTodo = {
        id: uuidv4(),
        taskHeading: heading,
        taskDescription: description
    }

    dispatch({type: "ADD_OBJ", todoObj: newTodo})
    setHeading("")
    setDesc("")
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
                />
            </div>

            <div className='flex justify-end'>
                <button type='submit' className='box-border p-2 pr-4 pl-4 rounded-[8px] text-white bg-blue-700 hover:bg-blue-900 cursor-pointer'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm