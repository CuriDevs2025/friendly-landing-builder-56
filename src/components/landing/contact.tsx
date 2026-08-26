import { Clock, Mail } from "lucide-react";
import { CONTACTS } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Contact() {
  return (
    <section id="contacto" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="08" label="Contacto" />
          <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
            ¿Dónde puedo resolver <span className="text-celeste">mis dudas</span>?
          </h2>
          <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-violet" />
            Lunes a viernes de 9:00 a. m. a 1:00 p. m. y de 3:00 p. m. a 6:00 p. m.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map((person, i) => (
            <Reveal key={person.name} delay={i * 60}>
              <article className="card-soft h-full rounded-2xl border border-border p-6">
                <div className="flex items-center gap-4">
                  <span className="gradient-primary flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">
                    {initials(person.name)}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-card-foreground">{person.name}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{person.role}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-celeste transition-opacity hover:opacity-80"
                >
                  <Mail className="size-4" />
                  {person.email}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
