// Prefix a public asset path with Vite's base URL so it resolves
// correctly when deployed to a sub-path (e.g. GitHub Pages project site).
export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL || "/";
  return base + String(path).replace(/^\/+/, "");
}

export default asset;
