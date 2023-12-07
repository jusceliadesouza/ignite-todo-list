import { useState } from 'react'
import { TaskList } from './components/TaskList'

import Header from './components/Header'

export interface Task {
  id: string
  title: string
  isConcluded: boolean
}

const predefinedTasks: Task[] = [
  {
    id: '1',
    title: 'Laboris aliquip consectetur cillum laboris proident exercitation. Deserunt exercitation cupidatat officia reprehenderit.',
    isConcluded: false
  },
  {
    id: '2',
    title: 'Laboris aliquip consectetur cillum laboris proident exercitation. Deserunt exercitation cupidatat officia reprehenderit.',
    isConcluded: false
  },
  {
    id: '3',
    title: 'Laboris aliquip consectetur cillum laboris proident exercitation. Deserunt exercitation cupidatat officia reprehenderit.',
    isConcluded: false
  },
  {
    id: '4',
    title: 'Laboris aliquip consectetur cillum laboris proident exercitation. Deserunt exercitation cupidatat officia reprehenderit.',
    isConcluded: false
  }
]

export default function App () {
  // const [tasks, setTasks] = useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>(predefinedTasks)

  const concludedTasksCounter = tasks.filter(task => task.isConcluded).length

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Header />

      <main className='w-full max-w-[46rem] flex flex-col gap-16 p-4 sm:p-0'>
        <TaskList
          concludedTasks={concludedTasksCounter}
          tasksCreated={tasks.length}
          tasks={tasks}
        />
      </main>
    </div>
  )
}
