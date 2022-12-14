import { useState } from "react";
import { Task } from "./Task";

interface TaskListProps {
  tasksCreated: number;
  concludedTasks: number;
}

export function TaskList({ tasksCreated, concludedTasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-gray-300 mt-16">
      <div className="w-full flex justify-between text-gray-200">
        <div className="flex gap-2 items-center font-bold">
          <h2 className="text-blue">Tarefas criadas</h2>
          <span className="px-2 py-[2px] text-xs bg-gray-400 rounded-full">
            {tasksCreated}
          </span>
        </div>

        <div className="flex gap-2 items-center font-bold">
          <h2 className="text-purple">Concluídas</h2>
          <span className="px-2 py-[2px] text-xs bg-gray-400 rounded-full">
            {concludedTasks} de {tasksCreated}
          </span>
        </div>
      </div>

      <div className="mt-6 mb-20 flex flex-col gap-3">
        <Task />
        <Task />
      </div>
    </div>
  );
}
