import { Code2, BrainCircuit, Server, Database } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/site";

const whatIDo = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building complete web applications — React front ends paired with Node.js/Express or Flask APIs, real-time features, and authentication.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Training and evaluating models across classification, regression and time-series forecasting with Scikit-learn, from raw data to a served prediction.",
  },
  {
    icon: Database,
    title: "Data Science",
    text: "Exploratory data analysis, feature engineering and statistical analysis that turn raw datasets into features a model can actually learn from.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    text: "Designing REST APIs with proper auth (JWT / session-based), database design across SQL and NoSQL, and deploying services that stay reliable.",
  },
];

export default function About() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading eyebrow="About" title="A little about how I work" />

        <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <Reveal delay={0.1}>
            <div className="relative mx-auto lg:mx-0 w-56 h-56 sm:w-64 sm:h-64">
              <div
                className="absolute -inset-2 rounded-[2rem] opacity-40 blur-xl"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
              />
              <div className="relative h-full w-full rounded-[1.75rem] card-surface flex items-center justify-center overflow-hidden">
                {/* Profile image placeholder — swap the span below for an <img> when a photo is available */}
                <span className="font-display text-6xl font-bold text-grad">MK</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {personal.summary}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My technical interests sit at the intersection of full-stack engineering and applied machine learning —
              I like building the whole path from a raw dataset to a trained model to a deployed, usable interface.
              That's shown up in projects spanning time-series forecasting, NLP-based matching, computer vision, and
              production-style APIs with proper authentication and database design.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Career-wise, I'm focused on roles where I can keep working across that full stack — data preprocessing
              and modeling on one side, and the APIs and interfaces that make that work usable on the other.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-24">
        <SectionHeading eyebrow="What I do" title="Where I spend my time" />
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {whatIDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-2)]">
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center"
                  style={{ background: "color-mix(in oklab, var(--accent) 15%, transparent)" }}
                >
                  <item.icon size={20} style={{ color: "var(--accent-2)" }} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PageNav current="/about" />
    </>
  );
}
