import { useState } from 'react'

import { Task } from './components/Task'
import { TaskList } from './components/TaskList'

import Header from './components/Header'

export default function App () {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const concludedTasksCounter = tasks.filter(task => task.isConcluded).length

  /**
   * O (prevTasks) evita que o React sobrescreva o estado anterior. Assim, o
   * React irá pegar o estado anterior e adicionar o novo estado. Isso torna a
   * aplicação mais clara e evita bugs.
   */
  function handleAddTask () {
    if (!inputValue) {
      return
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title: inputValue,
      isConcluded: false
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    setInputValue('')
  }

  function handleToggleTask ({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isChecked: value } : task
    )

    setTasks(updatedTasks)
  }

  function handleRemoveTask (id: number) {
    if (window.confirm('Deseja mesmo apagar essa tarefa?')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Header
        handleAddTask={handleAddTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <main className='w-full max-w-[46rem] flex flex-col gap-16 p-4 sm:p-0'>
        <TaskList
          tasks={tasks}
          tasksCreated={tasks.length}
          concludedTasks={concludedTasksCounter}
          removeTask={handleRemoveTask}
          toogleTaskStatus={handleToggleTask}
        />
      </main>
    </div>
  )
}
