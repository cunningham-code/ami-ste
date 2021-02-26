<template>
  <div class="blog">
    <router-link to="/">
       <img id="blog-logo" alt="Ami Logo" src="@/assets/Ami-logo-blue.png">
    </router-link>
    <div class="blog-card">
      <a v-for="article in articles" :key="article.pubDate" style="text-decoration: none" :href="article.link" target="_blank">
        <div class="blog-posts">
            <h1>{{ article.title }}</h1>
            <p style="font-weight: 200; font-size: 0.75rem">{{ article.link }}</p>
            <h3>{{ article.pubDate }}</h3>
        </div>
      </a>
    </div>
    <Footer/>
  </div>
</template>

<script>
import markdown from "@/assets/example.md";
import Footer from "@/components/Footer.vue";
import axios from "axios";

function dateToText(d) {
  let x = new Date(d);
  return x.toDateString()
}

function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
}

function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
}


export default {
  data() {
    return {
      markdown,
      articles: [{
            "title": "Loading...",
            "pubDate": "Loading...",
            "link": "https://medium.com/@amiyoshimura/",
            "guid": "https://medium.com/p/bccb31d4f87c",
            "author": "Jack Cunningham",
            "thumbnail": "https://cdn-images-1.medium.com/max/660/1*0C8vcrrxCfQVr-rCWBSIRQ.png",
            "description": "Loading from Medium. Click here to go to my Medium page if we had an issue pulling in my latest articles here.",
            "enclosure": {},
            "categories": [
                "podcast",
                "limetown",
                "social-media"
            ]
        }]
    };
  },
  
  mounted() {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amiyoshimura")
      .then(res => {
        this.articles = res.data.items;
        
        for(var c = 0; c < this.articles.length; c++) {
          console.log(this.articles[c].title)
          const regex =  new RegExp(this.articles[c].title,'g'); // correct way
          this.articles[c].description = this.articles[c].description.replace(regex,''); 
          this.articles[c].description = shortenText(toText(this.articles[c].description),0, 500) + "..."
        }
        
        for(c = 0; c < this.articles.length; c++) {
          this.articles[c].pubDate = dateToText(this.articles[c].pubDate)
        }
        
        console.log(this.articles[0].author)
      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })
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