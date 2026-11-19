import { useState } from "react"
import TaskItem, { type Task } from "./TaskItem"

export default function TodoList() {
  const [text, setText] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAdd() {
    if (text.trim() === "") return
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }])
    setText("")
  }

  function handleToggle(id: number) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function handleDelete(id: number) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const doneCount = tasks.filter(t => t.done).length

  return (
    <div className="flex min-h-screen items-start justify-center bg-slate-900 p-8 text-white">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">My Tasks</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 rounded border-2 border-amber-500 px-2 py-1"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="rounded bg-orange-400 px-3 py-1 font-semibold"
          >
            ADD
          </button>
        </div>

        <p className="text-sm text-slate-400">
          {doneCount} of {tasks.length} tasks done
        </p>

        {tasks.length === 0 ? (
          <p className="text-slate-500">No tasks yet, add one!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}