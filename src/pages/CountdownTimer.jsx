import React, { useState, useEffect, useRef } from 'react'

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(0) 
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalId = useRef(null)

  // Load timer
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timer"))

    if (data?.endTime && data.active && !data.paused) {
      const remainingMs = data.endTime - Date.now()

      if (remainingMs > 0) {
        setTimeRemaining(remainingMs)
        setIsActive(true)
        setIsPaused(false)
      }
    }
  }, [])

  // Countdown logic
  useEffect(() => {
    if (!isActive || isPaused) return

    intervalId.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(intervalId.current)
          localStorage.removeItem("timer")
          setIsActive(false)
          setIsPaused(false)
          return 0
        }
        return prev - 100
      })
    }, 100)

    return () => clearInterval(intervalId.current)
  }, [isActive, isPaused])

  // Set timer
  useEffect(() => {
    if (isActive) {
      localStorage.setItem(
        "timer",
        JSON.stringify({
          endTime: Date.now() + timeRemaining,
          active: isActive,
          paused: isPaused
        })
      )
    }
  }, [timeRemaining, isActive, isPaused])

  const startTimer = minutes => {
    setTimeRemaining(minutes * 60000)
    setIsActive(true)
    setIsPaused(false)
  }

  const resetTimer = () => {
    clearInterval(intervalId.current)
    setTimeRemaining(0)
    setIsActive(false)
    setIsPaused(false)
    localStorage.removeItem("timer")
  }

  const timeFormat = ms => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = ms % 1000

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(3, "0")}`
  }

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <h1 className='font-bold text-[50px]'>Advanced Countdown Timer</h1>

      <div>
        <label htmlFor='timerInput'>Enter time in minutes: </label>
        <input
          type='number'
          id='timerInput'
          className='border w-[60px] pl-2'
          min="0"
          value={Math.floor(timeRemaining / 60000)}
          onChange={e => setTimeRemaining(Number(e.target.value) * 60000)}
        />
      </div>

      <p>{`Timer: ${timeFormat(timeRemaining)}`}</p>

      <div className='flex gap-3'>
        {!isActive && (
          <button
            className='p-4 bg-green-500 text-white rounded-lg hover:bg-green-800 cursor-pointer'
            onClick={() => startTimer(timeRemaining / 60000)}
          >
            Start Timer
          </button>
        )}

        {isActive && !isPaused && (
          <button
            className='p-4 bg-green-500 text-white rounded-lg hover:bg-green-800 cursor-pointer'
            onClick={() => setIsPaused(true)}
          >
            Pause Timer
          </button>
        )}

        {isPaused && (
          <button
            className='p-4 bg-green-500 text-white rounded-lg hover:bg-green-800 cursor-pointer'
            onClick={() => setIsPaused(false)}
          >
            Resume Timer
          </button>
        )}

        <button
          className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-800 cursor-pointer'
          onClick={resetTimer}
        >
          Reset Timer
        </button>
      </div>
    </div>
  )
}

export default CountdownTimer
