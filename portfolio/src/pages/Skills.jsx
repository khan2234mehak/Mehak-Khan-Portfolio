import { Code2, LayoutTemplate, Server, BrainCircuit, Database, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

const icons = { Code2, LayoutTemplate, Server, BrainCircuit, Database, Wrench };

export default function Skills() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="Grouped by where they fit in the stack — from languages through to the tools I use day-to-day."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] || Code2;
            return (
              <Reveal key={group.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-2)] group">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "color-mix(in oklab, var(--accent) 15%, transparent)" }}
                    >
                      <Icon size={18} style={{ color: "var(--accent-2)" }} />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="chip transition-colors duration-200 hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageNav current="/skills" />
    </>
  );
}
