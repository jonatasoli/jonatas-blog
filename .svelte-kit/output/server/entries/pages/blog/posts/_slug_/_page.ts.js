const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  const slug = params.slug;
  const markdownPost = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../posts/52-semanas-de-planejamento.md": () => import("../../../../../chunks/52-semanas-de-planejamento.js"), "../../../../posts/afiando-o-machado-2021.md": () => import("../../../../../chunks/afiando-o-machado-2021.js"), "../../../../posts/desafio-12-projetos-em-12-meses.md": () => import("../../../../../chunks/desafio-12-projetos-em-12-meses.js"), "../../../../posts/desafio-fevereiro.md": () => import("../../../../../chunks/desafio-fevereiro.js"), "../../../../posts/desafio-janeiro.md": () => import("../../../../../chunks/desafio-janeiro.js"), "../../../../posts/desafio-pratica-regras.md": () => import("../../../../../chunks/desafio-pratica-regras.js"), "../../../../posts/estrutura-literal-vs-contrutor-em-rust.md": () => import("../../../../../chunks/estrutura-literal-vs-contrutor-em-rust.js"), "../../../../posts/minha-instalacao-arch-linux.md": () => import("../../../../../chunks/minha-instalacao-arch-linux.js"), "../../../../posts/mudando-path-poetry.md": () => import("../../../../../chunks/mudando-path-poetry.js"), "../../../../posts/porque-abandonei-o-desafio.md": () => import("../../../../../chunks/porque-abandonei-o-desafio.js"), "../../../../posts/tipos-primitivos-rust.md": () => import("../../../../../chunks/tipos-primitivos-rust.js") }), `../../../../posts/${slug}.md`);
  return {
    metadata: markdownPost.metadata,
    post: markdownPost.default
  };
};
export {
  load
};
