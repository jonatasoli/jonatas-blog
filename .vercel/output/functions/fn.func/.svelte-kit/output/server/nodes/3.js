import * as universal from '../entries/pages/blog/posts/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/posts/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.13cd6bdf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/index.7a40327c.js","_app/immutable/chunks/dates.56387e5a.js"];
export const stylesheets = ["_app/immutable/assets/3.79497bea.css"];
export const fonts = [];
