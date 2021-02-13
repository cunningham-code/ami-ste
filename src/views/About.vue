<template>
  <div class="about">
    <div class="header">
      <h1>AMI YOSHIMURA [吉村明洋]</h1>
      <p>Venture. Community. Startups. Music.</p>
    </div>
    <div v-html="AboutArticle" class="content"></div>
    <Footer/>
  </div>
</template>

<script>
import AboutArticle from "@/assets/about.md";
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  data() {
    return {
      AboutArticle
    };
  },
  components: {
    Footer
  }
}

</script>

<style scoped>
  .header {
    padding: 40px;
    color: #fff;
    background-image: linear-gradient(to bottom right, #F9B5AC, #8491a3);
  }
  .header h1 {
    font-size: 3rem;
  }
  .header p {
    font-size: 1.5rem;
  }
  
  .content {
    max-width: 800px;
    margin: 40px auto;
    display: block;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px 40px;
    text-align: left;
    box-shadow: 0 30px 60px 0 rgba(132, 145, 163, 0.6);
  }
</style>