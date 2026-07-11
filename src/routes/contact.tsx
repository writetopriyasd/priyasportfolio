import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Download, Send, Check } from "lucide-react";
import { FadeIn } from "../components/fade-in";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Priya D’Souza, AI Product Manager" },
      {
        name: "description",
        content:
          "Get in touch with Priya D’Souza — AI Product Manager available for global opportunities. Email, LinkedIn, GitHub, and resume.",
      },
      { property: "og:title", content: "Contact — Priya D’Souza" },
      {
        property: "og:description",
        content: "Let’s build something together. Email, LinkedIn, GitHub, and resume.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "priya.dsouza0623@gmail.com", href: "mailto:priya.dsouza0623@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/priyasd", href: "https://linkedin.com/in/priyasd" },
  { icon: Github, label: "GitHub", value: "github.com/writetopriyasd", href: "https://github.com/writetopriyasd" },
  { icon: Phone, label: "Phone (US)", value: "+1 (909) 255-1786", href: "tel:+19092551786" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="container-page pt-14 pb-8">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Contact</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">Let&rsquo;s build something together.</h1>
          <p className="mt-4 text-muted-foreground">
            Actively exploring AI Product Manager roles — remote or global. Drop a note and I&rsquo;ll get back
            within 24 hours.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-elevated p-5 flex items-center gap-4 hover:[&]:card-elevated-hover"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
            const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
            window.location.href = `mailto:priya.dsouza0623@gmail.com?subject=${subject}&body=${body}`;
            setSent(true);
          }}
          className="mt-10 max-w-3xl mx-auto card-elevated p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full h-11 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full h-11 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <a
              href="https://bit.ly/priya-dsouza-cv" target="_blank" rel="noreferrer"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card text-foreground text-sm font-semibold hover:border-accent/40 hover:text-accent transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-[var(--accent-hover)] transition shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)]"
            >
              {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {sent ? "Opening email…" : "Send message"}
            </button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
}
