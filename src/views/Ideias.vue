<template>
  <v-card>
    <v-toolbar color="teal" flat>
      <template>
        <v-tabs v-model="tabs" centered grow>
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tab :to="ideia.route" v-for="(ideia, index) in ideias" :key="index"
            ><strong>{{ ideia.name }}</strong></v-tab
          >
        </v-tabs>
      </template>
    </v-toolbar>
    <!-- Confira as minhas propostas de ideias para Santo Ângelo. -->
    <v-container v-if="this.$route.path === '/ideias'">
      <p class="text-subtitle 1">
        As minhas ideias vou torna-lás pública, para que as pessoas possam ver
        que Santo Ângelo pode mais, que não é só fazer asfalto que esta tudo
        bem. Estas ideias possam ser usadas pelas pessoas que vão vencer, para
        tornar Santo Ângelo mais inteligente. Ah! muitas dessas ideias talvez já
        tenha sido debatido, porem, tudo precisa de verbas né.
        <br />
        <strong
          >NÃO FICAREI TRISTE SE NÃO VENCER, SIMPLISMENTE QUERO QUE MUDE ESTA
          PANELINHA DE POLITICA QUE EXISTE EM NOSSA CIDADE. VENHO SOLICITAR SEU VOTO DE APOIO, SIMPLISMENTE VOTE DIFERENTE, RENOVA SANTO
          ÂNGELO. TEM GENTE QUE PASSOU 4 ANOS OU MAIS SEM FAZER NADA E TA
          TENTANDO SE REELEGER NOVAMENTE, PEEEEEENSEEEE BEEEEM!!!!! <br />
          NÃO VOTE EM PARTIDO E NEM NAS FIGURINHAS REPETIDAS QUE NÃO FIZERAM
          NADA QUANDO ELEITAS, VOTE NA PESSOA E SUA IDEIAS. TUDO DE BOM PRA
          VOCÊS!!!</strong
        >
      </p>
      <v-img width="321" src="@/assets/ideabg.jpg" />
    </v-container>
    <router-view />
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      tabs: null,
      ideias: [
        { name: "Cidades inteligentes", route: "smartcities" },
        { name: "Meio Ambiente", route: "environment" },
        { name: "Animais", route: "animals" },
        { name: "Empreendedorismo", route: "entrepreneurship" },
        // { name: "Saúde", route: "health" },
        { name: "Segurança pública", route: "publicSecurity" },
        { name: "Educação", route: "education" },
        { name: "Cultura", route: "culture" },
      ],
    };
  },
};
</script>