<template>
  <v-app id="inspire">
    <v-main>
      <Nav />
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import 'vue-lazy-youtube-video/dist/style.css'
export default {
  name: "App",
  metaInfo: {
    title: "18000",
    titleTemplate: "%s | Thalles Aguiar",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  components: {
    Nav: () => import("./components/Nav.vue"),
  },

  created(){
    let path = localStorage.getItem('path');
    if(path){
      localStorage.removeItem('path');
      this.$router.push(`/${path}`);
    }
  }
};
</script>
<style lang="sass">
.extra-padding
  padding-bottom: 96px !important
  padding-top: 96px !important

  @media screen and (max-width: 959px)
    padding-top: 48px !important
    padding-bottom: 48px !important
</style>

