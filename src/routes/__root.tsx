import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { MobileCTA } from "../components/mobile-cta";
import { GoogleAnalyticsTracker } from "../components/google-analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-hover)] transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&rsquo;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-hover)] transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Priya D’Souza — AI Product Manager Portfolio" },
      {
        name: "description",
        content:
          "AI Product Manager with 7+ years shipping enterprise AI, workflow automation, and healthcare platforms. Explore case studies, process, and experience.",
      },
      { name: "author", content: "Priya D’Souza" },
      { property: "og:site_name", content: "Priya D’Souza" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Priya D’Souza — AI Product Manager Portfolio" },
      {
        property: "og:description",
        content:
          "AI Product Manager with 7+ years shipping enterprise AI, workflow automation, and healthcare platforms. Explore case studies, process, and experience.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Priya D’Souza — AI Product Manager Portfolio" },
      {
        name: "twitter:description",
        content:
          "AI Product Manager with 7+ years shipping enterprise AI, workflow automation, and healthcare platforms. Explore case studies, process, and experience.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7d4dead6-55fe-45c3-97fc-4c2ecfb7b194/id-preview-b17311dd--b05f6e7c-c9c4-4d57-87d8-017f65311c9b.lovable.app-1783607451006.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7d4dead6-55fe-45c3-97fc-4c2ecfb7b194/id-preview-b17311dd--b05f6e7c-c9c4-4d57-87d8-017f65311c9b.lovable.app-1783607451006.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "text/javascript",
        innerHTML: `
          (function () {
            const stored = typeof localStorage !== "undefined" && localStorage.getItem("theme");
            const root = document.documentElement;
            if (stored === "light") {
              root.classList.remove("dark");
            } else {
              root.classList.add("dark");
            }
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <MobileCTA />
      </div>
      <GoogleAnalyticsTracker />
    </QueryClientProvider>
  );
}
