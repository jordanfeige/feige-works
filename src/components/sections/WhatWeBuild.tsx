import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PRODUCTS } from "@/lib/site";

export function WhatWeBuild() {
  return (
    <section id="products" className="scroll-mt-24 pb-16 pt-6 md:pb-20 md:pt-8">
      <div className="container">
        <Reveal>
          <SectionLabel>What we build</SectionLabel>
          <h2 className="display mt-4 max-w-[14ch] text-[clamp(2rem,4.5vw,3rem)] text-ink">
            A few things we&apos;re working on.
          </h2>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-7 text-ink-soft">
            We like turning interesting problems into products people actually
            want to use.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delayMs={index * 70} className="h-full">
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
