import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PRODUCTS } from "@/lib/site";

export function Currently() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container">
        <Reveal>
          <div className="rounded-[28px] border border-line bg-paper px-6 py-8 md:px-10 md:py-10">
            <SectionLabel>Currently building</SectionLabel>
            <ul className="mt-8 divide-y divide-line">
              {PRODUCTS.map((product, index) => (
                <li
                  key={product.id}
                  className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-accent">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-[1.05rem] font-semibold tracking-[-0.015em] text-ink">
                        {product.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {product.id === "driveway" &&
                          "Neighborhood intelligence for real estate."}
                        {product.id === "playvia" &&
                          "AI-powered practice intelligence for sports."}
                        {product.id === "wandrai" &&
                          "AI-powered travel experiences."}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-line px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted sm:shrink-0">
                    {product.statusLabel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
