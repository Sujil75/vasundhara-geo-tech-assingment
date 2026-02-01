import React from 'react'

function SubBars({valueChange, values}) {
  const handleChange = (index, value) => {
    const updatedValues = [...values]
    updatedValues[index] = Number(value)

    valueChange(updatedValues)
  }

  return (
    <div className='box-border flex flex-col items-start p-3 w-[50%] text-[13px]'>
        <h1 className='font-bold text-[20px]'>Sub Bars</h1>
        <ul className='w-full flex flex-col gap-3'>
          {values.map((eachItem, index) => (
            <li key={index} className='w-full flex flex-col gap-1'>
              <h1>{`Progress Bar ${index + 1}`}</h1>

              <div className='flex gap-4'>
                <label htmlFor={`input ${index + 1}`}>{`Input ${index + 1}`}:</label>
                <input 
                  type='number' 
                  id={`input ${index + 1}`} 
                  className='border w-[48px] pl-2' 
                  value={eachItem}
                  min="0"
                  max="100"
                  onChange={e => handleChange(index, e.target.value)} 
                />
              </div>

              <p>Count: {eachItem}%</p>
              <div className='h-[25px] border w-full rounded-[8px]'>
                <div className={`h-full ${eachItem === 100 ? 'rounded-lg' : 'rounded-l-lg'} ${eachItem < 40 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${eachItem}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SubBars