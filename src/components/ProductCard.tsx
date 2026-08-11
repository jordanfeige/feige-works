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
  compact?: boolean;
};

export function ProductCard({ product, className, compact }: ProductCardProps) {
  const Visual = visuals[product.id];
  const interactive = Boolean(product.href);

  const content = (
    <>
      <div className={cn(compact ? "mb-4" : "mb-5")}>
        <Visual />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
            {product.category}
          </p>
          <h3 className="display mt-2 text-[1.55rem] text-ink md:text-[1.75rem]">
            {product.name}
          </h3>
        </div>
        {!compact && (
          <span className="rounded-full border border-line px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
            {product.statusLabel}
          </span>
        )}
      </div>
      <p className="mt-3 text-[1.02rem] font-semibold tracking-[-0.015em] text-ink">
        {product.description}
      </p>
      {!compact && (
        <p className="mt-2 text-sm leading-6 text-muted">{product.detail}</p>
      )}
      <div className="mt-5">
        {interactive ? (
          <span className="link-arrow text-sm">{product.cta}</span>
        ) : (
          <span className="link-arrow text-sm" aria-disabled="true">
            Coming soon
          </span>
        )}
      </div>
    </>
  );

  const sharedClass = cn(
    "surface-card group block p-4 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-5",
    interactive &&
      "hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]",
    className,
  );

  if (product.href) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClass}
        aria-label={`${product.name}: ${product.cta}`}
      >
        {content}
      </a>
    );
  }

  return <div className={sharedClass}>{content}</div>;
}
