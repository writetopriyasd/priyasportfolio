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

    const unsubscribe = router.subscribe("onResolved", () => {
      const location = router.state.location;
      if (!location) return;

      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: location.pathname,
        page_title: document.title,
        send_to: GA_MEASUREMENT_ID,
      });
    });

    return () => unsubscribe();
  }, [router]);

  return null;
}
