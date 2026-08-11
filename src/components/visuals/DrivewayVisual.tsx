export function DrivewayVisual() {
  return (
    <div
      className="relative h-full min-h-[168px] overflow-hidden rounded-[18px] bg-[#eef2ff] p-4"
      aria-hidden
    >
      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
        <span>124 Oak Street</span>
        <span className="rounded-full bg-white/80 px-2 py-0.5 text-accent">
          Live
        </span>
      </div>

      <div className="mt-8 grid grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <div className="mb-3 h-16 rounded-xl bg-[linear-gradient(135deg,#c7d2fe,#e2e8f0)]" />
          <div className="space-y-1.5">
            <div className="h-2 w-[80%] rounded-full bg-ink/10" />
            <div className="h-2 w-[60%] rounded-full bg-ink/10" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { label: "Walkable evenings", tone: "accent" },
            { label: "Quiet weekends", tone: "ink" },
            { label: "Neighbor tip", tone: "muted" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/80 bg-white/85 px-2.5 py-2 text-[11px] text-ink-soft shadow-sm"
              style={{ transform: `translateX(${index * 4}px)` }}
            >
              <span
                className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    item.tone === "accent"
                      ? "var(--accent)"
                      : item.tone === "muted"
                        ? "#94a3b8"
                        : "var(--ink)",
                }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
