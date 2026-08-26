import { useEffect, useState } from "react";
import { APPLY_URL } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-5 right-5 z-40 hidden w-56 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 sm:block",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="gradient-primary block px-5 py-3 text-center text-sm font-bold uppercase leading-tight tracking-[0.1em] text-primary-foreground">
        Convocatoria 2026
      </span>
      <span className="block bg-celeste px-5 py-3 text-center text-sm font-semibold text-primary-dark">
        Postula aquí
      </span>
    </a>
  );
}
