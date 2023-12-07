import { CreateButton } from './Button'
import { InputText } from './Input'

export function NewTask () {
  return (
    <div className='w-full max-w-[46rem] flex justify-between gap-2'>
      <InputText />
      <CreateButton />
    </div>
  )
}
