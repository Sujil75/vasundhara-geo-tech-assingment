import React from 'react'

function MainBar({values}) {
  const mainBarValue = Math.ceil(values.reduce((acc, currVal) => acc + currVal, 0) / values.length)

  return (
    <div className='box-border flex flex-col items-start p-3 w-[50%] text-[13px]'>
        <h1 className='font-bold text-[20px]'>Main Bar</h1>

        <div className='w-full'>
            <p>{`Count: ${mainBarValue}%`}</p>

            <div className='h-[25px] border w-full rounded-[8px]'>
                <div className={`h-full ${mainBarValue === 100 ? 'rounded-lg' : 'rounded-l-lg'} ${mainBarValue < 40 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${mainBarValue}%` }}></div>
            </div>
        </div>
    </div>
  )
}

export default MainBar