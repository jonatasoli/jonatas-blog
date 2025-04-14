// @ts-nocheck
import type { PageLoad } from "./$types";
import type { MarkdownPost } from "../../../../types"

export const load = async ({params}: Parameters<PageLoad>[0]) => {
  const slug = params.slug;

  const markdownPost: MarkdownPost = await import(
    `../../../../posts/${slug}.md`
  );

  return {
    metadata: markdownPost.metadata,
    post: markdownPost.default
  }
}
