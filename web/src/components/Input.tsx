import { BiCheck } from "react-icons/all";

import * as Checkbox from "@radix-ui/react-checkbox";

interface InputTextProps {
  placeholder: string;
}

export function InputText({placeholder, ...props }:InputTextProps) {
  return (
    <label>
      <input
        className="w-full max-w-[32rem] rounded text-base p-4 bg-gray-500 placeholder:text-gray-300 focus:outline-none"
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
}

export function InputCheckBox() {
  return (
    <label>
      <Checkbox.Root className="w-6 h-6 rounded-full border-2 border-blue hover:bg-dark-blue/20 hover:border-dark-blue checked:bg-dark-purple checked:hover:bg-purple checked:border-dark-purple checked:hover:border-purple">
        <Checkbox.Indicator>
          <BiCheck size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </label>
  );
}

//
