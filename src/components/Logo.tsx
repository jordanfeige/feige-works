import { cn } from "@/lib/cn";

type LogoMarkProps = {
  className?: string;
  title?: string;
};

/** Geometric F mark from the Feige Works brand system. */
export function LogoMark({ className, title = "Feige Works" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <rect x="4" y="4" width="10" height="30" fill="currentColor" />
      <rect x="4" y="4" width="36" height="10" fill="currentColor" />
      <rect x="4" y="22" width="24" height="10" fill="currentColor" />
      <rect x="4" y="40" width="10" height="10" fill="currentColor" />
      <rect x="20" y="40" width="10" height="10" fill="#6366F1" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
};

export function Logo({ className, showTagline = false, inverted = false }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        inverted ? "text-light" : "text-ink",
        className,
      )}
    >
      <LogoMark className="h-8 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.92rem] font-semibold tracking-[0.08em]">
          FEIGE WORKS
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1.5 text-[0.58rem] font-medium tracking-[0.16em]",
              inverted ? "text-accent" : "text-accent",
            )}
          >
            INDEPENDENT PRODUCT STUDIO
          </span>
        ) : null}
      </span>
    </span>
  );
}
