import {Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import EnhancedTodoApp from './pages/EnhancedTodoApp'
import FormValidation from './pages/FormValidation'
import MultiInputProgressBar from './pages/MultiInputProgressBar'
import CountdownTimer from './pages/CountdownTimer'
import LiveSearch from './pages/LiveSearch'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='enhanced-todo-app' element={<EnhancedTodoApp />} />
      <Route path='form-validation' element={<FormValidation />} />
      <Route path='progress-bar' element={<MultiInputProgressBar />} />
      <Route path='countdown-timer' element={<CountdownTimer />} />
      <Route path='live-search' element={<LiveSearch />} />
    </Routes>
  )
}

export default App
