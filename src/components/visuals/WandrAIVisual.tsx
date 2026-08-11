export function WandrAIVisual() {
  return (
    <div
      className="relative h-full min-h-[168px] overflow-hidden rounded-[18px] bg-[#f1f5f9] p-4"
      aria-hidden
    >
      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft/65">
        <span>Weekend in Lisbon</span>
        <span className="rounded-full bg-ink/5 px-2 py-0.5">3 days</span>
      </div>

      <div className="mt-9 space-y-2">
        {[
          { day: "Fri", title: "Arrive · Alfama walk", offset: "0px" },
          { day: "Sat", title: "Market lunch · Viewpoint", offset: "12px" },
          { day: "Sun", title: "Slow morning · Flight", offset: "6px" },
        ].map((item) => (
          <div
            key={item.day}
            className="flex items-center gap-3 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            style={{ marginLeft: item.offset }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-[11px] font-semibold text-accent">
              {item.day}
            </div>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-ink">
                {item.title}
              </p>
              <div className="mt-1 h-1.5 w-24 rounded-full bg-ink/8" />
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-6 bottom-4 h-20 w-20 rounded-full border border-dashed border-accent/30" />
      <div className="pointer-events-none absolute -right-2 bottom-10 h-10 w-10 rounded-full bg-accent/15" />
    </div>
  );
}
