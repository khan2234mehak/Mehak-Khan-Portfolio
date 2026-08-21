import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react";
import { pages, personal } from "../data/site";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container-page">
        <div className="glass rounded-2xl px-4 md:px-5 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 focus-ring rounded-md" aria-label="Mehak Khan — Home">
            <span
              className="font-display font-bold text-lg h-9 w-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }}
            >
              MK
            </span>
            <span className="hidden sm:block font-display font-semibold tracking-tight">
              Mehak Khan
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {pages.map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                end={p.path === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                    isActive ? "text-[var(--accent-2)]" : "hover:text-[var(--accent-2)]"
                  }`
                }
                style={({ isActive }) => ({ color: isActive ? undefined : "var(--text-muted)" })}
              >
                {p.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg hover:text-[var(--accent-2)] focus-ring transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg hover:text-[var(--accent-2)] focus-ring transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={17} />
            </a>
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center rounded-lg hover:text-[var(--accent-2)] focus-ring transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-9 w-9 flex items-center justify-center rounded-lg focus-ring"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden glass mt-2 rounded-2xl overflow-hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col p-2">
                {pages.map((p) => (
                  <NavLink
                    key={p.path}
                    to={p.path}
                    end={p.path === "/"}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium focus-ring ${
                        isActive ? "text-[var(--accent-2)] bg-[var(--bg-elev-2)]" : ""
                      }`
                    }
                    style={({ isActive }) => ({ color: isActive ? undefined : "var(--text-muted)" })}
                  >
                    {p.name}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
