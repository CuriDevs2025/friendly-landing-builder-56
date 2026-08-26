import { Globe2, GraduationCap, Sparkles } from "lucide-react";
import { PILLARS } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

const ICONS = [Globe2, GraduationCap, Sparkles];

export function About() {
  return (
    <section id="conoce" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="01" label="Conoce Horizontes Globales" />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <h2 className="display-title text-[clamp(2rem,5vw,3.4rem)]">
              ¿Qué es <span className="text-celeste">Horizontes Globales</span>?
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Es una iniciativa de{" "}
                <strong className="font-semibold text-foreground">
                  Continental International Education
                </strong>{" "}
                que busca facilitar el acceso de estudiantes a experiencias académicas
                internacionales mediante un esquema institucional de cofinanciamiento.
              </p>
              <p>
                La iniciativa busca que la experiencia internacional sea una posibilidad para más
                estudiantes, reduciendo una de las principales barreras de acceso:{" "}
                <strong className="font-semibold text-foreground">el factor económico</strong>.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={pillar.title} delay={i * 90}>
                <article className="card-soft h-full rounded-2xl border border-border p-7">
                  <span className="gradient-primary mb-5 flex size-12 items-center justify-center rounded-xl">
                    <Icon className="size-6 text-primary-foreground" />
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
