import { BiCheck } from "react-icons/all";

import * as Checkbox from "@radix-ui/react-checkbox";

export function InputText() {}

export function InputCheckBox() {
  return (
    <label className="">
      <Checkbox.Root
        className="w-6 h-6 rounded-full border-2 border-blue hover:bg-dark-blue/20 hover:border-dark-blue checked:bg-dark-purple checked:hover:bg-purple checked:border-dark-purple checked:hover:border-purple"
      >
        <Checkbox.Indicator>
          <BiCheck size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </label>
  );
}

//
