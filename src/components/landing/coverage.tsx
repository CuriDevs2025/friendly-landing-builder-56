import { Check, X } from "lucide-react";
import { COVERED, NOT_COVERED } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

export function Coverage() {
  return (
    <section id="cobertura" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="03" label="¿Qué cubre?" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            Lo que el programa <span className="text-celeste">puede cubrir</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-celeste/30 bg-celeste/5 p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-celeste">
                El programa puede cubrir
              </h3>
              <ul className="mt-6 space-y-4">
                {COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-celeste/20">
                      <Check className="size-3.5 text-celeste" />
                    </span>
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                De acuerdo con el destino y cada programa
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                El programa no cubre
              </h3>
              <ul className="mt-6 space-y-4">
                {NOT_COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <X className="size-3.5 text-muted-foreground" />
                    </span>
                    <span className="text-base text-foreground/75">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Estos gastos son asumidos por el estudiante
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
