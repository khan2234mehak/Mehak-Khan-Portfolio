import { Link } from "react-router-dom";
import { Home, FolderGit2 } from "lucide-react";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-32 text-center">
      <Reveal>
        <p className="font-display text-[7rem] sm:text-[9rem] font-bold leading-none text-grad">404</p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold">This page didn't ship</h1>
        <p className="mt-4 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back Home
          </Link>
          <Link to="/projects" className="btn btn-outline">
            <FolderGit2 size={16} /> View Projects
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
