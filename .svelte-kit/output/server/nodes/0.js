

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fc2ccb23.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/index.7a40327c.js","_app/immutable/chunks/index.7aeff21f.js"];
export const stylesheets = ["_app/immutable/assets/0.46cfb7fa.css"];
export const fonts = [];
