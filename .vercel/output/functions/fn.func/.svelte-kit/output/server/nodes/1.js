

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c2135027.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/index.7a40327c.js","_app/immutable/chunks/singletons.8aa169db.js","_app/immutable/chunks/index.7aeff21f.js"];
export const stylesheets = [];
export const fonts = [];
