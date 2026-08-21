import { Layers, BrainCircuit, Sparkles, LineChart, ScanFace, Award } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/achievements";

const icons = { Layers, BrainCircuit, Sparkles, LineChart, ScanFace, Award };

export default function Achievements() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Achievements"
          title="Highlights across the stack"
          description="What I've built and learned, grouped by discipline."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon] || Award;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-2)] group">
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
                  >
                    <Icon size={19} color="#fff" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageNav current="/achievements" />
    </>
  );
}
