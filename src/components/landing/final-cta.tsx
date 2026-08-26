import { ArrowRight } from "lucide-react";
import { APPLY_URL } from "@/lib/landing-data";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="postula" className="relative overflow-hidden bg-background py-28">
      <div className="gradient-primary absolute inset-x-0 top-1/2 -z-0 mx-auto h-64 max-w-4xl -translate-y-1/2 rounded-full opacity-25 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
        <Reveal>
          <h2 className="display-title text-[clamp(2rem,6vw,4rem)]">
            ¿Estás listo para <span className="text-celeste">ampliar tus horizontes</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Completa la ficha de postulación y da el primer paso hacia tu experiencia académica
            internacional.
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-primary mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Postula ahora
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
