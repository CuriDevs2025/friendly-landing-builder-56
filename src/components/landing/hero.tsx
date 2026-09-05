import { Plane, Globe } from "lucide-react";
import heroBg from "@/assets/hero-horizontes.jpg";
import badgeArc from "@/assets/2_1.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 size-full overflow-hidden pointer-events-none bg-[#dfe2e7]">
        {/* Person & Map accurately scaled and anchored */}
        <div className="absolute left-[72%] sm:left-[68%] lg:left-[66%] top-[40%] sm:top-[39%] lg:top-[38%] -translate-x-[47.8%] -translate-y-[48%]">
          <img
            src={heroBg}
            alt="Programa Horizontes Globales CIE"
            className="max-w-none w-auto h-[175vh] sm:h-[195vh] lg:h-[220vh] select-none"
          />
        </div>

        {/* Soft wash on left to ensure title readability on all screens */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-[48%] bg-gradient-to-r from-[#dfe2e7] via-[#dfe2e7]/85 to-transparent" />

        {/* Bottom dark banner gradient matching Image 1 */}
        <div className="absolute inset-x-0 bottom-0 h-80 sm:h-64 lg:h-56 bg-gradient-to-t from-[#12131d] via-[#151624]/95 via-45% to-transparent" />
      </div>

      {/* Main Title Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 sm:pt-40 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="select-none tracking-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black uppercase tracking-tight text-[#0f1015]">
              PROGRAMA
            </span>
            <span className="block text-[clamp(3.2rem,8.5vw,7.5rem)] font-black uppercase tracking-[-0.04em] text-[#6b11d4] leading-[0.88] my-1">
              HORIZONTES
            </span>
            <span className="block text-[clamp(3.2rem,8.5vw,7.5rem)] font-black uppercase tracking-[-0.04em] leading-[0.88]">
              <span className="text-[#6b11d4]">GLOBALES</span>{" "}
              <span className="text-[#0f1015]">CIE</span>
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom Features Bar Matching Image 1 */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#141522]/80 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:px-12 lg:py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-center sm:gap-8 lg:gap-14">
            {/* 1. Badge + Estamos listos para llevar tu talento al mundo */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Circular Badge with 2_1.png and Globe */}
              <div className="relative flex size-20 sm:size-24 lg:size-[7.5rem] shrink-0 items-center justify-center">
                {/* Globe Circle in center */}
                <div className="relative flex size-12 sm:size-14 lg:size-[4.5rem] items-center justify-center rounded-full bg-[#1b1c26] border border-white/20 shadow-inner overflow-hidden">
                  <svg viewBox="0 0 100 100" className="size-full p-1 opacity-90 fill-zinc-300">
                    <circle cx="50" cy="50" r="46" fill="#1b1c26" />
                    {/* Simplified Americas silhouette */}
                    <path
                      d="M48 18c-3 0-6 3-7 6-2 4-5 6-4 10 1 3 3 5 5 7 1 2 0 4-1 6-2 2-3 5-2 8 1 3 4 5 5 8 1 2 1 5 3 7 2 3 4 7 4 11 0 4-2 7-3 10-1 2 0 4 2 5 2 1 4-1 5-2 2-3 2-6 2-9 0-4-2-8-3-12-1-3-1-6 1-8 2-3 4-6 5-9 1-4 0-8-2-11-2-3-4-6-5-9-1-3-2-6-3-9-1-3-2-6-4-8z"
                      fill="#9ca3af"
                    />
                    <path
                      d="M32 25c2 1 4 0 6-1 2-2 4-3 6-3s4 2 5 4c2 3 4 6 5 9 1 2 3 3 5 3 2 0 4-2 5-4 1-2 2-4 3-6s1-4 1-6c-3-2-7-3-11-3-7 0-14 3-20 7z"
                      fill="#9ca3af"
                    />
                    {/* Globe coordinate lines */}
                    <ellipse cx="50" cy="50" rx="36" ry="46" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Arched text: 2_1.png (Top: Purple) */}
                <img
                  src={badgeArc}
                  alt="Horizontes Globales"
                  className="pointer-events-none absolute inset-0 size-full object-contain select-none"
                />

                {/* Arched text: 2_1.png (Bottom: White, rotated 180°) */}
                <img
                  src={badgeArc}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 size-full object-contain select-none rotate-180 brightness-0 invert"
                />
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base lg:text-[17px] font-normal text-white/90 leading-tight">
                Estamos listos <br />
                para <strong className="font-bold text-white">llevar tu</strong> <br />
                <strong className="font-bold text-white">talento al mundo</strong>
              </p>
            </div>

            {/* 2. Plane Icon + Vive una experiencia académica internacional */}
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex size-12 lg:size-[4.5rem] shrink-0 items-center justify-center text-[#a855f7]">
                <Plane className="size-8 lg:size-[2.7rem] stroke-[2]" />
              </div>
              <p className="text-sm sm:text-base lg:text-[17px] font-normal text-white/85 leading-[1.35]">
                Vive una experiencia <br />
                académica <br />
                internacional
              </p>
            </div>

            {/* 3. Globe Icon + Misiones, pasantías, intercambios y más en 4 continentes */}
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex size-12 lg:size-[4.5rem] shrink-0 items-center justify-center rounded-full border-[2.5px] lg:border-[3px] border-[#a855f7] p-1 text-[#a855f7]">
                <Globe className="size-6 lg:size-[2.5rem] stroke-[2]" />
              </div>
              <p className="text-sm sm:text-base lg:text-[17px] font-normal text-white/85 leading-[1.35]">
                Misiones, pasantías, <br />
                intercambios y más <br />
                en 4 continentes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
