import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Programs } from "@/components/landing/programs";
import { Coverage } from "@/components/landing/coverage";
import { Requirements } from "@/components/landing/requirements";
import { Steps } from "@/components/landing/steps";
import { QuoteBand } from "@/components/landing/quote-band";
import { Dates } from "@/components/landing/dates";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingCta } from "@/components/landing/floating-cta";

const TITLE = "Horizontes Globales | Movilidad internacional Continental";
const DESCRIPTION =
  "Horizontes Globales cofinancia experiencias académicas internacionales para estudiantes de Continental. Conoce requisitos, cobertura, fechas y postula a la convocatoria 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <Coverage />
        <Requirements />
        <Steps />
        <QuoteBand />
        <Dates />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
