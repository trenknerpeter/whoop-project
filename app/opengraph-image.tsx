import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social card. Anthracite masthead matching the site theme.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#23272E",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#4DA8F0",
              fontWeight: 600,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 68,
              lineHeight: 1.08,
              color: "#FFFFFF",
              maxWidth: 900,
              fontWeight: 600,
            }}
          >
            Upřímné recenze fitness náramků. Bez keců.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#10251C",
              backgroundColor: "#19D992",
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            Whoop · Fitbit · Helio
          </div>
          <div style={{ fontSize: 28, color: "#AAB1B9" }}>
            z vlastního zápěstí
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: "rgba(25,217,146,0.16)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
