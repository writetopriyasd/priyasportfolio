import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "../components/fade-in";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Priya D’Souza, AI Product Manager" },
      {
        name: "description",
        content:
          "7+ years across Healthcare, Enterprise SaaS, and Financial Services — Propio, Synergen Health, American Specialty Health, and more.",
      },
      { property: "og:title", content: "Experience — Priya D’Souza" },
      {
        property: "og:description",
        content: "Career journey across Healthcare, Enterprise SaaS, and Financial Services.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const impact = [
  { value: "80%", label: "Manual effort reduced via AI workflows" },
  { value: "70%", label: "Faster delivery turnaround" },
  { value: "30%", label: "Reduced reporting inconsistencies" },
  { value: "95+", label: "Healthcare payer orgs supported" },
];

const roles = [
  {
    company: "Propio Language Services (OSP Consultant)",
    role: "Product Owner · BA Manager",
    period: "Aug 2024 – Jul 2026",
    bullets: [
      "Led product discovery and delivery for the Client Submission Portal supporting onboarding of 5–10 enterprise clients.",
      "Used low-code GenAI tools and SQL prototypes to validate AI-powered UX flows with stakeholders before engineering build-out.",
    ],
  },
  {
    company: "Synergen Health (OSP Consultant)",
    role: "Sr. Business Analyst",
    period: "Jan 2023 – Jul 2024",
    bullets: [
      "Led scope discovery and stakeholder workshops with operations, billing, and payer teams to prioritize roadmap by impact and feasibility.",
      "Prototyped AI-assisted workflows with GenAI, agentic frameworks, and LCNC automation — validating before engineering investment.",
      "Authored PRDs, epics, user stories, process maps, wireframes, and acceptance criteria to align product, engineering, and stakeholders.",
    ],
  },
  {
    company: "American Specialty Health · San Diego, CA",
    role: "Sr. Business Analyst",
    period: "Mar 2012 – Jun 2016",
    bullets: [
      "Embedded enterprise-wide BA practice, governance, and Agile operating models across multiple Scrum teams.",
      "Reduced reporting inconsistencies by 30% and accelerated delivery turnaround by 70%.",
      "Built/validated SQL-based dashboards supporting campaign analytics for 95+ payer organizations.",
    ],
  },
  {
    company: "Dale Carnegie Training · Claremont, CA",
    role: "Business Analyst",
    period: "Jun 2010 – Feb 2012",
    bullets: [
      "Contributed to MQL/SQL, PLG, and lifecycle marketing — focused on pipeline health and conversion optimization.",
      "Ran gap analyses and audits; implemented workflow automation to streamline operations.",
    ],
  },
  {
    company: "ESRI · Redlands, CA",
    role: "IT Developer Support Analyst",
    period: "Aug 2004 – Nov 2005",
    bullets: [
      "Developed .NET code samples for the ESRI .NET Connector — 25% increase in user adoption within the first quarter.",
      "Provided production support, issue triage, and training for seamless product usage.",
    ],
  },
];

function ExperiencePage() {
  return (
    <div className="container-page pt-14 pb-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Experience</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">7+ years shipping enterprise products</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Achievements, impact, and the career journey behind the AI PM work — spanning Healthcare,
          Financial Services, and Enterprise SaaS.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {impact.map((s) => (
            <div key={s.label} className="card-elevated p-6">
              <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16 relative">
        <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
        <ol className="space-y-6">
          {roles.map((r, i) => (
            <FadeIn key={r.company} delay={i * 0.05}>
              <li className="relative pl-12">
                <span
                  aria-hidden
                  className="absolute left-2.5 top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20"
                />
                <div className="card-elevated p-6 hover:[&]:card-elevated-hover">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold">{r.role}</h3>
                      <p className="text-sm font-medium text-foreground/70">{r.company}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {r.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </div>
  );
}
