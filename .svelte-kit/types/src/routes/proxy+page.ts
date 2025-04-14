// @ts-nocheck
import type { MarkdownPostMetadataAndSlug } from "../types";
import type { PageLoad } from "./$types";

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
  // get posts from api with sveltekit special fetch
  const response = await fetch("/api/posts");

  // get posts from response
  const posts: MarkdownPostMetadataAndSlug[] =
    await response.json();
  console.log('Pages');
  console.log(posts);

  return {
    posts
  };
};
