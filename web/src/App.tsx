import { EmptyTaskList } from "./components/EmptyTaskList";
import { TaskList } from "./components/TaskList";

import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Header />

      <main className="w-full max-w-[46rem] flex flex-col gap-16 p-4 sm:p-0">
        

        <TaskList />
      </main>
    </div>
  );
}

export default App;
