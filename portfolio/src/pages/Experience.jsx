import { GraduationCap, Briefcase } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/experience";

export default function Experience() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Education & internships"
          description="A timeline of my academic background and hands-on experience so far."
        />

        <div className="mt-14 relative">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px hidden sm:block"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.type === "Education" ? GraduationCap : Briefcase;
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="relative sm:pl-14">
                    <div
                      className="hidden sm:flex absolute left-0 top-0 h-10 w-10 rounded-full items-center justify-center card-surface"
                      style={{ borderColor: "var(--accent-2)" }}
                    >
                      <Icon size={17} style={{ color: "var(--accent-2)" }} />
                    </div>
                    <div className="rounded-2xl card-surface p-6 transition-all duration-300 hover:border-[var(--accent-2)]">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="chip">{item.type}</span>
                        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>{item.period}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent-2)" }}>{item.org}</p>
                      <ul className="mt-3 space-y-1.5">
                        {item.points.map((p) => (
                          <li key={p} className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--text-muted)" }}>
                            <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--accent-2)" }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PageNav current="/experience" />
    </>
  );
}
