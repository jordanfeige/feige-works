import { Button } from "@/components/Button";
import { HeroComposition } from "@/components/HeroComposition";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 md:pb-12 md:pt-16">
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal eager>
          <SectionLabel>Independent product studio</SectionLabel>
          <h1 className="display mt-5 max-w-[12ch] text-[clamp(2.75rem,7vw,4.75rem)] text-ink">
            We build products worth{" "}
            <span className="text-accent">using.</span>
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-7 text-ink-soft md:text-[1.125rem] md:leading-8">
            An independent product studio exploring what happens when thoughtful
            product design meets AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#products">See what we&apos;re building →</Button>
            <Button href="#about" variant="ghost">
              About Feige Works
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Currently building in real estate, sports, and travel.
          </p>
        </Reveal>

        <Reveal eager className="w-full lg:justify-self-end">
          <HeroComposition />
        </Reveal>
      </div>
    </section>
  );
}
