import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Concept Study for Interior Design | Veltris";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F1E9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          color: "#332E28",
          border: "16px solid #E9E4DA",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#70785B",
            }}
          >
            VELTRIS CONCEPT STUDY 01
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6B3F3D",
              background: "#E9E4DA",
              padding: "6px 16px",
              borderRadius: "999px",
            }}
          >
            NOT COMMISSIONED
          </div>
        </div>

        {/* Center title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#332E28",
            }}
          >
            THREE WORLDS.
            <br />
            ONE WAY OF LIVING.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#332E28",
              opacity: 0.8,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            A brand-aligned 3D narrative website concept and spatial rebrand direction for Claudia Dorsch Interior Design.
          </div>
        </div>

        {/* Bottom footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(51, 46, 40, 0.2)",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#332E28",
              fontWeight: 600,
            }}
          >
            CLAUDIA DORSCH · SPECULATIVE EXPLORATION
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#70785B",
              fontFamily: "monospace",
            }}
          >
            veltris.uk/work/claudia-dorsch-concept
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
