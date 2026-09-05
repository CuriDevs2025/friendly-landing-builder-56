import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faClock,
  faArrowUpRightFromSquare,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Reveal, SectionTag } from "./reveal";

const CONTACT_EMAIL = "horizontesglobalescie@continental.edu.pe";
const CONTACT_PHONE_DISPLAY = "+51 964 592 984";
const CONTACT_WHATSAPP_LINK =
  "https://wa.me/51964592984?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20programa%20Horizontes%20Globales";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {
      // Fallback if clipboard API fails
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      {/* Glow ambiental de fondo */}
      <div
        className="gradient-primary pointer-events-none absolute left-1/2 top-1/2 -z-0 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-10">
        <Reveal>
          <div className="text-center md:text-left">
            <SectionTag number="08" label="Contacto" />
            <h2 className="display-title max-w-3xl text-[clamp(2rem,5vw,3.4rem)]">
              ¿Dónde puedo resolver <span className="text-celeste">mis dudas</span>?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Comunícate con nuestro equipo oficial para resolver cualquier consulta sobre los
              programas, requisitos de postulación y cobertura de financiamiento.
            </p>
          </div>
        </Reveal>

        {/* Card única estética de contacto */}
        <div className="mt-12">
          <Reveal delay={120}>
            <div className="card-soft relative overflow-hidden rounded-3xl border border-border/80 bg-card/85 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
              {/* Resplandor decorativo superior y bordes */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent" />
              <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-violet/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-60 rounded-full bg-celeste/10 blur-3xl" />

              {/* Encabezado de la card */}
              <div className="relative z-10 flex flex-col gap-6 border-b border-border/60 pb-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 text-xs font-semibold text-violet">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Canal Oficial de Atención
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-card-foreground sm:text-2xl">
                    Continental International Education
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Atención personalizada y orientación académica internacional para estudiantes.
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start rounded-2xl border border-border/70 bg-surface/80 px-4 py-3 text-xs sm:text-sm text-muted-foreground lg:self-auto">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet/20 text-violet">
                    <FontAwesomeIcon icon={faClock} className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Horario de atención</p>
                    <p className="text-xs text-muted-foreground">
                      Lun a Vie: 9:00 a. m. – 1:00 p. m. y 3:00 p. m. – 6:00 p. m.
                    </p>
                  </div>
                </div>
              </div>

              {/* Canales de contacto: WhatsApp y Correo */}
              <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-2">
                {/* Canal WhatsApp */}
                <div className="group relative flex flex-col justify-between rounded-2xl border border-emerald-500/25 bg-surface/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-surface/80 hover:shadow-lg hover:shadow-emerald-500/10 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform duration-300 group-hover:scale-105">
                        <FontAwesomeIcon icon={faWhatsapp} className="size-7 text-[#25D366]" />
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-emerald-400">
                        Atención Directa
                      </span>
                    </div>

                    <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      WhatsApp Oficial
                    </h4>
                    <p className="mt-1 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-300 sm:text-2xl">
                      {CONTACT_PHONE_DISPLAY}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Escríbenos por WhatsApp para resolver dudas rápidas sobre requisitos, fechas y
                      asesoría de postulación.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border/40 pt-4">
                    <a
                      href={CONTACT_WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-black sm:text-sm"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="size-4" />
                      <span>Chatear por WhatsApp</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(CONTACT_PHONE_DISPLAY, "phone")}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                      title="Copiar número"
                    >
                      <FontAwesomeIcon
                        icon={copiedPhone ? faCheck : faCopy}
                        className={copiedPhone ? "size-3.5 text-emerald-400" : "size-3.5"}
                      />
                      <span>{copiedPhone ? "Copiado" : "Copiar"}</span>
                    </button>
                  </div>
                </div>

                {/* Canal Correo Electrónico */}
                <div className="group relative flex flex-col justify-between rounded-2xl border border-celeste/25 bg-surface/50 p-6 transition-all duration-300 hover:border-celeste/50 hover:bg-surface/80 hover:shadow-lg hover:shadow-celeste/10 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-celeste/15 text-celeste ring-1 ring-celeste/30 transition-transform duration-300 group-hover:scale-105">
                        <FontAwesomeIcon icon={faEnvelope} className="size-6 text-celeste" />
                      </span>
                      <span className="rounded-full border border-celeste/30 bg-celeste/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-celeste">
                        Consultas Oficiales
                      </span>
                    </div>

                    <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Correo Electrónico
                    </h4>
                    <p className="mt-1 break-all text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-celeste sm:text-base">
                      {CONTACT_EMAIL}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Envíanos tus consultas formales, dudas específicas de expedientes o
                      documentación de postulación.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border/40 pt-4">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-celeste/40 bg-celeste/15 px-4 py-2.5 text-xs font-semibold text-celeste transition-all hover:bg-celeste hover:text-black sm:text-sm"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="size-3.5" />
                      <span>Enviar correo</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(CONTACT_EMAIL, "email")}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                      title="Copiar correo"
                    >
                      <FontAwesomeIcon
                        icon={copiedEmail ? faCheck : faCopy}
                        className={copiedEmail ? "size-3.5 text-celeste" : "size-3.5"}
                      />
                      <span>{copiedEmail ? "Copiado" : "Copiar"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
