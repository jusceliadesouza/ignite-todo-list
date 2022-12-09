import { CreateButton } from "./components/Button";
import Header from "./components/Header";
import { InputText } from "./components/Input";
import { Task } from "./components/Task";

import clipboard from "./assets/clipboard.svg";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Header />

      <main className="w-full max-w-[46rem] mt-4 absolute flex flex-col gap-16">
        <section id={"newTask"} className="flex justify-between gap-2">
          <InputText />
          <CreateButton />
        </section>

        <section id={"tasks"} className="flex flex-col gap-6">
          <header className="info">
            <div className="title flex justify-between">
              <div className="flex gap-2 items-center font-bold">
                <p className="text-blue text-sm">Tarefas criadas </p>
                <span className="bg-gray-400 rounded-full py-[2px] px-3">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center font-bold">
                <p className="text-blue text-sm">Concluídas</p>
                <span className="bg-gray-400 rounded-full py-[2px] px-3">
                  0
                </span>
              </div>
            </div>
          </header>

          <div className="border-t border-gray-400 rounded flex flex-col gap-4 items-center justify-center text-gray-300 py-16">
            <img src={clipboard} alt="" width={56} />

            <div>
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <p className="text-base">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
