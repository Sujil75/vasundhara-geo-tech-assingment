import React from 'react'

function UserTaskCard({resource, completedTask}) {
  const {id, taskHeading, taskDescription} = resource

  return (
    <div className='relative w-[47%] h-[145px] p-2 text-left shadow-lg/30 hover:cursor-pointer'>
      <input
        type='checkbox' 
        className='absolute -top-0 -left-4 size-3'
        onChange={() => completedTask(id)}
      />
      <h1 className='font-bold text-[20px]'>{taskHeading}</h1>
      <p className='w-full h-[75%] flex flex-wrap overflow-auto'>{(taskDescription)}</p>
    </div>
  )
}

export default UserTaskCard