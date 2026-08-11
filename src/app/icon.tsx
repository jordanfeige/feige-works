import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8FAFC",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 5,
            width: 5,
            height: 15,
            background: "#0F172A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 5,
            width: 18,
            height: 5,
            background: "#0F172A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 13,
            width: 12,
            height: 5,
            background: "#0F172A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 22,
            width: 5,
            height: 5,
            background: "#0F172A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 15,
            top: 22,
            width: 5,
            height: 5,
            background: "#6366F1",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
