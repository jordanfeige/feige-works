import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 42,
            width: 22,
            height: 70,
            background: "#F8FAFC",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 42,
            width: 84,
            height: 22,
            background: "#F8FAFC",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 80,
            width: 56,
            height: 22,
            background: "#F8FAFC",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 118,
            width: 22,
            height: 22,
            background: "#F8FAFC",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 86,
            top: 118,
            width: 22,
            height: 22,
            background: "#6366F1",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
