import { Counter } from "./components/Counter";
import { ThemeSwitch } from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto m-4">
      <div className="w-full h-full border border-blue-500 rounded-sm p-2 gap-2 flex flex-col">
        <Counter />
        <ThemeSwitch />
      </div>
    </div>
  );
}
