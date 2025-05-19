import React from 'react'

const Clear = ({ setTodos }) => {
  return (
    <div className="mt-6 text-center">
      <button
        onClick={() => setTodos([])}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        Clear All
      </button>
    </div>
  )
}

export default Clear
