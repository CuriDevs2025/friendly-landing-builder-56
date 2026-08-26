import cardMisiones from "@/assets/card-misiones.jpg";
import cardCorta from "@/assets/card-corta-duracion.jpg";
import cardPasantias from "@/assets/card-pasantias.jpg";
import { Reveal, SectionTag } from "./reveal";

const PROGRAMS = [
  {
    image: cardMisiones,
    title: "Misiones académicas internacionales",
    subtitle: "Aprende en universidades aliadas alrededor del mundo",
    text: "Clases académicas, visitas empresariales y actividades culturales en un mismo viaje.",
  },
  {
    image: cardCorta,
    title: "Programas de corta duración",
    subtitle: "Experiencias intensivas de pocas semanas",
    text: "Formación internacional compatible con tu avance académico regular.",
  },
  {
    image: cardPasantias,
    title: "Pasantías de investigación o prácticas",
    subtitle: "Rotaciones clínicas, investigación y prácticas",
    text: "Suma experiencia profesional real en un entorno internacional.",
  },
];

export function Programs() {
  return (
    <section id="programas" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="02" label="Programas elegibles" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            Tu experiencia puede llevarte <span className="text-celeste">más lejos</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Dependiendo de la convocatoria, Horizontes Globales puede aplicarse a distintas
            modalidades de movilidad internacional.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 90}>
              <article className="card-soft group h-full overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-card-foreground">{program.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-celeste">{program.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {program.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
