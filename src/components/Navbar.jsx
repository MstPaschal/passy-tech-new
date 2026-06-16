import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white font-bold text-2xl">
          Passy<span className="text-cyan-400">Tech</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-slate-300">

          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/services" className="hover:text-cyan-400">Services</Link>
          <Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>

        </div>

        {/* CTA BUTTON */}
        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl text-white">
          Start Project
        </button>

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