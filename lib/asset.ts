/**
 * Prefix a public asset path with the deploy base path.
 *
 * Plain <img src> does not get Next's basePath applied automatically (only
 * next/image and <Link> do), so on GitHub Pages — served under
 * /FrontenacRoofing — image URLs must be prefixed manually. NEXT_PUBLIC_BASE_PATH
 * is set at build time in next.config.mjs (empty for local dev, "/FrontenacRoofing"
 * for the Pages build).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${clean}`;
}
