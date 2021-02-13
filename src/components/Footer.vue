<template>
  <div class="footer">
    <div class="footer-card">
       <img id="ami-smile" alt="Ami Logo" src="../assets/ami-smile.jpeg">
        <p><i>{{description}}</i></p>
        <div class="footer-links">
            <a v-for="link in links" :key="link" :href="link.href" target="_blank" rel="noopener noreferrer">
                {{ link.label }}
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  
  data () {
      return {
          description: "Let's Connect",
          links: [
            { label: 'LinkedIn', href: "https://www.linkedin.com/in/ami-yoshimura/" },
            { label: 'Twitter',  href: "https://twitter.com/yoshimura_ami" },
            { label: 'Resume',  href: "https://amiayoshimura.wixsite.com/resume" },
            { label: 'Calendar',  href: "https://calendly.com/amiy/ami-yoshimura-meetings?month=2021-02" },
            { label: 'Email',  href: "mailto:%61%61%79%32%32%33%40%6c%65%68%69%67%68%2e%65%64%75" },
            { label: 'Spotify',  href: "https://open.spotify.com/artist/3xCQDRaZVlQfCEIgbiWjy9?si=wZlx4ZGOS2SxVcjZPvwitQ&nd=1" },
          ]
       }
  }
  
}
</script>

<style scoped>

    #ami-smile {
      width: 100px;
      border-radius: 50%;
      border: 5px solid #F9B5AC;
      margin: 0 auto;
    }

    .footer {
        margin: 100px 0px 50px 0px;
    }

    .footer-card {
        margin: 30px auto;
        max-width: 800px;
        text-align: center !important;
        display: block;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px 40px;
        text-align: left;
        box-shadow: 0 30px 60px 0 rgba(249, 181, 172, 0.6);
    }

    .footer-links { 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
    }

    .footer-links a {
      color: #F9B5AC;
      font-weight: bold;
      text-decoration: none;
      text-align: left;
      padding: 10px;
      margin: 10px;
      border-bottom: 5px solid#F9B5AC;
    }
</style>