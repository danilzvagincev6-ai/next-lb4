import TaskCard from './TaskCard/TaskCard'
import type { Todo } from '../types'

const TaskList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      <h1>Task List</h1>
      {todos.map((todo) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TaskList