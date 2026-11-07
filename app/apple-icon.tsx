import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/LogoMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon: the notebook mark on the site canvas colour.
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
          backgroundColor: "#F0F2F4",
        }}
      >
        <LogoMark size={132} />
      </div>
    ),
    { ...size },
  );
}
