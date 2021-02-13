<template>
  <router-link style="text-decoration: none" :to="link">
  <div class="home-link">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
  </router-link>
</template>

<script>
export default {
  name: 'HomeLink',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style scoped>
  .home-link {
    text-align: left;
    padding: 20px;
    margin: 20px;
    border-left: 5px solid #8491a3;
  }
  h2 {
    margin: 0;
    text-align: left;
    color: #8491a3;
    text-decoration: underline;
  }

  p { 
    margin: 0;
    text-align: left;
    color: #000;
    text-decoration-line: none;
  }

  @media only screen and (max-width: 850px) {
    p {
      display: none;
    }

    .home-link {
      text-align: center;
      padding: 5px;
      margin: 10px;
      border-left: none;
      border-bottom: 5px solid #8491a3;
    }
    
    h2 {
      text-decoration: none;
    }
  }
</style>