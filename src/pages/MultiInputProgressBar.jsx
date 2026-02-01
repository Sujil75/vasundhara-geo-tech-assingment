import React, {useState} from 'react'

import MainBar from '../components/enhancedProgressBar/MainBar'
import SubBars from '../components/enhancedProgressBar/SubBars'

function MultiInputProgressBar() {
  const [values, setValue] = useState([30, 50, 80])

  const handleValueChange = value => {
    setValue(value)
  }

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <h1 className='font-bold text-[50px]'>Multi Input Progress Bar</h1>

      <MainBar values={values} />

      <SubBars valueChange={handleValueChange} values={values} />
    </div>
  )
}

export default MultiInputProgressBar