import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { APPLY_URL, NAV_ITEMS } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md text-foreground"
          : "bg-white/20 backdrop-blur-sm border-b border-black/5 text-zinc-900",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className={cn("display-title text-xl leading-none transition-colors", scrolled ? "text-foreground" : "text-zinc-950")}>
            Horizontes
            <span className={cn("block text-[0.7rem] font-semibold tracking-[0.3em]", scrolled ? "text-celeste" : "text-[#6b11d4]")}>
              Globales
            </span>
          </span>
          <span className={cn("hidden h-8 w-px sm:block", scrolled ? "bg-border" : "bg-black/15")} />
          <span className={cn("hidden text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.18em] sm:block", scrolled ? "text-muted-foreground" : "text-zinc-700")}>
            Continental
            <br />
            International Education
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn("text-sm font-medium transition-colors", scrolled ? "text-foreground/80 hover:text-celeste" : "text-zinc-800 hover:text-[#6b11d4]")}
            >
              {item.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark shadow-sm"
          >
            Postula
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className={cn("rounded-md p-2 lg:hidden", scrolled ? "text-foreground" : "text-zinc-900")}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm text-foreground/85"
            >
              {item.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Postula ahora
          </a>
        </nav>
      )}
    </header>
  );
}
