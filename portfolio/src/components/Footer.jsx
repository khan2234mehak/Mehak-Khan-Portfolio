import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { pages, personal } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight focus-ring rounded-md">
              Mehak Khan
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {personal.role} · {personal.roleSecondary}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in new tab)"
                className="h-9 w-9 flex items-center justify-center rounded-lg card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in new tab)"
                className="h-9 w-9 flex items-center justify-center rounded-lg card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send an email"
                className="h-9 w-9 flex items-center justify-center rounded-lg card-surface hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-colors focus-ring"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Quick links</p>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="text-sm hover:text-[var(--accent-2)] transition-colors focus-ring rounded-md"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>{personal.location}</li>
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-[var(--accent-2)] transition-colors focus-ring rounded-md">
                  {personal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p>© 2026 Mehak Khan. All rights reserved.</p>
          <BackToTopInline />
        </div>
      </div>
    </footer>
  );
}

function BackToTopInline() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1.5 hover:text-[var(--accent-2)] transition-colors focus-ring rounded-md"
    >
      Back to top <ArrowUp size={13} />
    </button>
  );
}
