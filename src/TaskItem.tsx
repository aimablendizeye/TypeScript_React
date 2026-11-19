
import { Trash2 } from "lucide-react"

export type Task = {
  id: number
  text: string
  done: boolean
}

type TaskItemProps = {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 rounded bg-slate-800 px-3 py-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />

      <span className={`flex-1 ${task.done ? "line-through opacity-50" : ""}`}>
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)} aria-label="Delete task">
        <Trash2 className="h-5 w-5 text-amber-300" />
      </button>
    </li>
  )
}