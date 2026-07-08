import { Link } from "@tanstack/react-router";

export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-30">
      <Link
        to="/contact"
        className="flex items-center justify-center h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[0_10px_30px_-10px_rgba(17,24,39,0.5)]"
      >
        Let&rsquo;s Build Something Together
      </Link>
    </div>
  );
}
