import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { f as formatPublishedAt } from "../../../../../chunks/dates.js";
const prismNightOwl = "";
const CopyCodeInjector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const PostHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  return `<header class="p-4"><div class="w-full sm:w-3/5 mb-6"><div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">${metadata.youtubeId ? `<iframe${add_attribute("title", metadata.title, 0)}${add_attribute("src", `https://www.youtube.com/embed/${metadata.youtubeId}?origin=https://jonatasoliveira.dev`, 0)} allow="fullscreen"></iframe>` : `<img${add_attribute("src", metadata.imgUrl, 0)}${add_attribute("alt", metadata.title, 0)} class="object-cover">`}</div></div> <div><h1 class="text-4xl font-bold mb-4">${escape(metadata.title)}</h1> <div class="py-2 border-t dark:border-gray-700 inline-block"><span data-svelte-h="svelte-1e205ie">Published:</span> <time class="font-light"${add_attribute("datetime", metadata.publishedAt, 0)}>${escape(formatPublishedAt(metadata.publishedAt))}</time></div></div></header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { metadata, post: Post } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article>${validate_component(PostHeader, "PostHeader").$$render($$result, { metadata }, {}, {})} <div class="prose dark:prose-invert py-4 px-4 max-w-none">${validate_component(CopyCodeInjector, "CopyCodeInjector").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Post, "Post").$$render($$result, {}, {}, {})}`;
    }
  })}</div> <script${add_attribute("id", metadata.postId, 0)} src="//blog-dev-jonatas.disqus.com/count.js" async><\/script></article>`;
});
export {
  Page as default
};
