import React from 'react'

const Todolist = ({ todos, setTodos }) => {
  const handledone = (e) => {
    const updatetodo = todos.map((ele, index) => {
      if (index === e) {
        return { ...ele, done: !ele.done }
      }
      return ele
    })
    setTodos(updatetodo)
  }

  const handleTodo = (ind) => {
    const deletedtodo = todos.filter((_, i) => i !== ind)
    if (deletedtodo) {
      setTodos(deletedtodo)
    }
  }

  return (
    <ol className="space-y-4">
      {todos.map((e, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-3 rounded-md shadow"
        >
          <span
            style={{
              textDecoration: e.done ? 'line-through' : 'none',
              color: e.done ? 'red' : 'black'
            }}
            className="font-medium text-lg"
          >
            {e.text}
          </span>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={() => handleTodo(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Clear
            </button>
            <button
              onClick={() => handledone(index)}
              className={`px-3 py-1 rounded ${
                e.done ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {e.done ? 'Revert' : 'Done'}
            </button>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Todolist
