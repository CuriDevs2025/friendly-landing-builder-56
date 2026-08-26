import { CalendarDays } from "lucide-react";
import { DATES } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

export function Dates() {
  return (
    <section id="fechas" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="06" label="Fechas y plazos" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            Próximamente: <span className="text-celeste">convocatoria 2026</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {DATES.map((date, i) => (
            <Reveal key={date.title} delay={i * 90}>
              <article className="card-soft flex h-full items-center gap-6 rounded-2xl border border-border p-8">
                <div className="flex size-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-violet/40 bg-violet/10">
                  <span className="display-title text-3xl text-foreground">{date.day}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-celeste">
                    {date.month}
                  </span>
                </div>
                <div>
                  <CalendarDays className="mb-2 size-5 text-violet" />
                  <h3 className="text-lg font-bold text-card-foreground">{date.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
