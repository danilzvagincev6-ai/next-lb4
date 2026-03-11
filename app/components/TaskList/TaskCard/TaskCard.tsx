'use client'

import { useState } from 'react'
import type { Todo } from '../../types'

const TaskCard = ({ todo }: { todo: Todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed)

  return (
    <div onClick={() => setIsCompleted(!isCompleted)} style={{ cursor: 'pointer' }}>
      <p>{todo.title}</p>
      <p>ID: {todo.id} • User: {todo.userId}</p>
      <p>{isCompleted ? 'Completed ☑' : 'In Progress ☐'}</p>
    </div>
  )
}

export default TaskCard