import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function AISection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <Reveal>
          <div className="rounded-[32px] bg-ink px-6 py-12 text-light md:px-12 md:py-14 lg:px-14">
            <SectionLabel>On AI</SectionLabel>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2rem,4.5vw,3.2rem)] text-light">
              <span className="text-accent">AI</span> is the ingredient.
              <br />
              The product is the point.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-7 text-white/65 md:text-[1.1rem]">
              We&apos;re interested in AI when it makes something meaningfully
              better — not when it just makes something sound smarter.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              {["Messy information", "AI", "Useful experience"].map(
                (item, index) => (
                  <div key={item} className="contents">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm tracking-[-0.01em] text-white/80">
                      {item === "AI" ? (
                        <span className="font-semibold text-accent">{item}</span>
                      ) : (
                        item
                      )}
                    </div>
                    {index < 2 && (
                      <div
                        className="flex justify-center text-white/30"
                        aria-hidden
                      >
                        <span className="sm:hidden">↓</span>
                        <span className="hidden sm:inline">→</span>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
