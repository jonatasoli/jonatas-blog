import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.e26674d1.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/index.7a40327c.js","_app/immutable/chunks/dates.56387e5a.js"];
export const stylesheets = [];
export const fonts = [];
