<template>
  <v-container>
    <div>
      <p class="text-subtitle 1">
        Me preocupo muito com a educação, pois somente um povo com educação
        DERRUBA UM GOVERNO. <br />
        Umas das coisas que aprendi lendo o livro, PAI RICO PAI POBRE, é que na
        escola e faculdade, que eles te ensinam a ter uma profissão para o que?
        Para trabalhar pros outros. E em casa se deve aprender educação
        financeira.<br />
        Mas e se nós pudemossemos levar educação financeira para as escolas?
      </p>
      <v-divider />
      <p class="text-title"><strong>Educação financeira</strong></p>
      <p class="text-subtitle 1">
        Desafiar as crianças do ensino fundamental a serem pequenos empresários,
        e do ensino médio a criarem a sua prórpia empresa.<br />
        Ter pequenas aulas de administração de finanças, gestão, nas escolas e
        ensinar sobre o MEI (Micro empreendedor individual) e o beneficio de um
        CNPJ.
      </p>
      <v-divider />
      <p class="text-title"><strong>Lógica e programação</strong></p>
      <p class="text-subtitle 1">
        Esta área de lógica e programação é bem a minha área. Como disse Steve
        Jobs:
        <strong
          >"Todo mundo deveria aprender a programar um computador, porque isso
          ensina você a pensar".</strong
        >
        A proposta seria de voltar as aulas de informatica nas escolas com foco
        em lógica de programação, e depois ensinar as carreiras de programador,
        como na area de jogos, sistemas, inteligencia artificial entre outras,
        MAS O FOCO SERIA NA LÓGICA E PROGRAMAÇÃO.<br />
        Caso não tenha professor, posso ver algum tempo disponível para criar
        workshops nas escolas com esse foco.<br />
        <strong
          >E QUEM SABE, NA ESCOLA NÃO SAI UMA IDEIA QUE VIRE UMA STATUP, E LOGO
          VIRE UM UNICÓNIO.</strong
        >
        Se não sabe o que eu quis me referir, acesse o link das ideias de
        empreendedorismo.<br />
        <a
          href="https://novaescola.org.br/conteudo/113/por-que-ensinar-programacao-na-escola"
          target="_blank"
          rel="noopener noreferrer"
          >Porque ensinar programação nas escolas?</a
        >
      </p>
      <div class="video">
        <LazyYoutubeVideo :src="video.url" />
        <small
          >Todo mundo deveria aprender a programar (What most schools don't
          teach - dublado).</small
        >
      </div>
      <br />
      <v-divider />
      <p class="text-title"><strong>Libras</strong></p>
      <p class="text-subtitle 1">
        Esta ideia vai em homenagem ao meu amigo Elson, que é meu colega na
        faculdade, e que é mudo.<br />
        Nos EUA existe nas escolas matérias eletivas, que são materias que você
        pode fazer ou não. O objetivo seria criar formas de inclusão para as
        pessoas que precisam. QUem sabe criar worksshops para aprender libras,
        entre outras coisas de acessibilidade.
      </p>
      <br />
      <v-divider />
      <p class="text-title"><strong>Brainstorming</strong></p>
      <p class="text-subtitle 1">
        Treinamento de Brainstorming para representantes de bairros, para que se
        desenvolva novas ideias e formas de implementar estas ideias nos
        bairros. Para entender mais sobre a ideia, clique no botão a seguir.
      </p>
      <a
        href="https://www.facebook.com/100001298488440/videos/3390596410993608/"
        target="_blank"
        rel="noopener noreferrer"
        ><v-btn color="teal" dark>Assistir o video do facebook</v-btn></a
      >
      <v-img src="@/assets/brain.jpg" />
    </div>
  </v-container>
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  name: "YourAwesomeComponent",
  components: {
    LazyYoutubeVideo,
  },
  data: () => ({
    video: {
      url: "https://www.youtube.com/embed/4iKu9qtCSXg",
      previewImageSize: "maxresdefault",
    },
  }),
};
</script>

<style>
</style>