import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FOUNDER } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink">
      <div className="container py-20 md:py-28">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[clamp(2.2rem,5.5vw,3.8rem)] text-light">
            Have an interesting{" "}
            <span className="text-accent">problem?</span>
          </h2>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-7 text-white/60">
            We&apos;re always interested in interesting problems, ideas, and
            people.
          </p>
          <div className="mt-8">
            <Button href={`mailto:${FOUNDER.email}`} variant="light">
              Say hello →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
