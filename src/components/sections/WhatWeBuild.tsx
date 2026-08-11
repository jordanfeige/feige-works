import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PRODUCTS } from "@/lib/site";

export function WhatWeBuild() {
  return (
    <section id="products" className="section-pad scroll-mt-24">
      <div className="container">
        <Reveal>
          <SectionLabel>What we build</SectionLabel>
          <h2 className="display mt-4 max-w-[14ch] text-[clamp(2rem,4.5vw,3.1rem)] text-ink">
            A few things we&apos;re working on.
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-7 text-ink-soft">
            We like turning interesting problems into products people actually
            want to use.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delayMs={index * 90}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
