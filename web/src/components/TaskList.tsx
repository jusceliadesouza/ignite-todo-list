import { EmptyTaskList } from './EmptyTaskList'
import { Task } from './Task'

interface TaskListProps {
  tasks: Task[]
  tasksCreated: number
  concludedTasks: number
  removeTask: (id: number) => void
  toogleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function TaskList ({
  tasks,
  tasksCreated,
  concludedTasks,
  removeTask,
  toogleTaskStatus
}: TaskListProps) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center text-gray-300 mt-16 '>
      <div className='w-full flex justify-between text-gray-200'>
        <div className='flex gap-2 items-center font-bold'>
          <h2 className='text-blue'>Tarefas criadas</h2>
          <span className='px-2 py-[2px] text-xs bg-gray-400 rounded-full'>
            {tasksCreated}
          </span>
        </div>

        <div className='flex gap-2 items-center font-bold'>
          <h2 className='text-purple'>Concluídas</h2>
          <span className='px-2 py-[2px] text-xs bg-gray-400 rounded-full'>
            {concludedTasks} de {tasksCreated}
          </span>
        </div>
      </div>

      <div className='w-full mt-6 mb-20 flex flex-col gap-3'>
        {tasksCreated === 0 ? (
          <EmptyTaskList />
        ) : (
          <>
            {tasks.map(task => (
              <Task
                data={task}
                removeTask={removeTask}
                toogleTaskStatus={toogleTaskStatus}
                key={task.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
