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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="display-title text-xl leading-none text-foreground">
            Horizontes
            <span className="block text-[0.7rem] font-semibold tracking-[0.3em] text-celeste">
              Globales
            </span>
          </span>
          <span className="hidden h-8 w-px bg-border sm:block" />
          <span className="hidden text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground sm:block">
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
              className="text-sm text-foreground/80 transition-colors hover:text-celeste"
            >
              {item.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Postula
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
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
