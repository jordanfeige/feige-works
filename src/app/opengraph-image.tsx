import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0F172A",
          color: "#F8FAFC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 42,
              height: 50,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 10,
                height: 30,
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 36,
                height: 10,
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 18,
                width: 24,
                height: 10,
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 36,
                width: 10,
                height: 10,
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 16,
                top: 36,
                width: 10,
                height: 10,
                background: "#6366F1",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              FEIGE WORKS
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#6366F1",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Independent product studio
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 600,
            maxWidth: 920,
          }}
        >
          We build products worth&nbsp;
          <span style={{ color: "#6366F1" }}>using.</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            color: "#94A3B8",
            fontSize: 22,
          }}
        >
          <span>Driveway</span>
          <span>·</span>
          <span>Playvia</span>
          <span>·</span>
          <span>WandrAI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
