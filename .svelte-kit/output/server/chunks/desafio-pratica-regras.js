import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "postId": 5,
  "title": "Desafio de prática - Regras",
  "imgUrl": "",
  "summary": "Regras pro desafio de prática",
  "publishedAt": "2021-12-27T00:00:00.000Z"
};
const Desafio_pratica_regras = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-aiv5o3">Projeto</h1> <ul data-svelte-h="svelte-1ymxgmg"><li>Precisa definir um período em meses ou anos</li> <li>Mapear o que quer aprender</li> <li>O plano precisa ser horas de prática estudos tem que ser a parte e não é necessário registrar</li> <li>Fazer cada projeto com duração máximo de 1 mês</li> <li>Escopo de projetos futuros pode ser corrigido</li></ul> <h2 data-svelte-h="svelte-1f2opcw">Regras para cada projeto</h2> <ul data-svelte-h="svelte-1gky4u"><li>Desenhar um mapa (Por que? O que? Como?)</li> <li>Artigo antes do projeto com o escopo e o mapa</li> <li>Retrospectiva depois do projeto</li> <li>Precisa ser público</li> <li>As horas precisam ser de prática</li> <li>Cada projeto precisa ser quebrado em pequenas atividades</li> <li>Comemorar entrega do projeto</li> <li>Comomorar cada habilidade que foi aprendida</li></ul> <h2 data-svelte-h="svelte-pgxe3h">Durante as sessões de prática</h2> <ul data-svelte-h="svelte-59yw9"><li>Aspecto que quer melhorar</li> <li>Precisa ser especifico</li> <li>Registrar o dia-a-dia diário de bordo
<strong>Ser específico</strong> Por o que quer melhorar
** Por detalhes que ache relevante</li> <li>Metas ambiciosas</li></ul>`;
});
export {
  Desafio_pratica_regras as default,
  metadata
};
