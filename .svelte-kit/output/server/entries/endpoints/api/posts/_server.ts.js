import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const markdownPostModules = /* @__PURE__ */ Object.assign({
    "/src/posts/52-semanas-de-planejamento.md": () => import("../../../../chunks/52-semanas-de-planejamento.js"),
    "/src/posts/afiando-o-machado-2021.md": () => import("../../../../chunks/afiando-o-machado-2021.js"),
    "/src/posts/desafio-12-projetos-em-12-meses.md": () => import("../../../../chunks/desafio-12-projetos-em-12-meses.js"),
    "/src/posts/desafio-fevereiro.md": () => import("../../../../chunks/desafio-fevereiro.js"),
    "/src/posts/desafio-janeiro.md": () => import("../../../../chunks/desafio-janeiro.js"),
    "/src/posts/desafio-pratica-regras.md": () => import("../../../../chunks/desafio-pratica-regras.js"),
    "/src/posts/estrutura-literal-vs-contrutor-em-rust.md": () => import("../../../../chunks/estrutura-literal-vs-contrutor-em-rust.js"),
    "/src/posts/minha-instalacao-arch-linux.md": () => import("../../../../chunks/minha-instalacao-arch-linux.js"),
    "/src/posts/mudando-path-poetry.md": () => import("../../../../chunks/mudando-path-poetry.js"),
    "/src/posts/porque-abandonei-o-desafio.md": () => import("../../../../chunks/porque-abandonei-o-desafio.js"),
    "/src/posts/tipos-primitivos-rust.md": () => import("../../../../chunks/tipos-primitivos-rust.js")
  });
  const postPromises = [];
  for (const path in markdownPostModules) {
    const loadMarkdownPostModule = markdownPostModules[path];
    const loadPostSlugAndMetadata = async function() {
      const markdownPostModule = await loadMarkdownPostModule();
      const slug = path.slice(path.lastIndexOf("/") + 1).replace(".md", "");
      return {
        slug,
        metadata: markdownPostModule.metadata
      };
    };
    postPromises.push(loadPostSlugAndMetadata());
  }
  const posts = await Promise.all(postPromises);
  const sortedPosts = posts.sort((post1, post2) => {
    console.log("post1");
    console.log(post1);
    console.log("post2");
    console.log(post2);
    return new Date(post2.metadata.publishedAt).getTime() - new Date(post1.metadata.publishedAt).getTime();
  });
  return json(sortedPosts);
};
export {
  GET
};
