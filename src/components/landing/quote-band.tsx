import { Reveal } from "./reveal";

const WORDS = ["Conoce.", "Aprende.", "Conecta.", "Representa.", "Crece."];

export function QuoteBand() {
  return (
    <section className="gradient-primary py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-10">
        <Reveal>
          <h2 className="display-title text-[clamp(1.8rem,4.5vw,3rem)] text-primary-foreground">
            El mundo también puede ser parte de tu experiencia universitaria.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {WORDS.map((word) => (
              <span
                key={word}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-celeste"
              >
                {word}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
