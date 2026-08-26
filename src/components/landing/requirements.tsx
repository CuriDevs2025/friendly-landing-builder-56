import { useState } from "react";
import { AlertTriangle, Dot } from "lucide-react";
import { REQUIREMENTS } from "@/lib/landing-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionTag } from "./reveal";

export function Requirements() {
  const [active, setActive] = useState(REQUIREMENTS[0].id);
  const current = REQUIREMENTS.find((r) => r.id === active) ?? REQUIREMENTS[0];

  return (
    <section id="requisitos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="04" label="Requisitos" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            ¿Este programa <span className="text-celeste">es para ti</span>?
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Los requisitos varían según tu unidad académica. Selecciona la tuya:
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2">
            {REQUIREMENTS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                  active === tab.id
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border text-foreground/75 hover:bg-secondary",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="card-soft mt-6 rounded-2xl border border-border p-8">
            <ul className="grid gap-4 md:grid-cols-2">
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Dot className="mt-0.5 size-5 shrink-0 text-violet" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-violet/40 bg-violet/10 p-6">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-celeste" />
            <p className="text-sm leading-relaxed text-foreground/85">
              <strong className="font-bold">
                Cumplir los requisitos no garantiza la asignación del Programa.
              </strong>{" "}
              La selección considera integralmente el perfil académico, la situación económica, las
              características del programa y la disponibilidad presupuestal.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
