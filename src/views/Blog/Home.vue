<template>
  <div class="blog">
    <img id="blog-logo" alt="Ami Logo" src="@/assets/Ami-logo-blue.png">
    <div class="blog-card">
      <router-link v-for="article in articles" :key="article.date" style="text-decoration: none" :to="article.file">
        <div class="blog-posts">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
        </div>
      </router-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
import markdown from "@/assets/example.md";
import Footer from "@/components/Footer.vue";

import articles from "@/assets/posts/index.js";

export default {
  data() {
    return {
      markdown,
      articles
    };
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
  #blog-logo {
    width: 50%;
    width: 150px;
    margin: 50px 0px;
  }
  .blog-card {
    display: block;
    margin: 0 auto;
    max-width: 800px;
    background-color: #ffffff;
    padding: 30px;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 30px 60px 0 rgba(132, 145, 163, 0.6);
    text-align: left;
  }

  .blog-posts {
     border-left: 5px solid #8491a3;
     padding: 30px;
     margin: 10px;
     color:  #000;
  }
  .blog-posts h1 {
     color: #8491a3;
  }
</style>