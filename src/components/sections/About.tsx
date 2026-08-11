import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { FOUNDER } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="display mt-4 max-w-[11ch] text-[clamp(2rem,4.5vw,3.1rem)] text-ink">
            Built by one curious human.
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="max-w-xl space-y-5 text-[1.05rem] leading-7 text-ink-soft">
            <p>
              Feige Works is an independent product studio founded by{" "}
              {FOUNDER.name}.
            </p>
            <p>Jordan is a product leader who likes taking ideas from:</p>
            <p className="display text-[1.35rem] leading-snug text-ink">
              &ldquo;Wouldn&apos;t it be cool if...&rdquo;
            </p>
            <p>to:</p>
            <p className="display text-[1.35rem] leading-snug text-ink">
              &ldquo;People are actually{" "}
              <span className="text-accent">using</span> this.&rdquo;
            </p>
            <p>
              He builds products across AI, real estate, sports, travel, and
              whatever interesting problem comes next.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-ink">{FOUNDER.name}</p>
              <p className="mt-1 text-sm text-muted">{FOUNDER.role}</p>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-4 text-sm"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
