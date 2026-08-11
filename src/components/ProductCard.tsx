import { cn } from "@/lib/cn";
import type { Product } from "@/lib/site";
import { DrivewayVisual } from "@/components/visuals/DrivewayVisual";
import { PlayviaVisual } from "@/components/visuals/PlayviaVisual";
import { WandrAIVisual } from "@/components/visuals/WandrAIVisual";

const visuals = {
  driveway: DrivewayVisual,
  playvia: PlayviaVisual,
  wandrai: WandrAIVisual,
} as const;

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const Visual = visuals[product.id];

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.name}: ${product.cta}`}
      className={cn(
        "surface-card group flex h-full flex-col p-4 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-5",
        "hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <div className="mb-5 h-[176px] shrink-0 overflow-hidden">
        <Visual />
      </div>

      <div className="grid min-h-[2.75rem] grid-cols-[1fr_auto] items-start gap-3">
        <p className="text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted">
          {product.category}
        </p>
        <span className="product-status shrink-0 rounded-full border border-line px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted">
          {product.statusLabel}
        </span>
      </div>

      <h3 className="display mt-3 min-h-[2.1rem] text-[1.55rem] text-ink md:min-h-[2.3rem] md:text-[1.75rem]">
        {product.name}
      </h3>

      <p className="mt-3 min-h-[3.25rem] text-[1.02rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
        {product.description}
      </p>

      <p className="mt-2 min-h-[4.5rem] flex-1 text-sm leading-6 text-muted">
        {product.detail}
      </p>

      <div className="mt-6">
        <span className="link-arrow text-sm group-hover:gap-[0.55rem] group-hover:text-accent">
          {product.cta}
        </span>
      </div>
    </a>
  );
}
