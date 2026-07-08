import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Priya D&rsquo;Souza — AI Product Manager
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:priya.dsouza0623@gmail.com"
            aria-label="Email"
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/priyasd"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/writetopriyasd"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="ml-2 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
          >
            Let&rsquo;s talk →
          </Link>
        </div>
      </div>
    </footer>
  );
}
