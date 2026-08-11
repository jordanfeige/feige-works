import { Logo } from "@/components/Logo";
import { FOUNDER, PRODUCTS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-light">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8 md:py-16">
        <div>
          <Logo inverted showTagline />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
            Independent product studio.
          </p>
        </div>

        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
            Products
          </p>
          <ul className="mt-4 space-y-2">
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
            Connect
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${FOUNDER.email}`}
                className="text-sm text-white/70 transition-colors hover:text-accent"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Feige Works</p>
          <p>We build products worth using.</p>
        </div>
      </div>
    </footer>
  );
}
