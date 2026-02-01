import React, {useReducer, useEffect} from 'react'
import UserForm from '../components/enhancedTodo/UserForm'
import UserTaskList from '../components/enhancedTodo/UserTaskList'

const init = () => {
  try {
    const stored = localStorage.getItem("todoList")
    return stored ? JSON.parse(stored) : []
  }catch {
    return []
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_FIELD":
      return [...state, action.todoObj]
    case "LOAD_FIELD":
      return [...action.todoObj]
    case "UPDATE_FIELD":
      return [...action.todoObj]
    default:
      return state
  }
}

function EnhancedTodoApp() {
  const [state, dispatch] = useReducer(reducer, [], init)

  useEffect(() => {
    try {
      localStorage.setItem("todoList", JSON.stringify(state))
    }catch(err) {
      console.log(err)
    }
  }, [state])

  const handleNewTodo = resp => {
    dispatch({type: "ADD_FIELD", todoObj: resp})
  }

  const handleCompletedTask = list => {
    const updatedList = list.filter(task => task.priority !== "Completed")

    dispatch({type: "UPDATE_FIELD", todoObj: updatedList})
  }

  return (
    <div className='p-8 text-center'>
      <h1 className='font-bold text-[50px] mb-15'>Todo App</h1>

      <div className='w-full h-130 flex items-center gap-10'>
        <UserForm onAddTodo={handleNewTodo} />

        <UserTaskList sendTodo={state} completedTaskList={handleCompletedTask} />
      </div>
    </div>
  )
}

export default EnhancedTodoApp