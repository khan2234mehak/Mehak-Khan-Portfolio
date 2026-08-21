import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import PageNav from "../components/PageNav";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/site";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) {
    errors.message = "Please write a message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("loading");
    try {
      const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

      await new Promise((res) => setTimeout(res, 600));
      window.location.href = mailto;
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Have a role, project, or question in mind? Send a message and it'll open in your email client, ready to send."
        />

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <Reveal delay={0.05}>
            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <ContactRow icon={MapPin} label="Location" value={personal.location} />
              <ContactRow icon={Github} label="GitHub" value="khan2234mehak" href={personal.github} external />
              <ContactRow icon={Linkedin} label="LinkedIn" value="mehak-khana08965354" href={personal.linkedin} external />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="rounded-2xl card-surface p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={onChange} error={errors.name} placeholder="Your name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={onChange} error={errors.subject} placeholder="What's this about?" />
              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                value={form.message}
                onChange={onChange}
                error={errors.message}
                placeholder="Tell me a bit about the opportunity or question..."
              />

              <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto">
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "var(--accent-2)" }}>
                  <CheckCircle2 size={16} /> Your email client should now be open — thanks for reaching out!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm" style={{ color: "#ff6fa5" }}>
                  <AlertCircle size={16} /> Something went wrong. Please try emailing directly instead.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <PageNav current="/contact" />
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl card-surface p-5 transition-all duration-300 hover:border-[var(--accent-2)] hover:-translate-y-0.5">
      <div
        className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center"
        style={{ background: "color-mix(in oklab, var(--accent) 15%, transparent)" }}
      >
        <Icon size={18} style={{ color: "var(--accent-2)" }} />
      </div>
      <div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="block focus-ring rounded-xl">
      {content}
    </a>
  );
}

function Field({ label, name, value, onChange, error, as = "input", type = "text", rows, placeholder }) {
  const Comp = as;
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
        {label}
      </label>
      <Comp
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none focus-ring resize-none"
        style={{
          background: "var(--bg-elev-2)",
          border: `1px solid ${error ? "#ff6fa5" : "var(--border)"}`,
          color: "var(--text)",
        }}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs" style={{ color: "#ff6fa5" }}>
          {error}
        </p>
      )}
    </div>
  );
}
