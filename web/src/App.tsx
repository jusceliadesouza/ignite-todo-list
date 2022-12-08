import { CreateButton, DeleteButton } from "./components/Button";
import { InputCheckBox, InputText } from "./components/Input";

function App() {
  return (
    <div className="flex gap-4 items-center justify-center min-h-screen">
      <InputText placeholder="Adicione uma nova tarefa" />
    </div>
  );
}

export default App;
