import { CheckBox } from './Checkbox';
import { DeleteButton } from './Button';

export interface Task {
  id: number;
  title: string;
  isConcluded: boolean;
}

interface TaskProps {
  data: Task;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Task({ data, removeTask, toggleTaskStatus }: TaskProps) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isConcluded });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const paragraphChecked = data.isConcluded ? 'text-blue font-bold' : '';

  return (
    <label className='flex items-center gap-4 justify-between p-4 bg-gray-500 rounded w-full'>
      <div className='flex items-center gap-4'>
        <CheckBox onClick={handleTaskToggle} />
        <p className={`text-sm ${paragraphChecked}`}>{data.title}</p>
      </div>

      <DeleteButton onClick={handleRemove} />
    </label>
  );
}
