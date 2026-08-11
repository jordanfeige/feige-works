"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { FOUNDER } from "@/lib/site";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("nav-shell", scrolled && "is-scrolled")}>
      <div className="container flex h-16 items-center justify-between md:h-[4.25rem]">
        <a
          href="#top"
          aria-label="Feige Works home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${FOUNDER.email}`} className="link-arrow text-sm">
            Get in touch →
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-200",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-[1.5px] w-full bg-ink transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-[1.5px] w-full bg-ink transition-transform duration-200",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-light md:hidden",
          open ? "block" : "hidden",
        )}
        hidden={!open}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${FOUNDER.email}`}
            className="rounded-xl px-3 py-3 text-base text-ink"
            onClick={() => setOpen(false)}
          >
            Get in touch →
          </a>
        </nav>
      </div>
    </header>
  );
}
