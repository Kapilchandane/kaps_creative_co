import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");
const exts = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (exts.has(path.extname(e.name).toLowerCase())) {
      const out = full.replace(/\.(png|jpg|jpeg)$/i, ".webp");
      await sharp(full).webp({ quality: 80 }).toFile(out);
      const before = fs.statSync(full).size;
      const after = fs.statSync(out).size;
      console.log(`${path.relative("public", full)} -> ${path.relative("public", out)}  ${(before/1024).toFixed(1)}KB -> ${(after/1024).toFixed(1)}KB`);
      fs.unlinkSync(full);
    }
  }
}

await walk(root);
console.log("done");
