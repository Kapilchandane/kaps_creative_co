import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import Magnetic from "./Magnetic";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Services", to: "/#services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Brands", to: "/#brands" },
  { name: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 dark:border-white/10 bg-white/70 dark:bg-[#09090f]/70 backdrop-blur-2xl backdrop-saturate-150">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="shrink-0 whitespace-nowrap text-base font-black tracking-tight sm:text-lg md:text-xl"
        >
          KAPS <span className="text-violet-600 dark:text-violet-400">CREATIVE</span> CO.
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm transition hover:text-violet-600 dark:text-violet-400 ${
                `${location.pathname}${location.hash}` === link.to
                  ? "text-violet-600 dark:text-violet-400"
                  : "text-slate-700 dark:text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 transition hover:border-violet-400 lg:inline-flex"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Magnetic className="hidden lg:inline-flex">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 sm:px-6 py-3 text-sm font-semibold transition hover:bg-violet-400"
          >
            Get a Quote <ArrowUpRight size={17} />
          </Link>
        </Magnetic>

        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="shrink-0 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2 transition hover:border-violet-400 lg:hidden"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          type="button"
          className="shrink-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11111b] px-4 sm:px-6 py-5 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:text-violet-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}