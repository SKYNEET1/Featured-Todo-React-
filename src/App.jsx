import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Todo />
    </div>
  )
}

export default App

