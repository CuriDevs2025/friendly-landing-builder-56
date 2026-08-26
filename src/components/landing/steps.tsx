import { APPLY_URL, STEPS } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

export function Steps() {
  return (
    <section id="postular" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="05" label="¿Cómo postular?" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            Nueve pasos hacia tu <span className="text-celeste">experiencia internacional</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-6 border-l border-border pl-6 sm:pl-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <li className="relative">
                <span className="gradient-primary absolute -left-[2.1rem] flex size-8 items-center justify-center rounded-full text-xs font-bold text-primary-foreground sm:-left-[3.35rem] sm:size-10 sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="card-soft rounded-2xl border border-border p-6">
                  <h3 className="text-base font-bold text-card-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
                  {step.cta && (
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                    >
                      Ir a la ficha de postulación
                    </a>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
