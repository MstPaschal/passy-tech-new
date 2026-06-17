import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2
        rounded-xl
        bg-slate-800
        hover:bg-slate-700
        transition
        border
        border-slate-700
      "
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-cyan-400" />
      )}
    </button>
  );
}

export default ThemeToggle;