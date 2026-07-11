import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles, HeartPulse, Workflow, LineChart } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../lib/projects";
import { FadeIn } from "../components/fade-in";
import portrait from "../assets/priya-portrait.jpg.asset.json";
import { downloadResume } from "../lib/download-resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priya D’Souza — AI Product Manager Portfolio" },
      {
        name: "description",
        content:
          "AI Product Manager with 7+ years shipping enterprise AI, workflow automation, and healthcare platforms. Explore case studies, process, and experience.",
      },
      { property: "og:title", content: "Priya D’Souza — AI Product Manager Portfolio" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "7+", label: "Years in Product" },
  { value: "95+", label: "Healthcare payer orgs supported" },
  { value: "70%", label: "Faster delivery turnaround" },
  { value: "80%", label: "Manual effort reduced via AI workflows" },
];

const focusAreas = [
  { icon: Sparkles, title: "Enterprise AI", body: "GenAI, agentic workflows, RAG, LLM evaluation." },
  { icon: HeartPulse, title: "Healthcare", body: "RCM, RPM, EMR/EHR, HIPAA-aware product design." },
  { icon: Workflow, title: "Workflow Automation", body: "n8n, LCNC, human-in-the-loop systems." },
  { icon: LineChart, title: "Data Products", body: "SQL, Power BI, dashboards, decision support." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 500px at 85% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(700px 400px at 10% 10%, rgba(79,70,229,0.10), transparent 60%)",
          }}
        />
        <div className="container-page pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Available for Global Opportunities · US Citizen
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]"
            >
              Hi, I&rsquo;m Priya <span className="inline-block">👋</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-xl sm:text-2xl font-display font-semibold text-foreground/90"
            >
              AI Product Manager building
              <span className="text-accent"> enterprise AI</span>,
              <span className="text-accent"> workflow automation</span>,
              <span className="text-accent"> healthcare platforms</span>,
              and intelligent user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed"
            >
              7+ years delivering enterprise SaaS across US Healthcare and Financial Services —
              leading AI-assisted discovery, PRD generation, prototyping, and agentic workflows
              that ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-[var(--accent-hover)] transition shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)] hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.8)]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/__l5e/assets-v1/65d6c390-0f26-4a90-bf1b-bc1cf78f6964/Priya-DSouza-Resume.docx"
                onClick={downloadResume}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border bg-card text-foreground text-sm font-semibold hover:border-accent/40 hover:text-accent transition cursor-pointer"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto lg:mx-0 w-full max-w-[320px]"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, rgba(79,70,229,0.35), rgba(99,102,241,0.15) 60%, transparent)",
              }}
            />
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-[0_30px_80px_-30px_rgba(17,24,39,0.35)]">
              <img
                src={portrait.url}
                alt="Priya D’Souza — AI Product Manager"
                className="relative z-10 w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Focus areas */}
      <section className="container-page mt-20">
        <FadeIn>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Focus</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Where I do my best work</h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.05}>
              <div className="card-elevated p-6 h-full hover:[&]:card-elevated-hover group">
                <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page mt-24">
        <FadeIn>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Selected work</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">AI Product Portfolio</h2>
            </div>
            <Link to="/projects" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-[var(--accent-hover)]">
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="card-elevated p-6 h-full block hover:[&]:card-elevated-hover"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/70">{p.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read case study <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process teaser */}
      <section className="container-page mt-24">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-[color-mix(in_oklab,var(--color-accent)_10%,var(--color-card))] to-card p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">How I work</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                A product lifecycle designed for AI-native teams.
              </h2>
              <p className="mt-4 text-muted-foreground">
                From customer problem to metrics — the same repeatable loop I use to move enterprise AI
                products from a Miro board to production.
              </p>
              <Link
                to="/process"
                className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
              >
                See the process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact band */}
      <section className="container-page mt-20">
        <FadeIn>
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Let&rsquo;s build something together.</h2>
            <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
              Actively exploring AI Product Manager roles — remote or global. Reach out and let&rsquo;s
              talk about your product.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-[var(--accent-hover)] transition"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/__l5e/assets-v1/65d6c390-0f26-4a90-bf1b-bc1cf78f6964/Priya-DSouza-Resume.docx"
                onClick={downloadResume}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/20 text-primary-foreground text-sm font-semibold hover:bg-white/10 transition cursor-pointer"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
