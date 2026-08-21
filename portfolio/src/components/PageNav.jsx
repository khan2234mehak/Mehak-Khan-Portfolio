import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { pages } from "../data/site";

export default function PageNav({ current }) {
  const idx = pages.findIndex((p) => p.path === current);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <nav
      aria-label="Page navigation"
      className="container-page py-10 flex items-center justify-between gap-3 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      {prev ? (
        <Link
          to={prev.path}
          className="btn btn-outline focus-ring !px-3 sm:!px-5"
        >
          <ArrowLeft size={15} />
          <span className="hidden sm:inline">{prev.name}</span>
        </Link>
      ) : (
        <span />
      )}

      <Link to="/" className="btn btn-outline focus-ring !px-3 sm:!px-5" aria-label="Home">
        <Home size={15} />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {next ? (
        <Link
          to={next.path}
          className="btn btn-outline focus-ring !px-3 sm:!px-5"
        >
          <span className="hidden sm:inline">{next.name}</span>
          <ArrowRight size={15} />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
