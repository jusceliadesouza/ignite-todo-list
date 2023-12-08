export function InputText ({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <label className='w-full'>
      <input
        className='w-full rounded text-base p-4 bg-gray-500 placeholder:text-gray-300 focus:outline-none focus:ring focus:ring-blue'
        placeholder={'Adicione uma nova tarefa'}
        {...rest}
      />
    </label>
  )
}
