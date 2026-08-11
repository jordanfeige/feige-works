import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const steps = ["Understand", "Structure", "Improve"] as const;

export function CommonThread() {
  return (
    <section className="section-pad border-y border-line bg-white/60">
      <div className="container grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal>
          <SectionLabel>The common thread</SectionLabel>
          <h2 className="display mt-4 max-w-[12ch] text-[clamp(2rem,4.5vw,3.1rem)] text-ink">
            Different problems. Same obsession.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[1.05rem] leading-7 text-ink-soft">
            <p>We like messy, real-world problems.</p>
            <p>
              The kind that are difficult to solve with another dashboard,
              another spreadsheet, or another form.
            </p>
            <p>
              We use AI where it actually helps — to understand complexity,
              surface useful information, and create better experiences.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <ol className="space-y-0 rounded-[28px] border border-line bg-paper p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-9">
            {steps.map((step, index) => (
              <li key={step} className="relative">
                <div className="flex items-center gap-4 py-3">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    0{index + 1}
                  </span>
                  <span className="display text-[clamp(1.6rem,3.5vw,2.2rem)] text-ink">
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="ml-[1.85rem] flex h-8 items-center text-accent"
                    aria-hidden
                  >
                    <span className="text-lg leading-none">↓</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
