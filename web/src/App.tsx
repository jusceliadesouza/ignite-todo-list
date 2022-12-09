import { CreateButton, DeleteButton } from "./components/Button";
import Header from "./components/Header";
import { InputCheckBox, InputText } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Header />

      <main className="w-full max-w-[46rem] mt-[-22rem] absolute">
        <div className="flex justify-between gap-2">
          <InputText />
          <CreateButton />
        </div>
      </main>
    </div>
  );
}

export default App;
