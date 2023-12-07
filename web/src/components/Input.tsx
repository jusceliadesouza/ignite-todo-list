import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { BiCheck } from "react-icons/bi";

import * as Checkbox from "@radix-ui/react-checkbox";

export function InputText() {
  return (
    <label className="w-full">
      <input
        className="w-full rounded text-base p-4 bg-gray-500 placeholder:text-gray-300 focus:outline-none focus:ring focus:ring-blue"
        placeholder= {"Adicione uma nova tarefa"}
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
