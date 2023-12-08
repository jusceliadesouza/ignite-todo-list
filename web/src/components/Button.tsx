import { FaPlusCircle } from 'react-icons/fa'
import { HiOutlineTrash } from 'react-icons/hi2'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function CreateButton ({ ...rest }: Props) {
  return (
    <button
      type='submit'
      className='flex items-center p-4 gap-2 rounded-lg bg-dark-blue hover:bg-blue font-bold text-sm transition-all'
      {...rest}
    >
      Criar
      <FaPlusCircle />
    </button>
  )
}

export function DeleteButton ({ ...rest }: Props) {
  return (
    <button
      type='submit'
      className='p-4 rounded-lg  hover:bg-gray-400 text-gray-300 hover:text-danger'
      {...rest}
    >
      <HiOutlineTrash size={20} />
    </button>
  )
}
