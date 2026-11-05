/**
 * Prefix for files in /public. Empty locally and on a custom domain.
 * On GitHub Pages project sites the build sets NEXT_PUBLIC_BASE_PATH=/repo-name.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
