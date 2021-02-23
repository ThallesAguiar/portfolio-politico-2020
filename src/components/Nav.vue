<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
    <v-toolbar-title class="text-h4 font-weight-black">Thalles Aguiar</v-toolbar-title>

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :to=" item.route"
            :exact="item.name === 'Inicio'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'NavAppBar',

    components: {
      Drawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      items: [
          {name:"Inicio", route:"/"},
          {name:"Sobre mim", route:"/about"},
          {name:"Ideias", route:"/ideias"},
          {name:"Contato", route:"/contact"},
        ]
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
