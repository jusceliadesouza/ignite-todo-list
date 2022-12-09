import { CreateButton, DeleteButton } from "./components/Button";
import { InputCheckBox, InputText } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-[1rem]">Components</h1>

      <div className="flex gap-4 items-center">
        <InputCheckBox />
        <DeleteButton />
        <CreateButton />
      </div>

      <InputText placeholder="Digite algo aqui" />
      <Task />
    </div>
  );
}

export default App;
