import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "postId": 3,
  "title": "Mudando path do poetry",
  "imgUrl": "",
  "summary": "Como configurar o poetry para mudar o diretório padrão que ele cria a Virtual Env",
  "publishedAt": "2021-01-27T00:00:00.000Z"
};
const Mudando_path_poetry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1bsbiul">Olá tudo bem?</p> <p data-svelte-h="svelte-9g8xwa">Estou passando aqui pra dar uma dica rápida, quando você possui muitos projetos em python as vezes fica difícil de gerenciar as Virtal Envs do projetos.</p> <p data-svelte-h="svelte-khpjq4">Quando usava o pipenv isso não era tanto um problema, pois ele tinha um comando para remover uma virtualenv e recria-la novamente, porém o poetry até esse momento ainda não criou tal comando. Ai lembre do Renzo do <a href="https://www.python.pro.br" rel="nofollow">Python Pro</a>, falava que criava as envs diretamente no projeto numa pasta .env, então decidi fazer assim também no meu ambiente e vem me ajudando muito.</p> <p data-svelte-h="svelte-12z77tz">Pra fazer isso é bem simples é só executar o comando abaixo no seu terminal:</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">poetry config virtualenvs.in-project true</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-ggr9w7">Lembrando que pra funcionar você precisa ter o poetry instalado no seu pipenv =D</p> <p data-svelte-h="svelte-vajgz6">Bom gente é isso, espero que lhe ajudem.</p>`;
});
export {
  Mudando_path_poetry as default,
  metadata
};
