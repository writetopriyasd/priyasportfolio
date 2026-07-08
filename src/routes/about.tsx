import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "../components/fade-in";
import { GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Priya D’Souza, AI Product Manager" },
      {
        name: "description",
        content:
          "About Priya D’Souza — AI-empowered Product Owner with 7+ years across US Healthcare and Financial Services, specialized in AI-assisted product discovery.",
      },
      { property: "og:title", content: "About — Priya D’Souza" },
      {
        property: "og:description",
        content: "AI-empowered Product Owner with 7+ years across US Healthcare and Financial Services.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const skillGroups = [
  {
    heading: "AI Product",
    items: [
      "Generative AI", "AI Agents", "Agentic Workflows", "Prompt Engineering", "Context Engineering",
      "LLM Evaluation", "RAG", "Human-in-the-Loop", "Predictive Models", "AI Product Strategy",
    ],
  },
  { heading: "AI Tools", items: ["n8n", "Claude", "GitHub Copilot", "Lovable", "Docker", "Ollama", "MCP", "VS Code", "Netlify", "Rovo"] },
  { heading: "Analytics", items: ["SQL", "Python", "Power BI", "Tableau", "Excel (Power Query, VBA, Pivot)"] },
  { heading: "Product", items: ["Jira", "Confluence", "REST APIs", "Agile (Scrum/Kanban)", "Product Discovery", "Figma", "BPMN/UML", "Draw.io", "Visio"] },
  { heading: "EMR / EHR", items: ["Epic", "AdvancedMD", "Cerner", "athenahealth", "eClinicalWorks"] },
  { heading: "Healthcare", items: ["RCM", "RPM", "RPA", "Credentialing / Payer Workflows", "PHI/PII", "HIPAA", "GDPR", "EDI"] },
  { heading: "Cloud / Data", items: ["Azure", "AWS", "GCP", "Python", "Postman"] },
];

function AboutPage() {
  return (
    <div className="container-page pt-14 pb-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">About</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          AI-empowered Product Owner turning enterprise workflows into intelligent products.
        </h1>
        <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            <p>
              I&rsquo;m Priya D&rsquo;Souza — a US Citizen and AI Product Manager with 7+ years delivering
              enterprise SaaS products across US Healthcare and Financial Services.
            </p>
            <p>
              I lead AI-assisted product discovery, workflow automation, data products, PRD generation,
              and prototyping using Generative AI, LLMs, agentic workflows, SQL, and LCNC automation.
            </p>
            <p>
              I partner closely with enterprise clients to streamline operations — improving delivery
              speed by 70%, reducing reporting errors by 30%, and supporting 95+ healthcare payer
              organizations through AI-enabled workflows and executive dashboards.
            </p>
          </div>
          <div className="card-elevated p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Education</div>
                <div className="font-medium">B.E. Electronics · Minor in CS</div>
                <div className="text-sm text-muted-foreground">1994 – 1998</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Certifications</div>
                <div className="font-medium">Google Analytics · AI Foundations</div>
                <div className="font-medium">Power BI · Machine Learning</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mt-16">
        <FadeIn>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Skills</h2>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {skillGroups.map((g, i) => (
            <FadeIn key={g.heading} delay={i * 0.04}>
              <div className="card-elevated p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{g.heading}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-muted text-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
