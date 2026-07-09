export type ProjectTag = "AI" | "Healthcare" | "Automation" | "Analytics" | "FinTech";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  tags: ProjectTag[];
  liveUrl?: string;
  problem: string;
  solution: string;
  stack: string[];
  decisions: string[];
  outcomes: string[];
  hasArchitecture?: boolean;
};

export const projects: Project[] = [
  {
    slug: "serenity",
    name: "Serenity",
    tagline: "AI wellness companion for geriatric care",
    summary:
      "Device-agnostic healthcare AI agent that monitors daily routines, offers medication reminders, wellness check-ins, conversational support, and emergency caregiver notifications.",
    tags: ["AI", "Healthcare"],
    liveUrl: "https://bit.ly/4gW4AgQ",
    problem:
      "Older adults living independently often miss medications, skip wellness routines, and lack a low-friction way to escalate to caregivers when something feels off.",
    solution:
      "A conversational AI companion with routine tracking, reminders, and human-in-the-loop escalation. Built in Lovable, version-controlled on GitHub, deployed on Netlify.",
    stack: ["Lovable", "React", "TypeScript", "LLM prompts", "GitHub", "Netlify"],
    decisions: [
      "Prioritized voice-first, low-cognitive-load flows over dashboards",
      "Designed conversation intents around wellness, not diagnosis, to stay outside clinical scope",
      "Human-in-the-loop caregiver notifications for anything ambiguous",
    ],
    outcomes: [
      "Clickable, deployable prototype validated with target caregiver personas",
      "Reusable conversation-design pattern for empathetic assistants",
    ],
  },
  {
    slug: "wealth-compass",
    name: "Wealth Compass",
    tagline: "AI-enabled investment insights dashboard",
    summary:
      "FinPulse AI — live portfolio insights, KPI dashboards, market analytics, and decision-support visualizations for SIP-guided investing.",
    tags: ["AI", "FinTech", "Analytics"],
    liveUrl: "https://bit.ly/4ybnYNe",
    problem:
      "Retail investors juggle scattered signals across market data, portfolio KPIs, and personal goals with no consolidated, opinionated view.",
    solution:
      "A conversational analytics dashboard that surfaces portfolio KPIs and market context in a single premium UI, with AI-generated commentary on movements.",
    stack: ["Lovable", "React", "Charting", "LLM prompts", "GitHub", "Netlify"],
    decisions: [
      "Framed the dashboard around three user questions instead of metric dumps",
      "Used natural-language summaries alongside every chart",
      "Kept AI outputs advisory, not prescriptive, to manage financial risk",
    ],
    outcomes: [
      "End-to-end prototype demonstrating conversational AI in a financial UI",
      "Reference pattern for pairing narrative AI with quantitative charts",
    ],
  },
  {
    slug: "ai-job-agent",
    name: "AI Job Agent",
    tagline: "Docker + n8n workflow that finds, matches, and drafts",
    summary:
      "Multi-portal job scraping, Gemini resume matching, Perplexity enrichment, and Gmail notifications — 80% less manual effort across the candidate workflow.",
    tags: ["AI", "Automation"],
    problem:
      "Job seekers waste hours triaging listings, tailoring resumes, and researching companies before ever hitting apply.",
    solution:
      "An agentic n8n workflow running in Docker that scrapes LinkedIn/Indeed, ranks matches with Gemini, enriches context with Perplexity, drafts tailored outputs, and notifies via Gmail — with a human validation queue in the middle.",
    stack: ["Docker", "n8n", "Gemini", "Perplexity", "Google Docs API", "Gmail API"],
    decisions: [
      "Kept a human-in-the-loop review queue instead of full auto-apply",
      "Split scraping, ranking, and drafting into isolated n8n sub-flows for observability",
      "Chose Gemini for structured matching and Perplexity for open-web enrichment",
    ],
    outcomes: [
      "80% reduction in manual triage effort",
      "End-to-end automated candidate workflow with review gates",
    ],
    hasArchitecture: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
