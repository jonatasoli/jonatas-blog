<template>
  <Layout>
    <g-link to="/" class="link">&larr; Voltar</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date">{{ $page.post.date}} | {{$page.post.timeToRead}} min de leitura</p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
    <Disqus shortname="jonatasoliveiradev" :identifier="$page.post.title" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>
