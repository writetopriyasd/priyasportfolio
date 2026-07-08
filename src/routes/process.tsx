import { createFileRoute } from "@tanstack/react-router";
import {
  Target, Search, Microscope, ListChecks, FileText, Sparkles, Users, Rocket, LineChart,
} from "lucide-react";
import { FadeIn } from "../components/fade-in";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How I Work — Product Lifecycle for AI-native Teams" },
      {
        name: "description",
        content:
          "End-to-end product lifecycle: discovery, research, prioritization, PRDs, AI-assisted prototyping, engineering collaboration, launch, and iteration.",
      },
      { property: "og:title", content: "How I Work — Priya D’Souza" },
      {
        property: "og:description",
        content: "The repeatable product lifecycle I use to ship AI-native products.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  { icon: Target, title: "Customer Problem", body: "Frame the problem as a concrete user job, not a feature ask." },
  { icon: Search, title: "Market & User Discovery", body: "Interviews, competitor teardown, and workflow shadowing." },
  { icon: Microscope, title: "Research & Insights", body: "Synthesize signals into opportunity statements and hypotheses." },
  { icon: ListChecks, title: "Prioritization", body: "RICE and MoSCoW to sequence bets against outcomes." },
  { icon: FileText, title: "PRD & User Stories", body: "Crisp PRDs, acceptance criteria, and success metrics." },
  { icon: Sparkles, title: "AI-assisted Prototyping", body: "Lovable, LLM flows, and LCNC prototypes to validate before build." },
  { icon: Users, title: "Engineering Collaboration", body: "Shared ownership of scope, risk, and technical trade-offs." },
  { icon: Rocket, title: "Launch & GTM", body: "Beta plans, onboarding, enablement, and cross-functional rollout." },
  { icon: LineChart, title: "Metrics & Iteration", body: "Instrument, measure TCR/adoption, and close the loop." },
];

function ProcessPage() {
  return (
    <div className="container-page pt-14 pb-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Product process</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">How I work as a Product Manager</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Instead of listing skills, here&rsquo;s the end-to-end lifecycle I run — the same loop I use for
          enterprise AI, workflow automation, and healthcare products.
        </p>
      </FadeIn>

      <div className="relative mt-14">
        <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-accent/30 via-border to-transparent" />
        <ol className="space-y-6 md:space-y-10">
          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <li key={s.title} className="md:grid md:grid-cols-2 md:gap-10 relative">
                <div className={`${left ? "md:pr-10 md:text-right md:col-start-1" : "md:pl-10 md:col-start-2"}`}>
                  <FadeIn y={20}>
                    <div className="card-elevated p-6">
                      <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                        <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </FadeIn>
                </div>
                <div aria-hidden className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
