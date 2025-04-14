export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Jonatas.jpg","banner-curso-rust.png","favicon.png","post-images/calendario-tumb-tratada.png","post-images/desafio_12_projetos.png","post-images/rust-tipos-primitivos.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cd826ec3.js","app":"_app/immutable/entry/app.7d05a29f.js","imports":["_app/immutable/entry/start.cd826ec3.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/singletons.8aa169db.js","_app/immutable/chunks/index.7aeff21f.js","_app/immutable/entry/app.7d05a29f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.94dd1e8a.js","_app/immutable/chunks/index.7a40327c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.ts.js'))
			},
			{
				id: "/blog/posts/[slug]",
				pattern: /^\/blog\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
