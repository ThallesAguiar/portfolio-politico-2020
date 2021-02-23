<template>
  <section>
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/img5.png')"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
      class="d-flex flex-wrap"
      :class="$vuetify.breakpoint.smAndDown ? 'align-end' : 'align-center'"
    >
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12" color="rgba(5, 11, 31, .5)">
              <p
                :class="$vuetify.breakpoint.smAndDown ? 'text-left text-Subtitle 1 ml-4' : 'text-center text-h4 '"
              >
                <v-btn
                  :color="soundEvent.color"
                  fab
                  small
                  @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
                >
                  <v-icon>{{ audio.isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
                </v-btn>
                <br />Mas se o mundo podemos mudar
                <br />Tristeza, incerteza não terão lugar
                <br />Basta olhar para o lado e ver
                <br />Meu sorriso dizer...
                <br />Pode contar comigo
                <br />Quero mudar o mundo
                <br />Com coragem olhar pra trás
                <br />E saber que te encontrei em paz
                <br />Vendo que a fantasia vai se realizar.
                <br />
              </p>
              <p class="text-center">
                <small>Canção do Inuyasha - Mudar o Mundo (Change The World)</small>
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "Home",

  provide: {
    theme: { isDark: true },
  },

  data: () => ({
    tocando: false,
    audio: {
      file: new Audio(require("../assets/sound.mp3")),
      isPlaying: false,
    },
  }),

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
    soundEvent() {
      return this.audio.isPlaying ? { color: "pink" } : { color: "teal" };
    },
  },

  methods: {
    play(audio) {
      console.log(audio);
      audio.isPlaying = true;
      audio.file.play();
    },

    pause(audio) {
      console.log(audio);
      audio.isPlaying = false;
      audio.file.pause();
    },
  },
};
</script>

<style>
</style>
