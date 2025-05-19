import React, { useRef, useState } from 'react'
import Todolist from './Todolist'
import Clear from './Clear'

function Todo() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    const newTodo = inputRef.current.value
    if (newTodo && newTodo.length !== 0) {
      setTodos([...todos, { text: newTodo, done: false }])
      inputRef.current.value = ''
    } else {
      alert('type kar kuch')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6">
      <form onSubmit={submithandler} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter the task"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={submithandler}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <Todolist todos={todos} setTodos={setTodos} />
      <Clear setTodos={setTodos} />
    </div>
  )
}

export default Todo
