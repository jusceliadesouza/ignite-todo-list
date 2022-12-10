import { DeleteButton } from "./Button";
import { InputCheckBox } from "./Input";

export function Task() {
  return (
    <label className="flex items-center gap-4 justify-between p-4 bg-gray-500 rounded w-full">
      <div className="flex items-center gap-4">
        <InputCheckBox />

        <p className="text-sm">
          Laboris aliquip consectetur cillum laboris proident
          exercitation. Deserunt exercitation cupidatat officia reprehenderit.  
        </p>
      </div>

      <DeleteButton />
    </label>
  );
}
