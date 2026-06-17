import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800"
        : "bg-transparent"
      }
    `}>

      <div className="
      max-w-7xl
      mx-auto
      px-6
      h-20
      flex
      items-center
      justify-between
      ">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/PassyLogo.png"
            alt="Passy Technologies"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-white font-bold text-lg">
              Passy Technologies
            </h1>

            <p className="text-xs text-cyan-400">
              Digital Solutions
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            px-6
            py-3
            rounded-full
            bg-white/5
            backdrop-blur-md
            border
            border-white/10
          "
        >

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >Home</NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >Services</NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >Portfolio</NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >About</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >Contact</NavLink>

        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl text-white transition">
            Start Project
          </button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4 text-slate-300">

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;