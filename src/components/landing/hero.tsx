import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-horizontes.jpg";
import { APPLY_URL } from "@/lib/landing-data";

const COUNTRIES = [
  { code: "US", name: "Estados Unidos" },
  { code: "ES", name: "España" },
  { code: "BR", name: "Brasil" },
  { code: "AR", name: "Argentina" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "MX", name: "México" },
  { code: "PY", name: "Paraguay" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Estudiante universitaria observando aviones en un aeropuerto internacional"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover object-right"
      />
      <div className="hero-fade absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 lg:px-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
          <span className="size-2 rounded-full bg-celeste" />
          Convocatoria 2026
        </span>

        <h1 className="display-title mt-6 max-w-3xl text-[clamp(2.6rem,8vw,5.6rem)]">
          <span className="block font-medium">Programa</span>
          <span className="block font-extrabold">Horizontes</span>
          <span className="block font-extrabold text-celeste">Globales</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          Tu próxima experiencia internacional está más cerca de lo que imaginas. Estudia, conoce
          nuevas culturas y <strong className="font-semibold text-foreground">representa a la Universidad</strong>{" "}
          en otro país con el cofinanciamiento de Continental International Education.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {COUNTRIES.map((country) => (
            <li
              key={country.code}
              title={country.name}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary/70 text-[0.7rem] font-bold tracking-[0.06em] text-celeste backdrop-blur"
            >
              {country.code}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-primary rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Postula ahora
          </a>
          <a
            href="#conoce"
            className="rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Conoce el programa
          </a>
        </div>
      </div>

      <a
        href="#conoce"
        aria-label="Desplázate hacia abajo"
        className="absolute inset-x-0 bottom-6 mx-auto w-fit text-foreground/60 transition-colors hover:text-celeste"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </a>
    </section>
  );
}
