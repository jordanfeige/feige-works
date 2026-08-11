"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { PRODUCTS, type Product } from "@/lib/site";
import { DrivewayVisual } from "@/components/visuals/DrivewayVisual";
import { PlayviaVisual } from "@/components/visuals/PlayviaVisual";
import { WandrAIVisual } from "@/components/visuals/WandrAIVisual";

const visuals = {
  driveway: DrivewayVisual,
  playvia: PlayviaVisual,
  wandrai: WandrAIVisual,
} as const;

/** Depth slots: 0 = back, 1 = mid, 2 = front — fanned so all three stay discoverable */
const DEPTH_STYLES = [
  "left-[0%] top-[0%] w-[70%] -rotate-[7deg] scale-[0.93]",
  "left-[14%] top-[14%] w-[70%] rotate-[4deg] scale-[0.97]",
  "left-[28%] top-[28%] w-[70%] -rotate-[1.5deg] scale-100",
] as const;

function depthFor(productId: Product["id"], focusedId: Product["id"]) {
  if (productId === focusedId) return 2;

  const others = PRODUCTS.map((product) => product.id).filter(
    (id) => id !== focusedId,
  );
  return others.indexOf(productId) === 0 ? 0 : 1;
}

export function HeroComposition() {
  const [focusedId, setFocusedId] = useState<Product["id"]>("wandrai");

  const cards = useMemo(
    () =>
      PRODUCTS.map((product) => ({
        product,
        depth: depthFor(product.id, focusedId),
      })),
    [focusedId],
  );

  return (
    <div
      className="mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-0 lg:max-w-none"
      aria-label="Featured products: Driveway, Playvia, and WandrAI"
    >
      {/* Desktop / tablet layered stack */}
      <div className="relative hidden h-[420px] w-full sm:block lg:h-[460px]">
        {cards.map(({ product, depth }) => {
          const Visual = visuals[product.id];
          const isFront = depth === 2;

          return (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${product.name}`}
              onMouseEnter={() => setFocusedId(product.id)}
              onFocus={() => setFocusedId(product.id)}
              onPointerEnter={() => setFocusedId(product.id)}
              className={cn(
                "absolute block origin-center transition-[transform,box-shadow,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                DEPTH_STYLES[depth],
                isFront
                  ? "z-30 translate-y-0 opacity-100"
                  : depth === 1
                    ? "z-20 opacity-95"
                    : "z-10 opacity-90",
                isFront && "hover:-translate-y-1.5",
                // Keep peeking edges hittable above lower cards
                !isFront && "[&:hover]:z-40",
              )}
              style={{ zIndex: isFront ? 30 : 10 + depth }}
            >
              <div
                className={cn(
                  "surface-card overflow-hidden p-3 transition-[box-shadow,transform] duration-200",
                  isFront
                    ? "shadow-[0_22px_60px_rgba(15,23,42,0.14)]"
                    : "shadow-[0_12px_36px_rgba(15,23,42,0.08)]",
                )}
              >
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
                  <span
                    className={cn(
                      "pb-0.5 text-sm transition-colors duration-200",
                      isFront ? "text-accent" : "text-muted",
                    )}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile: one focused card + tap targets for the other two */}
      <div className="sm:hidden">
        {(() => {
          const focused =
            PRODUCTS.find((product) => product.id === focusedId) ?? PRODUCTS[0];
          const Visual = visuals[focused.id];

          return (
            <div className="space-y-4">
              <a
                href={focused.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${focused.name}`}
                className="surface-card block overflow-hidden p-3 shadow-[0_18px_50px_rgba(15,23,42,0.1)] transition-transform duration-200 active:-translate-y-0.5"
              >
                <div className="mb-3">
                  <Visual />
                </div>
                <div className="flex items-end justify-between gap-3 px-0.5 pb-0.5">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      {focused.category.split("·")[0]?.trim()}
                    </p>
                    <p className="display mt-1 text-[1.35rem] text-ink">
                      {focused.name}
                    </p>
                  </div>
                  <span className="pb-0.5 text-sm text-accent">→</span>
                </div>
              </a>

              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Choose a product"
              >
                {PRODUCTS.map((product) => {
                  const selected = product.id === focusedId;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setFocusedId(product.id)}
                      className={cn(
                        "flex-1 rounded-full border px-3 py-2 text-center text-[0.72rem] font-semibold tracking-[-0.01em] transition-colors duration-200",
                        selected
                          ? "border-ink bg-ink text-light"
                          : "border-line bg-paper text-ink-soft hover:border-ink/40",
                      )}
                    >
                      {product.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
