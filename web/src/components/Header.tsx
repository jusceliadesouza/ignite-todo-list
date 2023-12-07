import { NewTask } from './NewTask'

import rocket from '../assets/rocket.svg'

interface HeaderProps {
  handleAddTask: () => void
  inputValue: string
  setInputValue: (value: string) => void
}

export default function Header ({
  handleAddTask,
  inputValue,
  setInputValue
}: HeaderProps) {
  return (
    <div className='w-full h-48 bg-gray-700 flex flex-col items-center justify-center gap-[3.38rem]'>
      <header className='flex items-center justify-center gap-3 mt-[6.25rem]'>
        <img src={rocket} width={22} height={36} alt={'logo todo'} />

        <div className='font-black text-[2.5rem]'>
          <span className='text-blue'>to</span>
          <span className='text-dark-purple'>do</span>
        </div>
      </header>

      <NewTask
        handleAddTask={handleAddTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  )
}
