import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {

  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-slate-800 p-3 rounded-full shadow-lg"
    >

      {theme === "dark"
        ? <Sun className="text-yellow-400" />
        : <Moon className="text-cyan-400" />
      }

    </button>
  );
}

export default ThemeToggle;