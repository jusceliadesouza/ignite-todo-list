import { DeleteButton } from "./Button";
import { InputCheckBox } from "./Input";

export interface Task {
  id: string
  title: string
  isConcluded: boolean
}

interface TaskProps {
  title: string
}

export function Task({ title}: TaskProps) {
  return (
    <label className="flex items-center gap-4 justify-between p-4 bg-gray-500 rounded w-full">
      <div className="flex items-center gap-4">
        <InputCheckBox />

        <p className="text-sm">
          {title}
        </p>
      </div>

      <DeleteButton />
    </label>
  );
}
