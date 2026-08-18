/** Resolve an image in `public/img` against the deploy base path, so the same
 *  build works at `/` on Vercel and at `/OneCare/` on GitHub Pages. */
export const asset = (file: string) => `${import.meta.env.BASE_URL}img/${file}`
