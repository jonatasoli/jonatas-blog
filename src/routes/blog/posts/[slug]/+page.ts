import type { PageLoad } from "./$types";
import type { MarkdownPost } from "../../../../types"

export const load: PageLoad = async ({params}) => {
  const slug = params.slug;

  const markdownPost: MarkdownPost = await import(
    `../../../../posts/${slug}.md`
  );

  return {
    metadata: markdownPost.metadata,
    post: markdownPost.default
  }
}
