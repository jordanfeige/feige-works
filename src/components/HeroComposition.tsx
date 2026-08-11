import { PRODUCTS } from "@/lib/site";
import { DrivewayVisual } from "@/components/visuals/DrivewayVisual";
import { PlayviaVisual } from "@/components/visuals/PlayviaVisual";
import { WandrAIVisual } from "@/components/visuals/WandrAIVisual";

const visuals = {
  driveway: DrivewayVisual,
  playvia: PlayviaVisual,
  wandrai: WandrAIVisual,
} as const;

export function HeroComposition() {
  const cards = [
    {
      product: PRODUCTS[0],
      className:
        "left-[2%] top-[2%] z-[1] w-[78%] rotate-[-4deg] hover:-translate-y-1.5 hover:rotate-[-2deg]",
    },
    {
      product: PRODUCTS[1],
      className:
        "right-[1%] top-[24%] z-[2] w-[74%] rotate-[5deg] hover:-translate-y-1.5 hover:rotate-[3deg]",
    },
    {
      product: PRODUCTS[2],
      className:
        "bottom-[1%] left-[12%] z-[3] w-[76%] rotate-[-1.5deg] hover:-translate-y-1.5 hover:rotate-0",
    },
  ] as const;

  return (
    <div
      className="relative mx-auto h-[380px] w-full max-w-[460px] sm:h-[420px] lg:ml-auto lg:mr-0 lg:h-[460px] lg:w-[460px] lg:max-w-none"
      aria-label="Featured products: Driveway, Playvia, and WandrAI"
    >
      {cards.map(({ product, className }) => {
        const Visual = visuals[product.id];
        const shell = (
          <div className="surface-card overflow-hidden p-3 shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
            <div className="mb-3">
              <Visual />
            </div>
            <div className="flex items-end justify-between gap-3 px-0.5 pb-0.5">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  {product.category.split("·")[0]?.trim()}
                </p>
                <p className="display mt-1 text-[1.25rem] text-ink">
                  {product.name}
                </p>
              </div>
              <span className="pb-0.5 text-sm text-accent">→</span>
            </div>
          </div>
        );

        if (product.href) {
          return (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${product.name}`}
              className={`absolute block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
            >
              {shell}
            </a>
          );
        }

        return (
          <div
            key={product.id}
            className={`absolute block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
          >
            {shell}
          </div>
        );
      })}
    </div>
  );
}
