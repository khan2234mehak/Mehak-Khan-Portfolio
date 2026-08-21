import { Award, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & certifications"
          description="Foundational coursework across machine learning, AI, and web development."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl card-surface p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent-2)]">
                <div
                  className="h-full min-h-[110px] rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--bg-elev-2)", border: "1px dashed var(--border)" }}
                >
                  <Award size={26} style={{ color: "var(--text-muted)" }} />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1.5 text-sm" style={{ color: "var(--text-muted)" }}>{cert.issuer}</p>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2 transition-all"
                    style={{ color: "var(--accent-2)" }}
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                ) : (
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: "var(--text-muted)" }}
                    title="Certificate link not provided yet"
                  >
                    View Certificate <ExternalLink size={14} className="opacity-50" />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PageNav current="/certifications" />
    </>
  );
}
