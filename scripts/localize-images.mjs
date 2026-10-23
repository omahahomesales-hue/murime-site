// Downloads every image from Wix into public/images so the site no longer
// depends on Wix. Run with: npm run localize-images
import fs from "node:fs/promises";
import path from "node:path";

const src = await fs.readFile(new URL("../content/images.ts", import.meta.url), "utf8");
const entries = [...src.matchAll(/file:\s*"([^"]+)",\s*\n\s*wix:\s*"([^"]+)"/g)];
let failed = 0;

for (const [, file, wix] of entries) {
  const dest = path.join(process.cwd(), "public", file);
  try {
    await fs.access(dest);
    console.log("exists ", file);
    continue;
  } catch {}
  const url = `https://static.wixstatic.com/media/${wix}/v1/fit/w_2400,h_2400,q_90/${wix}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAILED ", file, res.status);
    failed++;
    continue;
  }
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log("saved  ", file);
}

if (failed) process.exit(1);
