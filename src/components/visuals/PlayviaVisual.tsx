export function PlayviaVisual() {
  return (
    <div
      className="relative h-full min-h-[168px] overflow-hidden rounded-[18px] bg-ink p-4"
      aria-hidden
    >
      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
        <span>Practice · Clip 14</span>
        <span className="text-accent">+12% pace</span>
      </div>

      <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="relative h-16 overflow-hidden rounded-xl bg-[linear-gradient(120deg,rgba(99,102,241,0.35),rgba(255,255,255,0.08))]">
          <div className="absolute inset-y-3 left-[18%] w-[2px] bg-white/50" />
          <div className="absolute bottom-3 left-[18%] h-8 w-8 -translate-x-1/2 rounded-full border border-white/40 bg-white/10" />
          <div className="absolute bottom-4 left-[52%] h-5 w-5 rounded-full bg-accent/90" />
          <div className="absolute bottom-5 right-[18%] h-4 w-4 rounded-full bg-white/30" />
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Form", "Spacing", "Tempo"].map((metric, index) => (
            <div
              key={metric}
              className="rounded-lg bg-white/5 px-2 py-2 text-center"
            >
              <div className="mx-auto mb-2 flex h-8 items-end justify-center gap-0.5">
                {[40, 70, 55, 85, 60].map((height, bar) => (
                  <span
                    key={bar}
                    className="w-1 rounded-full bg-accent/80"
                    style={{
                      height: `${height - index * 8}%`,
                      opacity: 0.45 + bar * 0.1,
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                {metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
