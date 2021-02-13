<template>
  <div>
    <h1>The user is {{ $route.params.post }}</h1>
    <div class="hello" v-html="postcontent"/>
  </div>
</template>

<script>
//const x =  "@/assets/" + $route.params.post;
import { useRoute } from 'vue-router';
//import markdown from "@/assets/posts/post2.md";
//let markdown = require("@/assets/posts/" + route.params.post); 
let markdown = '<html></html>';

export default {
  setup() {
    const route = useRoute();

    const post = route.params.post; //computed(() => route.params.id);
    let postcontent = '<h1>' + post + '</h1>'//require("@/assets/posts/" + post); 
    return {
      postcontent
    };
  },
  data() {
    return {
      markdown
    };
  }
};
</script>