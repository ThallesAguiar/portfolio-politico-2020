<template>
  <v-container>
    <v-card height="300">
      <p class="text-h5">Estas são as redes sociais que eu mais uso. Pode me chamar lá.</p>
      <v-bottom-navigation bottom>
        <a
          href="https://www.facebook.com/thallesaguiar21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn>
            <span>Facebook</span>

            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </a>

        <a
          href="https://www.instagram.com/thallestyzz/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn>
            <span>Instagram</span>

            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </a>
      </v-bottom-navigation>
    </v-card>
  </v-container>
</template>

<script>
export default {
  //   data: () => ({ value: "recent" }),
};
</script>

<style>
a {
  text-decoration: none;
}
</style>