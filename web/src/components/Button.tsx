import { FaPlusCircle } from 'react-icons/fa'
import { HiOutlineTrash } from 'react-icons/hi2'

export function CreateButton () {
  

  return (
    <button
      type='submit'
      className='flex items-center p-4 gap-2 rounded-lg bg-dark-blue hover:bg-blue font-bold text-sm transition-all'
    >
      Criar
      <FaPlusCircle />
    </button>
  )
}

export function DeleteButton () {
  return (
    <button
      type='submit'
      className='p-4 rounded-lg  hover:bg-gray-400 text-gray-300 hover:text-danger'
    >
      <HiOutlineTrash size={20} />
    </button>
  )
}
