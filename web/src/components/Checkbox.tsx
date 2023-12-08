import { twix } from "@idered/twix";

import * as Checkbox from '@radix-ui/react-checkbox'

import { BiCheck } from 'react-icons/bi'

interface CheckBoxProps {
  onClick: () => void
}

export const Root = twix(
  Checkbox.Root,
  "border-2 border-blue hover:border-dark-purple rounded-full w-6 h-6 flex items-center justify-center aria-checked:border-dark-purple"
);

export const Indicator = twix(Checkbox.Indicator, "text-indigo-500");

export function CheckBox({ onClick }: CheckBoxProps) {
  return (
    <label onClick={onClick}>
      <Root> {/* Use o estilo Root definido em Exemplo.tsx */}
        <Indicator>
          <BiCheck size={20} />
        </Indicator>
      </Root>
    </label>
  );
}