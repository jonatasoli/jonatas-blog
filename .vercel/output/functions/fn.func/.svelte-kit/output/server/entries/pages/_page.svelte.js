import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
import { f as formatPublishedAt } from "../../chunks/dates.js";
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-6 px-4" data-svelte-h="svelte-18pln6z"><div class="w-40 h-40 rounded-full overflow-hidden"><img src="Jonatas.jpg" alt="Profile" class="object-cover"></div> <div class="py-4 space-y-2"><h2 class="text-4xl font-bold">Olá sou Jônatas Oliveira.</h2> <p class="text-2xl font-light">Eu sou um desenvolvedor full-stack amante de open-source
      trabalho com desenvolvimento web e no momento
      estou trabalhando no meu primeiro jogo e produzo conteúdo
      no youtube e na twich.</p> <p class="text-2xl font-thin"><a href="https://www.udemy.com/course/rust-da-logica-aos-jogos/?referralCode=C82C9336A8CF938D12E7" target="_blank"><img src="banner-curso-rust.png" alt="course" class="object-cover"></a></p></div></section>`;
});
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let href = `/blog/posts/${post.slug}`;
  let youtubeHref = post.metadata.youtubeId ? `https://youtu.be/${post.metadata.youtubeId}` : "";
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<article class="p-4 sm:flex sm:space-x-4"><a${add_attribute("href", href, 0)} class="block sm:w-80"><div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"><img${add_attribute("src", post.metadata.imgUrl, 0)}${add_attribute("alt", post.metadata.title, 0)} class="object-cover"></div></a> <div class="flex-1 py-2 sm:py-0"><a${add_attribute("href", href, 0)}><h3 class="text-xl font-medium mb-1">${escape(post.metadata.title)}</h3> <p class="font-light text-gray-60 dark:text-gray-300"><span data-svelte-h="svelte-1e205ie">Published:</span> <time${add_attribute("datetime", post.metadata.publishedAt, 0)}>${escape(formatPublishedAt(post.metadata.publishedAt))}</time></p> <p class="py-2 font-light">${escape(post.metadata.summary)}</p></a> <div class="flex space-x-4 text-gray-600 dark:text-gray-300 font-light underline"><a${add_attribute("href", href, 0)}>Leia Mais</a> ${post.metadata.youtubeId ? `<a${add_attribute("href", youtubeHref, 0)}>Assista</a>` : ``}</div></div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(HomeHeader, "HomeHeader").$$render($$result, {}, {}, {})} <section class="pb-6"><header class="inline-block border-b dark:border-gray-700 py-2 mx-4 mb-4" data-svelte-h="svelte-lc0iyc"><h2 class="text-3xl font-semibold">Blog Posts</h2></header> <section class="divide-y dark:divide-gray-700">${each(data.posts, (post) => {
    return `${validate_component(PostList, "PostListing").$$render($$result, { post }, {}, {})}`;
  })}</section></section>`;
});
export {
  Page as default
};
