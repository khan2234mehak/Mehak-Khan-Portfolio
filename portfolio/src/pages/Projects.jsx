import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects, categories } from "../data/projects";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = active === "All" || p.category.includes(active);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, active]);

  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="8 real, deployed projects"
          description="Full-stack platforms, ML systems, and computer vision — search or filter to explore."
        />

        <div className="mt-10 flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-muted)" }}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              aria-label="Search projects"
              className="w-full rounded-xl card-surface pl-11 pr-4 py-3 text-sm focus-ring outline-none placeholder:opacity-60"
              style={{ color: "var(--text)" }}
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all focus-ring"
                style={
                  active === c
                    ? { background: "linear-gradient(100deg, var(--accent), var(--accent-2))", color: "#fff" }
                    : { background: "var(--bg-elev)", border: "1px solid var(--border)", color: "var(--text-muted)" }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
          Showing {filtered.length} of {projects.length} projects
        </p>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={(i % 6) * 0.06} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="font-display text-lg font-semibold">No projects match that search</p>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
              Try a different keyword or reset the filter.
            </p>
          </div>
        )}
      </section>

      <PageNav current="/projects" />
    </>
  );
}
