<template>
  <div class="home">
    <div class="links">
      <img id="logo-mobile" alt="Ami Logo" src="../assets/Ami-logo-blue.png">
      <div class="links-card">
        <HomeLink title="About" description="A little about me." link="/about"/>
        <HomeLink title="Blog" description="What posts I am writing." link="/blog"/>
        <HomeLink title="Music" description="What music I am writing." link="/music" />

      </div>
    </div>
    <div class="portrait">
      <img id="logo" alt="Ami Logo" src="../assets/Ami-logo-blue.png">
      <img id="portrait" alt="Ami Portrait" src="../assets/ami-photo-clear-gray.png">
      <div class="portrait-card">
        <HomeLink title="About" description="A little about me." link="/about"/>
        <HomeLink title="Blog" description="Why I have the best grand-big" link="/blog"/>
        <HomeLink title="Music" description="My most recent song." link="/music" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLink from '@/components/HomeLink.vue'

export default {
  name: 'Home',
  components: {
    HomeLink
  }
}
</script>
