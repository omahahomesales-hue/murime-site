import fs from "node:fs";
import path from "node:path";
import { images, type ImageKey } from "@/content/images";

/** Local copy if it exists, otherwise the Wix original (resized). */
export function imgSrc(key: ImageKey, width = 2000): string {
  const img = images[key];
  if (fs.existsSync(path.join(process.cwd(), "public", img.file))) return img.file;
  return `https://static.wixstatic.com/media/${img.wix}/v1/fit/w_${width},h_${width},q_90/${img.wix}`;
}

export function imgAlt(key: ImageKey): string {
  return images[key].alt;
}
