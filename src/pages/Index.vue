<template>
  <Layout>
    <header class="header">
      <h1>Jônatas Oliveiar</h1>
      <p>A simple blog designed with Gridsome</p>
    </header>
    <section class="posts">
        <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "A simple blog",
  },
};
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>
