import { NAV_ITEMS } from "@/lib/landing-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="display-title text-lg">
            Horizontes
            <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-celeste">
              Globales
            </span>
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Iniciativa de Continental International Education. La información de esta página es
            referencial y se rige por las bases de cada convocatoria.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-celeste"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} Universidad Continental. Todos los derechos reservados.
      </p>
    </footer>
  );
}
