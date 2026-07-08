import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { getProject, projects, type Project } from "../lib/projects";
import { FadeIn } from "../components/fade-in";
import archDiagram from "../assets/ai-job-agent-architecture.jpg";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Priya D’Souza" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — ${project.tagline}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.summary },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-accent font-semibold">
        ← Back to projects
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="container-page pt-10 pb-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <FadeIn>
        <header className="mt-6 max-w-3xl">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">{project.name}</h1>
          <p className="mt-3 text-xl text-foreground/80 font-medium">{project.tagline}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{project.summary}</p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-[var(--accent-hover)] transition"
            >
              View live <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </header>
      </FadeIn>

      <div className="mt-14 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <FadeIn>
            <Section title="Problem">{project.problem}</Section>
          </FadeIn>
          <FadeIn>
            <Section title="Solution">{project.solution}</Section>
          </FadeIn>

          {project.hasArchitecture && (
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-bold">Architecture</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  n8n workflow orchestration diagram — scraping, ranking, enrichment, and delivery.
                </p>
                <div className="mt-4 rounded-2xl overflow-hidden border border-border bg-card">
                  <img
                    src={archDiagram}
                    alt={`${project.name} architecture diagram`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          )}

          <FadeIn>
            <div>
              <h2 className="font-display text-2xl font-bold">Product decisions</h2>
              <ul className="mt-4 space-y-3">
                {project.decisions.map((d) => (
                  <li key={d} className="flex gap-3 text-foreground/85">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="font-display text-2xl font-bold">Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-foreground/85">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[color-mix(in_oklab,var(--color-success)_20%,transparent)] text-[var(--success)] flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <aside className="lg:col-span-1">
          <FadeIn>
            <div className="card-elevated p-6 sticky top-24">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">Tech stack</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-muted text-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </aside>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl font-bold">More projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="card-elevated p-6 block hover:[&]:card-elevated-hover"
            >
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">{children}</p>
    </div>
  );
}
