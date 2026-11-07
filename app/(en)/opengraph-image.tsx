import { ogImage, ogAlt, ogSize } from "@/components/OgImage";

export const alt = ogAlt("en");
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return ogImage("en");
}
