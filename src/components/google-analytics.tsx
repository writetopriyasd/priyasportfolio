import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { GA_MEASUREMENT_ID } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsTracker() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    const unsubscribe = router.subscribe("onResolved", ({ toLocation, pathChanged }) => {
      if (!pathChanged) return;

      window.gtag("event", "page_view", {
        page_location: `${window.location.origin}${toLocation.href}`,
        page_path: toLocation.pathname,
        page_title: document.title,
        send_to: GA_MEASUREMENT_ID,
      });
    });

    return () => unsubscribe();
  }, [router]);

  return null;
}
