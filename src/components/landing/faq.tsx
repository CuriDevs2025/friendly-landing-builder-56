import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/landing-data";
import { Reveal, SectionTag } from "./reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <Reveal>
          <SectionTag number="07" label="Preguntas frecuentes" />
          <h2 className="display-title text-[clamp(2rem,5vw,3.4rem)]">
            Resolvemos tus <span className="text-celeste">dudas</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="card-soft rounded-2xl border border-border px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-card-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
