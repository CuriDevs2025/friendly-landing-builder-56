import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function SectionTag({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-sm font-bold tracking-[0.2em] text-violet">{number}</span>
      <span className="h-px w-8 bg-border" />
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
