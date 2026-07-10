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
    if (typeof window === "undefined") return;
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.includes("XXXXXXXXXX")) return;

    // Initialize the dataLayer queue and the gtag stub if they don't exist.
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }

    // Send the initial config / page_view for the first load.
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });

    // Ensure the external gtag.js library is loaded.
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    // Track subsequent client-side route changes.
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
