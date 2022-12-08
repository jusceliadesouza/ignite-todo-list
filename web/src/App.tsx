import { CreateButton, DeleteButton } from "./components/Button";

function App() {
  return (
    <div className="flex gap-4 items-center justify-center min-h-screen">
      <DeleteButton />
      <CreateButton />
    </div>
  );
}

export default App;
