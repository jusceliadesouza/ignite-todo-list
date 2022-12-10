import clipboard from "../assets/clipboard.svg";

export function EmptyTaskList() {
  return (
    <div className="border-t border-gray-400 rounded flex flex-col gap-4 items-center justify-center text-gray-300 py-16">
      <img src={clipboard} alt="" width={56} />

      <div>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <p className="text-base">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
