"use client";

import { useState } from "react";
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

/**
 * Fixed home slots — cards never teleport between positions on hover.
 * That avoids the classic stack thrash (hover → move → leave → flicker).
 */
const HOME: Record<
  Product["id"],
  { className: string; baseZ: number }
> = {
  driveway: {
    className: "left-[0%] top-[0%] w-[70%] -rotate-[7deg]",
    baseZ: 1,
  },
  playvia: {
    className: "left-[14%] top-[14%] w-[70%] rotate-[4deg]",
    baseZ: 2,
  },
  wandrai: {
    className: "left-[28%] top-[28%] w-[70%] -rotate-[1.5deg]",
    baseZ: 3,
  },
};

export function HeroComposition() {
  const [focusedId, setFocusedId] = useState<Product["id"]>("wandrai");

  return (
    <div
      className="mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-0 lg:max-w-none"
      aria-label="Featured products: Driveway, Playvia, and WandrAI"
    >
      {/* Desktop / tablet layered stack */}
      <div
        className="relative hidden h-[420px] w-full sm:block lg:h-[460px]"
        onMouseLeave={() => setFocusedId("wandrai")}
      >
        {PRODUCTS.map((product) => {
          const Visual = visuals[product.id];
          const home = HOME[product.id];
          const isFront = product.id === focusedId;

          return (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${product.name}`}
              aria-current={isFront ? "true" : undefined}
              onPointerEnter={() => setFocusedId(product.id)}
              onFocus={() => setFocusedId(product.id)}
              className={cn(
                "absolute block w-[70%] origin-center will-change-transform",
                "transition-[transform,box-shadow,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                home.className,
                isFront
                  ? "-translate-y-1.5 scale-[1.02] opacity-100"
                  : "translate-y-0 scale-[0.97] opacity-90",
              )}
              style={{ zIndex: isFront ? 40 : home.baseZ }}
            >
              <div
                className={cn(
                  "surface-card overflow-hidden p-3 transition-shadow duration-200",
                  isFront
                    ? "shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
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

      {/* Mobile: one focused card + tap targets */}
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
