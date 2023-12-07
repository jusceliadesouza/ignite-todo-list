import { CreateButton } from './Button'
import { InputText } from './Input'

interface NewTaskProps {
  handleAddTask: () => void
  inputValue: string
  setInputValue: (value: string) => void
}

export function NewTask ({
  handleAddTask,
  inputValue,
  setInputValue
}: NewTaskProps) {
  return (
    <div className='w-full max-w-[46rem] flex justify-between gap-2'>
      <InputText
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <CreateButton onClick={handleAddTask} />
    </div>
  )
}
