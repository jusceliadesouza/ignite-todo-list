import rocket from "../assets/rocket.svg";

export default function Header() {
  return (
    <div className="w-full h-48 bg-gray-700 top-0 bottom-auto fixed flex flex-col items-center justify-center gap-3">
      <header className="flex items-center justify-center gap-3">
        <img src={rocket} width={22} height={36} alt={"logo rocket"} />

        <div className="font-black text-[2.5rem]">
          <span className="text-blue">to</span>
          <span className="text-dark-purple">do</span>
        </div>
      </header>
    </div>
  );
}
