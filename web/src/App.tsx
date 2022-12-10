import { EmptyTaskList } from "./components/EmptyTaskList";
import { TaskList } from "./components/TaskList";

import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [] = useState();

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Header />

      <main className="w-full max-w-[46rem] flex flex-col gap-16 p-4 sm:p-0">
        <TaskList concludedTasks={2} tasksCreated={5} />
      </main>
    </div>
  );
}

export default App;
