const load = async ({ fetch }) => {
  const response = await fetch("/api/posts");
  const posts = await response.json();
  console.log("Pages");
  console.log(posts);
  return {
    posts
  };
};
export {
  load
};
