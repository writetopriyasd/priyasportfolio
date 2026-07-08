import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type ProjectTag } from "../lib/projects";
import { FadeIn } from "../components/fade-in";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "AI Projects — Priya D’Souza" },
      {
        name: "description",
        content:
          "AI product case studies: Serenity (healthcare AI agent), Wealth Compass (AI investment insights), and AI Job Agent (n8n + Docker workflow).",
      },
      { property: "og:title", content: "AI Projects — Priya D’Souza" },
      {
        property: "og:description",
        content: "Case studies across healthcare AI, financial insights, and agentic workflow automation.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

const filters: (ProjectTag | "All")[] = ["All", "AI", "Healthcare", "Automation", "FinTech", "Analytics"];

function ProjectsIndex() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.tags.includes(active as ProjectTag))),
    [active],
  );

  return (
    <div className="container-page pt-14 pb-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Portfolio</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">AI Product Case Studies</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A curated set of AI products I&rsquo;ve shipped or prototyped — showing discovery, product decisions,
          architecture, and outcomes.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 h-9 rounded-full text-sm font-medium border transition ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-accent/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.05}>
            <article className="card-elevated p-6 h-full flex flex-col hover:[&]:card-elevated-hover">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-xl font-bold">{p.name}</h2>
              <p className="mt-1 text-sm font-medium text-foreground/70">{p.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{p.summary}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-[var(--accent-hover)]"
                >
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent"
                  >
                    Live <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
